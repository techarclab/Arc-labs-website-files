# ARC LABS — GA4 + GTM Install Guide

You currently have **no analytics in the codebase** (confirmed: no gtag/GTM/Clarity/Pixel
anywhere in `src/`, `public/`, or `build/`). This file gives you a copy-paste install.

**Recommended approach: install Google Tag Manager (GTM), then deploy GA4 *inside* GTM.**
Reason: with GTM you add GA4, Microsoft Clarity, Meta Pixel, and LinkedIn Insight Tag
later **without touching code again**. One code change now, everything else via the GTM UI.

> SPA note: This is a React Router single-page app. The browser only loads `index.html`
> once, so GA4 will record the first pageview but **not** subsequent route changes unless
> you fire pageviews on navigation. Step 3 fixes that. Without it, your "pages per session"
> and per-page numbers will be wrong.

---

## Step 1 — Create the accounts (no code)

1. **GTM:** https://tagmanager.com → create a *Web* container for `arclabs.in`.
   You get a container ID like `GTM-XXXXXXX`.
2. **GA4:** https://analytics.google.com → create a property + a *Web* data stream for
   `https://arclabs.in`. You get a Measurement ID like `G-XXXXXXXXXX`.
3. **Search Console:** https://search.google.com/search-console → add `arclabs.in`,
   verify (DNS or the GA tag), then submit `https://arclabs.in/sitemap.xml`.

---

## Step 2 — Paste GTM into `public/index.html`

Replace `GTM-XXXXXXX` with your real container ID.

**(A) In `<head>` — paste immediately after the opening `<head>` tag (line ~3):**

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

**(B) Immediately after the opening `<body>` tag (your line ~105) — the noscript fallback:**

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

Then in the **GTM UI**: New Tag → *Google Analytics: GA4 Configuration* → enter your
`G-XXXXXXXXXX` → Trigger: *Initialization - All Pages* → Save → **Submit/Publish**.

---

## Step 3 — Fire pageviews on SPA route changes (REQUIRED for this site)

Add a tiny listener so each React Router navigation pushes a pageview into `dataLayer`.
Put this in `src/App.jsx`, inside the existing `ScrollReset` component you already have
(it already runs on every `pathname` change — reuse it):

```jsx
function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // GA4 SPA pageview via GTM dataLayer
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "spa_pageview",
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname]);
  return null;
}
```

Then in **GTM**: create a *Custom Event* trigger firing on `spa_pageview`, and a second
GA4 *Event* tag (event name `page_view`) using that trigger, passing `page_path` /
`page_location` / `page_title` as parameters. Publish.

---

## Step 4 — Track the 5 numbers that matter (lead + WhatsApp events)

Your weekly scorecard (visitors, qualified leads, demo bookings, proposal requests,
revenue) needs **event** tracking, not just pageviews. Push events where actions happen:

**Lead form success** — in each form's submit handler, right after the Firestore write
succeeds (Programs.jsx, LabPackages.jsx, CSRPartners.jsx, Checkout.jsx):

```jsx
window.dataLayer?.push({
  event: "generate_lead",
  lead_type: "program_curriculum",     // or "custom_proposal" / "csr" / "order"
  form_location: window.location.pathname,
});
```

**WhatsApp click** — add an onClick to your WhatsApp `<a>` tags (App.jsx float +
the per-page buttons):

```jsx
onClick={() => window.dataLayer?.push({ event: "whatsapp_click",
  link_location: window.location.pathname })}
```

In GA4, mark `generate_lead` (and optionally `whatsapp_click`, `demo_booking`) as
**Key events (conversions)** under Admin → Events. That is what populates your scorecard.

---

## Step 5 — Add the others later (no code change, all in GTM)

- **Microsoft Clarity** (free heatmaps/session replay): GTM has an official Clarity tag
  template — add tag, paste Clarity project ID, trigger All Pages. **Do this; it's the
  highest-value free tool for diagnosing why visitors leave.**
- **Meta Pixel** — only once you run Meta ads.
- **LinkedIn Insight Tag** — relevant for your B2B/CSR audience when you start LinkedIn ads.

---

## Verify it works

1. GTM → **Preview** mode → load arclabs.in → confirm tags fire and route changes
   send `page_view`.
2. GA4 → **Realtime** → you should see yourself and your test events.
3. Search Console → Sitemaps → status *Success* within a day or two.

Until Step 1–4 are live, your KPI table (bounce rate, conversion rate, returning
visitors, WhatsApp click rate) is unmeasurable.
