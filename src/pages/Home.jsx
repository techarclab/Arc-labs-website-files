import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../styles/Home.css";

/* ─── Hero ─────────────────────────────────────────────── */
function Hero() {
  const STATS = [
    { num: "25K+",  label: "Students Upskilled" },
    { num: "1K+",   label: "Faculty Trained" },
    { num: "10+",   label: "Years Experience" },
    { num: "500+",  label: "Institutions" },
  ];

  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-inner">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          MSME Registered &middot; Made in India &middot; Hyderabad
        </div>

        <h1>
          AI, IoT &amp; Robotics<br />
          <span className="accent">Lab Setup</span> for<br />
          <span className="blue">Schools &amp; Colleges</span>
        </h1>

        <p className="hero-sub">
          Full lab infrastructure — hardware, curriculum, teacher training,
          and annual support. Designed in Hyderabad. Delivered across India.
          One partner, zero complexity.
        </p>

        <div className="hero-actions">
          <Link to="/lab-packages" className="btn btn-primary">
            Set Up a Lab &rarr;
          </Link>
          <Link to="/programs" className="btn btn-secondary">
            Explore Programs
          </Link>
        </div>

        <div className="hero-stats">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Marquee ────────────────────────────────────── */
function TrustBar() {
  const ITEMS = [
    "IIT Programs Delivered",
    "NEP 2020 Aligned",
    "MSME Registered",
    "Made-in-India Hardware",
    "25,000+ Students",
    "CSR-Ready Labs",
    "IoT + Robotics + AI Systems",
    "ATL Compatible Kits",
    "Teacher Certification",
  ];
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="trust-bar">
      <div className="trust-track">
        {doubled.map((item, i) => (
          <span className="trust-item" key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Services ─────────────────────────────────────────── */
function Services() {
  const SERVICES = [
    {
      icon: "S",
      bg: "var(--accent)",
      title: "School Lab Setup & STEM",
      desc: "End-to-end IoT & Robotics lab installation for Classes 3-10. Hardware, curriculum, installation, and ongoing support — bundled.",
      link: "/lab-packages",
    },
    {
      icon: "C",
      bg: "var(--blue)",
      title: "College Training",
      desc: "Industry-driven curriculum in IoT, AI, Cloud, and Embedded Systems. Real projects, live hardware, certification.",
      link: "/programs",
    },
    {
      icon: "O",
      bg: "var(--violet)",
      title: "Online Certification",
      desc: "Structured online programs with mentor-led sessions, hands-on projects, and industry-recognized certification.",
      link: "/verify",
    },
    {
      icon: "R",
      bg: "var(--amber)",
      title: "CSR Lab Implementation",
      desc: "Complete CSR-funded lab setup with impact reporting, cost-per-beneficiary data, and measurable learning outcomes.",
      link: "/csr-partners",
    },
    {
      icon: "T",
      bg: "var(--rose)",
      title: "Teacher Training",
      desc: "Two-level certification program that makes teachers independently capable of delivering IoT and Robotics education.",
      link: "/programs",
    },
    {
      icon: "H",
      bg: "var(--text-3)",
      title: "Custom Hardware & R&D",
      desc: "Made-in-India development boards and educational kits. Custom IoT and embedded system design for institutions.",
      link: "/products",
    },
  ];

  return (
    <section className="section" id="services">
      <div className="section-label">Programs</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "0.5rem" }}>
        <h2 className="section-heading">
          Everything an institution needs.<br />
          <span style={{ color: "var(--accent)" }}>One partner.</span>
        </h2>
        <p className="section-desc" style={{ marginBottom: 0 }}>
          From lab design to curriculum delivery — we handle it all.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((s) => (
          <Link to={s.link} className="service-card" key={s.title} style={{ textDecoration: "none", color: "inherit" }}>
            <div className="service-icon" style={{ background: s.bg }}>
              {s.icon}
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="service-link">Learn more &rarr;</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ─── Stats Band ───────────────────────────────────────── */
function StatsBand() {
  const STATS = [
    { num: "25,000+", label: "Students Upskilled", desc: "Schools, colleges & corporates" },
    { num: "1,000+",  label: "Faculty Certified",  desc: "Including IIT & NIT programs" },
    { num: "3,000+",  label: "Training Sessions",  desc: "Delivered across India" },
    { num: "10+",     label: "Years in EdTech",     desc: "MSME-registered, Hyderabad" },
    { num: "500+",    label: "Institutions",        desc: "Schools, colleges & labs" },
  ];

  return (
    <div className="stats-band">
      <div className="stats-grid">
        {STATS.map((s) => (
          <div key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Products Preview ─────────────────────────────────── */
function ProductsPreview() {
  const PRODUCTS = [
    {
      image: "/images/products/lite-kit.jpg",
      label: "STARTER",
      name: "ARC Labs IoT Lite Kit",
      desc: "Beginner IoT board with Arduino & ESP32 support. Essential sensors for classroom learning.",
      tags: ["Arduino", "ESP32", "IoT Basics"],
    },
    {
      image: "/images/products/pro-kit.jpg",
      label: "PRO",
      name: "ARC Labs IoT Pro Kit",
      desc: "Advanced board with Raspberry Pi & ESP32, industrial sensors, and cloud connectivity.",
      tags: ["Raspberry Pi", "ESP32", "Cloud IoT"],
    },
    {
      image: "/images/products/experience-kit.jpg",
      label: "FLAGSHIP",
      name: "IoT Experience Kit",
      desc: "All-in-one platform — Arduino, ESP32, STM32, Pico, Raspberry Pi. The complete lab solution.",
      tags: ["Multi-MCU", "LoRa", "Research"],
    },
  ];

  return (
    <section className="section" id="products">
      <div className="products-header">
        <div>
          <div className="section-label">Hardware</div>
          <h2 className="section-heading">
            Made in India.<br />
            <span style={{ color: "var(--accent)" }}>Built for classrooms.</span>
          </h2>
        </div>
        <Link to="/products" className="btn btn-secondary">
          View All Products &rarr;
        </Link>
      </div>

      <div className="products-grid">
        {PRODUCTS.map((p) => (
          <Link to="/products" className="product-card" key={p.name}>
            <div className="product-img">
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
              <span className="product-label">{p.label}</span>
            </div>
            <div className="product-body">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="product-tags">
                {p.tags.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ─── Packages Preview ─────────────────────────────────── */
function Packages() {
  const TIERS = [
    {
      tier: "TIER 01",
      name: "Starter Lab",
      price: "₹2.5L",
      period: "one-time",
      featured: false,
      features: [
        { text: "ARC Labs IoT Lite Kit (15 units)", hi: false },
        { text: "NEP 2020 aligned curriculum — Level 1", hi: false },
        { text: "2-day teacher onsite training", hi: false },
        { text: "Lab branding & installation", hi: false },
        { text: "6-month support contract", hi: false },
        { text: "Digital student workbooks", hi: true },
      ],
    },
    {
      tier: "TIER 02",
      name: "Standard Lab",
      price: "₹5L",
      period: "one-time",
      featured: true,
      features: [
        { text: "ARC Labs IoT Pro Kit (20 units)", hi: false },
        { text: "Full curriculum — Levels 1 & 2", hi: false },
        { text: "3-day teacher certification program", hi: false },
        { text: "Complete lab installation & branding", hi: false },
        { text: "Annual support + curriculum updates", hi: true },
        { text: "Student assessment portal access", hi: true },
      ],
    },
    {
      tier: "TIER 03",
      name: "Premier Lab",
      price: "₹10L+",
      period: "custom",
      featured: false,
      features: [
        { text: "Full IoT, Robotics + AI lab — custom design", hi: false },
        { text: "Robotics + AI + IoT complete stack", hi: false },
        { text: "5-day teacher certification", hi: false },
        { text: "Priority installation & dedicated support", hi: false },
        { text: "CSR impact reporting & documentation", hi: true },
        { text: "Co-branded lab with ARC LABS", hi: true },
      ],
    },
  ];

  return (
    <section className="section packages-section" id="packages">
      <div className="section-label">Lab Packages</div>
      <h2 className="section-heading">
        Clear packages.<br />
        <span style={{ color: "var(--accent)" }}>No custom quoting.</span>
      </h2>
      <p className="section-desc">
        Three fixed tiers. Every tier includes hardware, curriculum,
        training, and support.
      </p>

      <div className="packages-grid">
        {TIERS.map((t) => (
          <div className={`package-card${t.featured ? " featured" : ""}`} key={t.name}>
            <div className="package-tier">{t.tier}</div>
            <h3>{t.name}</h3>
            <div className="package-price">
              {t.price} <span>/ {t.period}</span>
            </div>
            <ul className="package-features">
              {t.features.map((f) => (
                <li className={f.hi ? "hi" : ""} key={f.text}>{f.text}</li>
              ))}
            </ul>
            <Link
              to="/lab-packages"
              className={`btn ${t.featured ? "btn-primary" : "btn-secondary"}`}
              style={{ width: "100%", justifyContent: "center" }}
            >
              Get This Package &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── CSR Section ──────────────────────────────────────── */
function CSR() {
  const METRICS = [
    { val: "₹800", label: "Min. cost per beneficiary" },
    { val: "3 Yrs",     label: "Outcome tracking" },
    { val: "Sch VII",   label: "Companies Act eligible" },
    { val: "100%",      label: "Documentation provided" },
  ];
  const CHECKLIST = [
    "Complete lab setup funded by CSR allocation",
    "Impact documentation for annual CSR reports",
    "Cost per beneficiary from ₹800–₹2,000",
    "Eligible under Schedule VII — Education clause",
    "3-year outcome tracking available",
  ];

  return (
    <section className="section csr-section" id="csr">
      <div className="csr-inner">
        <div>
          <div className="section-label">CSR Partners</div>
          <h2 className="section-heading">
            Turn your CSR budget into<br />
            <span style={{ color: "var(--accent)" }}>measurable impact.</span>
          </h2>
          <p className="section-desc" style={{ marginBottom: "2rem" }}>
            ARC LABS delivers CSR-funded lab implementations with full
            documentation aligned with Schedule VII of the Companies Act.
          </p>
          <ul className="csr-checklist">
            {CHECKLIST.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link to="/csr-partners" className="btn btn-primary">
            Discuss CSR Partnership &rarr;
          </Link>
        </div>

        <div className="csr-metrics-grid">
          {METRICS.map((m) => (
            <div className="csr-metric" key={m.label}>
              <div className="csr-metric-val">{m.val}</div>
              <div className="csr-metric-label">{m.label}</div>
            </div>
          ))}
          <div className="csr-metric csr-wide">
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "var(--accent)", marginBottom: "6px", letterSpacing: "0.06em" }}>
              LISTED ON
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-3)", lineHeight: 1.7 }}>
              CSR Box &middot; GiveIndia Corporate &middot; Sattva Platform
              <br />
              <span style={{ color: "var(--text)", fontWeight: 600 }}>
                ARC LABS is listed on all major CSR platforms.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─────────────────────────────────────── */
function Testimonials() {
  const TESTIMONIALS = [
    {
      stars: 5,
      text: "The IoT & Robotics lab setup at our school was seamless. Students are building real projects from week two. The teacher training made our faculty genuinely confident.",
      author: "Principal, CBSE School",
      role: "Hyderabad, Telangana",
    },
    {
      stars: 5,
      text: "ARC LABS delivered a complete IoT training module for our engineering students. Industry-relevant, practical, and very well structured.",
      author: "HOD, Electronics Dept.",
      role: "Engineering College, Vijayawada",
    },
    {
      stars: 5,
      text: "Our CSR funding for STEM labs was perfectly executed by ARC LABS. The impact documentation made our board reporting straightforward.",
      author: "CSR Head",
      role: "Manufacturing Company, Hyderabad",
    },
  ];

  return (
    <section className="section">
      <div className="section-label">Impact</div>
      <h2 className="section-heading">
        What institutions say about{" "}
        <span style={{ color: "var(--accent)" }}>ARC LABS.</span>
      </h2>
      <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <div className="tcard" key={t.author}>
            <div className="tcard-stars">{"★".repeat(t.stars)}</div>
            <p className="tcard-text">{t.text}</p>
            <div className="tcard-author">{t.author}</div>
            <div className="tcard-role">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── CTA ──────────────────────────────────────────────── */
function CTASection() {
  return (
    <div className="cta-section" id="contact">
      <h2>
        Ready to build your lab?<br />
        <span style={{ color: "var(--accent)" }}>Let's talk.</span>
      </h2>
      <p>
        Schools, colleges, CSR officers — reach out. We respond within 24 hours.
      </p>
      <div className="cta-buttons">
        <a href="tel:+917815809412" className="btn btn-primary">
          +91 78158 09412
        </a>
        <a href="mailto:hello@arclabs.in" className="btn btn-secondary">
          hello@arclabs.in
        </a>
        <a
          href="https://wa.me/917815809412"
          className="btn btn-secondary"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
      <p className="cta-address">
        4-7-138/1, Narendra Nagar, Habsiguda, Hyderabad &ndash; 500007 &middot;
        GST &amp; MSME Registered
      </p>
    </div>
  );
}

/* ─── Main ─────────────────────────────────────────────── */
export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>ARC LABS — IoT, Robotics AI, Drones Labs &amp; Industrial IIoT Solutions</title>
        <meta name="description" content="ARC LABS delivers premium educational AI, IoT, robotics &amp; drone kits, hands-on college training workshops, and advanced Industrial IoT (IIoT) engineering solutions. Based in Hyderabad, India." />
        <link rel="canonical" href="https://arclabs.in/" />
        <meta property="og:url" content="https://arclabs.in/" />
        <meta property="og:title" content="ARC LABS — IoT, Robotics AI, Drones &amp; Industrial IIoT Solutions" />
        <meta property="og:description" content="Premium STEM AI, IoT &amp; Robotics training kits, drone systems, and college workshops, plus enterprise-grade Industrial IoT (IIoT) automation solutions." />
        <meta name="twitter:title" content="ARC LABS — IoT, Robotics AI, Drones &amp; Industrial IIoT Solutions" />
        <meta name="twitter:description" content="Premium STEM AI, IoT &amp; Robotics training kits, drone systems, and college workshops, plus enterprise-grade Industrial IoT (IIoT) automation solutions." />
      </Helmet>
      <Hero />
      <TrustBar />
      <Services />
      <StatsBand />
      <ProductsPreview />
      <Packages />
      <CSR />
      <Testimonials />
      <CTASection />
    </>
  );
}
