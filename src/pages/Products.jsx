import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
<<<<<<< HEAD
import { DottedSurface } from "../components/ui/dotted-surface";
=======
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2

/* ─── SCOPED STYLES ────────────────────────────────────────────────── */
const pageStyles = `
/* Hero */
<<<<<<< HEAD
.ph-hero{min-height:440px;padding:108px 5vw 72px;text-align:center;position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center}
.ph-hero::before{content:'';position:absolute;top:-80px;left:50%;transform:translateX(-50%);width:900px;height:430px;pointer-events:none;background:radial-gradient(ellipse,rgba(0,212,170,0.10) 0%,rgba(59,130,246,0.06) 45%,transparent 70%);z-index:1}
.product-dotted-surface{position:absolute;inset:-90px 0 -120px;pointer-events:none;z-index:0;opacity:.52}
.product-dotted-surface canvas{width:100%!important;height:100%!important;display:block}
.ph-hero > .badge,.ph-hero > h1,.ph-hero > p,.ph-hero-content{position:relative;z-index:2}
.ph-hero-content{max-width:820px;margin:0 auto}
.ph-hero h1{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(2rem,5vw,3.4rem);letter-spacing:-.035em;line-height:1.08;margin-bottom:1rem;position:relative;text-shadow:0 18px 55px rgba(0,0,0,.55)}
.ph-hero h1 em{font-style:normal;color:var(--accent)}
.ph-hero p{color:var(--text-3);font-size:1rem;font-weight:400;max-width:560px;margin:0 auto 0;line-height:1.75;position:relative}
=======
.ph-hero{padding:80px 5vw 56px;text-align:center;position:relative;overflow:hidden}
.ph-hero::before{content:'';position:absolute;top:-80px;left:50%;transform:translateX(-50%);width:800px;height:400px;pointer-events:none;background:radial-gradient(ellipse,rgba(0,212,170,0.05) 0%,rgba(59,130,246,0.03) 45%,transparent 70%)}
.ph-hero h1{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(2rem,5vw,3.4rem);letter-spacing:-.035em;line-height:1.08;margin-bottom:1rem;position:relative}
.ph-hero h1 em{font-style:normal;color:var(--accent)}
.ph-hero p{color:var(--text-3);font-size:1rem;font-weight:400;max-width:500px;margin:0 auto 2.2rem;line-height:1.75;position:relative}
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2

/* Filter bar */
.filter-bar{display:flex;justify-content:center;gap:.5rem;flex-wrap:wrap;padding:0 5vw 52px;position:relative;z-index:1}
.filter-btn{background:var(--surface);border:1px solid var(--border-2);color:var(--text-3);font-size:.8rem;font-weight:500;padding:8px 18px;border-radius:var(--radius);cursor:pointer;transition:all .2s;font-family:'Inter',sans-serif;display:flex;align-items:center;gap:6px}
.filter-btn.active,.filter-btn:hover{background:var(--accent-dim);border-color:var(--accent);color:var(--accent)}

/* Product grid */
.products-wrap{padding:0 5vw 80px;position:relative;z-index:1}
.pg-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:1.4rem}
.pg-grid.focus-mode{grid-template-columns:minmax(280px,420px);justify-content:center}
.pg-grid.focus-mode .pcard:not(.selected){display:none}

/* Product card */
.pcard{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-xl);overflow:hidden;transition:all .3s;cursor:pointer;position:relative}
.pcard:hover{border-color:var(--pc-color,var(--accent));transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.pcard.selected{border-color:var(--pc-color,var(--accent));box-shadow:0 0 0 1px var(--pc-color,var(--accent)),var(--shadow-lg);animation:selectedKitCenter .34s ease both}
@keyframes selectedKitCenter{from{opacity:.72;transform:translateY(8px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}

.pc-visual{height:220px;position:relative;overflow:hidden;background:linear-gradient(135deg,var(--bg),var(--surface-2));display:flex;align-items:center;justify-content:center}
.pc-badge-wrap{position:absolute;top:14px;left:14px;display:flex;gap:6px;z-index:2}
.pc-badge{font-family:'JetBrains Mono',monospace;font-size:.62rem;font-weight:600;padding:4px 10px;border-radius:5px;letter-spacing:.06em}
.pc-best{position:absolute;top:14px;right:14px;z-index:2;background:var(--amber);color:var(--bg);font-family:'JetBrains Mono',monospace;font-size:.6rem;font-weight:700;padding:4px 10px;border-radius:5px;letter-spacing:.06em}
.pc-fade{position:absolute;bottom:0;left:0;right:0;height:60px;background:linear-gradient(transparent,var(--surface));z-index:1}

.pc-body{padding:22px 22px 0}
.pc-tier{font-family:'JetBrains Mono',monospace;font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.4rem}
.pc-name{font-family:'Syne',sans-serif;font-weight:800;font-size:1.12rem;letter-spacing:-.02em;margin-bottom:.4rem}
.pc-tagline{font-size:.82rem;color:var(--text-3);line-height:1.55;margin-bottom:1rem}
.pc-chips{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:1rem}

.pc-price-row{display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-top:1px solid var(--border)}
.pc-price{font-family:'Syne',sans-serif;font-weight:800;font-size:1.6rem;letter-spacing:-.02em}
.pc-price span{font-size:.85rem;color:var(--text-3);font-weight:400}
.pc-old-price{font-size:.78rem;color:var(--text-4);text-decoration:line-through;margin-top:2px}

.pc-footer{display:grid;grid-template-columns:1fr 1fr;gap:.5rem;padding:14px 22px 18px}
.pc-btn-detail{background:transparent;border:1px solid var(--border-2);color:var(--text-3);font-size:.78rem;font-weight:500;padding:9px;border-radius:var(--radius);cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
.pc-btn-detail:hover{color:var(--text);border-color:var(--border-3)}
.pc-btn-buy{border:none;color:var(--bg);font-size:.78rem;font-weight:700;padding:9px;border-radius:var(--radius);cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
.pc-btn-buy:hover{filter:brightness(1.1);transform:translateY(-1px)}

/* Detail drawer */
.detail-drawer{margin:2rem auto 0;background:var(--surface-2);border:1px solid var(--border-2);border-radius:var(--radius-xl);overflow:hidden;animation:ddIn .35s ease;grid-column:1/-1;width:min(100%,1080px);box-shadow:var(--shadow-lg)}
@keyframes ddIn{from{opacity:0;transform:translateY(-12px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}

/* Kit assembly animation */
.kit-stage{min-height:430px;padding:58px 36px 36px;border-bottom:1px solid var(--border);background:radial-gradient(circle at 50% 42%,rgba(var(--kit-glow),.18),transparent 43%),linear-gradient(180deg,rgba(255,255,255,.03),transparent);position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}
.kit-stage::before{content:'';position:absolute;left:12%;right:12%;bottom:40px;height:26px;background:radial-gradient(ellipse,rgba(0,0,0,.48),transparent 68%);filter:blur(4px);opacity:.65}
.kit-caption{position:absolute;left:36px;top:28px;font-family:'Syne',sans-serif;font-weight:800;font-size:1rem;letter-spacing:-.01em;color:var(--text);z-index:3}
.kit-caption span{display:block;margin-top:4px;font-family:'Inter',sans-serif;font-size:.72rem;font-weight:500;color:var(--text-3);letter-spacing:0}
.kit-board{width:min(660px,88vw);min-height:330px;position:relative;display:flex;align-items:center;justify-content:center}
.kit-photo-wrap{width:min(560px,82vw);aspect-ratio:16/9;border:1px solid rgba(255,255,255,.16);border-radius:18px;background:linear-gradient(135deg,rgba(var(--kit-glow),.18),rgba(255,255,255,.04)),var(--surface);box-shadow:0 28px 60px rgba(0,0,0,.36),inset 0 0 0 1px rgba(255,255,255,.06);position:relative;overflow:hidden;animation:kitDrop .72s cubic-bezier(.18,.89,.32,1.22) both;transform-origin:center}
.kit-photo-wrap::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.14),transparent);transform:translateX(-120%);animation:kitShine 1.4s ease .65s both}
.kit-photo{width:100%;height:100%;object-fit:cover;display:block}
<<<<<<< HEAD

=======
.kit-parts-layer{position:absolute;inset:0;pointer-events:none}
.kit-chip{position:absolute;left:var(--land-x);top:var(--land-y);width:var(--part-w,54px);height:var(--part-h,42px);border-radius:9px;background:linear-gradient(135deg,rgba(13,21,32,.96),rgba(30,41,59,.92));border:1px solid rgba(255,255,255,.18);box-shadow:0 10px 20px rgba(0,0,0,.28),inset 0 0 0 1px rgba(255,255,255,.05);backdrop-filter:blur(8px);animation:componentFall 2.2s cubic-bezier(.16,.72,.2,1) both;animation-delay:var(--fall-delay);display:flex;align-items:center;justify-content:center}
.kit-chip.sensor{border-color:rgba(var(--kit-glow),.38);background:linear-gradient(135deg,rgba(var(--kit-glow),.2),rgba(14,20,30,.92))}
.kit-chip.output{background:linear-gradient(135deg,rgba(var(--kit-glow),.32),rgba(255,255,255,.08))}
.part-board{position:absolute;inset:6px;border-radius:6px;background:rgba(255,255,255,.055);border:1px dashed rgba(255,255,255,.12)}
.part-pin{position:absolute;width:3px;height:6px;border-radius:2px;background:rgba(255,255,255,.5)}
.part-pin.p1{left:8px;top:-3px}.part-pin.p2{left:16px;top:-3px}.part-pin.p3{right:16px;bottom:-3px}.part-pin.p4{right:8px;bottom:-3px}
.part-symbol{position:relative;z-index:2;width:24px;height:24px;color:var(--kit-color);display:flex;align-items:center;justify-content:center}
.part-label{position:absolute;left:50%;bottom:-17px;transform:translateX(-50%);font-family:'JetBrains Mono',monospace;font-size:.5rem;font-weight:700;line-height:1;white-space:nowrap;color:var(--text-2);background:rgba(7,10,16,.76);border:1px solid rgba(255,255,255,.1);border-radius:999px;padding:3px 6px}
.part-symbol.temp::before{content:'';width:6px;height:16px;border:2px solid currentColor;border-radius:6px 6px 3px 3px}
.part-symbol.temp::after{content:'';position:absolute;bottom:1px;width:12px;height:12px;border-radius:50%;background:currentColor}
.part-symbol.distance::before{content:'';width:22px;height:12px;border:2px solid currentColor;border-radius:999px}
.part-symbol.distance::after{content:'';position:absolute;width:4px;height:4px;border-radius:50%;background:currentColor;box-shadow:10px 0 0 currentColor}
.part-symbol.light::before{content:'';width:14px;height:14px;border:2px solid currentColor;border-radius:50%;box-shadow:0 0 12px currentColor}
.part-symbol.light::after{content:'';position:absolute;width:2px;height:24px;background:currentColor;transform:rotate(45deg);box-shadow:8px -8px 0 -1px currentColor,-8px 8px 0 -1px currentColor}
.part-symbol.gas::before{content:'';width:19px;height:19px;border:2px solid currentColor;border-radius:50%}
.part-symbol.gas::after{content:'';position:absolute;width:4px;height:4px;border-radius:50%;background:currentColor;box-shadow:-6px -4px 0 currentColor,7px 4px 0 currentColor}
.part-symbol.touch::before{content:'';width:18px;height:18px;border:2px solid currentColor;border-radius:50%}
.part-symbol.touch::after{content:'';position:absolute;width:8px;height:8px;border-radius:50%;background:currentColor}
.part-symbol.motion::before{content:'';width:18px;height:10px;border:2px solid currentColor;border-radius:10px 10px 2px 2px}
.part-symbol.motion::after{content:'';position:absolute;bottom:2px;width:2px;height:10px;background:currentColor;box-shadow:-6px 0 0 currentColor,6px 0 0 currentColor}
.part-symbol.display::before{content:'';width:22px;height:15px;border:2px solid currentColor;border-radius:3px}
.part-symbol.display::after{content:'';position:absolute;bottom:1px;width:12px;height:2px;background:currentColor}
.part-symbol.relay::before{content:'';width:20px;height:14px;border:2px solid currentColor;border-radius:3px}
.part-symbol.relay::after{content:'';position:absolute;width:14px;height:2px;background:currentColor;transform:rotate(-22deg)}
.part-symbol.controller::before{content:'';width:22px;height:18px;border:2px solid currentColor;border-radius:3px;background:rgba(var(--kit-glow),.14)}
.part-symbol.controller::after{content:'';position:absolute;width:2px;height:24px;background:currentColor;box-shadow:-8px 0 0 currentColor,8px 0 0 currentColor}
.part-symbol.default::before{content:'';width:18px;height:18px;border:2px solid currentColor;border-radius:4px;transform:rotate(45deg)}
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
@keyframes kitDrop{0%{opacity:0;transform:translateY(-260px) rotate(-4deg) scale(.9)}72%{opacity:1;transform:translateY(12px) rotate(1deg) scale(1.02)}100%{opacity:1;transform:translateY(0) rotate(0) scale(1)}}
@keyframes kitShine{to{transform:translateX(120%)}}
@keyframes componentFall{0%{opacity:0;transform:translate3d(var(--fall-x),-360px,0) rotate(var(--fall-rot)) scale(.78)}58%{opacity:1;transform:translate3d(calc(var(--fall-x) * .24),-38px,0) rotate(calc(var(--fall-rot) * .35)) scale(.96)}82%{opacity:1;transform:translate3d(0,10px,0) rotate(2deg) scale(1.03)}100%{opacity:1;transform:translate3d(0,0,0) rotate(0) scale(1)}}

.dd-header{display:flex;align-items:flex-start;justify-content:space-between;padding:32px 36px 24px;border-bottom:1px solid var(--border);gap:2rem;flex-wrap:wrap}
.dd-hl{flex:1;min-width:240px}
.dd-eyebrow{font-family:'JetBrains Mono',monospace;font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem}
.dd-hl h2{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(1.4rem,3vw,2rem);letter-spacing:-.025em;margin-bottom:.4rem}
.dd-hl p{font-size:.87rem;color:var(--text-3);line-height:1.7;max-width:520px}
.dd-hr{display:flex;flex-direction:column;align-items:flex-end;gap:.8rem;flex-shrink:0}
.dd-price-big{font-family:'Syne',sans-serif;font-weight:800;font-size:2.4rem;letter-spacing:-.03em;text-align:right}
.dd-price-big span{font-size:1rem;font-weight:400;color:var(--text-3)}

.dd-tabs{display:flex;border-bottom:1px solid var(--border);overflow-x:auto;scrollbar-width:none}
.dd-tabs::-webkit-scrollbar{display:none}
.dd-tab{flex-shrink:0;padding:14px 24px;font-size:.82rem;font-weight:500;cursor:pointer;border:none;background:none;color:var(--text-3);font-family:'Inter',sans-serif;border-bottom:2px solid transparent;transition:all .2s;white-space:nowrap}
.dd-tab.active{color:var(--tab-c,var(--accent));border-bottom-color:var(--tab-c,var(--accent))}
.dd-tab:hover:not(.active){color:var(--text-2)}

.dd-content{padding:28px 36px 36px}

/* Specs */
.spec-sections{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.2rem}
.spec-section{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:18px 20px}
.spec-section h4{font-family:'Syne',sans-serif;font-size:.82rem;font-weight:700;margin-bottom:12px;display:flex;align-items:center;gap:8px}
.spec-section h4::before{content:'';width:3px;height:14px;background:var(--ss-c,var(--accent));border-radius:2px}
.spec-list{list-style:none}
.spec-list li{font-size:.78rem;color:var(--text-2);padding:6px 0;border-bottom:1px dashed var(--border);display:flex;align-items:flex-start;gap:8px}
.spec-list li:last-child{border-bottom:none}
.spec-list li::before{content:'\\2192';color:var(--ss-c,var(--accent));font-size:.72rem;flex-shrink:0;margin-top:1px}

/* In-box */
.inbox-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:1rem}
.inbox-item{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;display:flex;align-items:flex-start;gap:10px}
.inbox-icon{font-size:1.1rem;flex-shrink:0;width:32px;height:32px;background:var(--accent-dim);border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:.7rem;color:var(--accent)}
.inbox-name{font-size:.82rem;font-weight:600;margin-bottom:2px}
.inbox-desc{font-size:.74rem;color:var(--text-3);line-height:1.5}

/* Use cases */
.usecase-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:1rem}
.usecase-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:18px;position:relative;overflow:hidden}
.usecase-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--uc-c,var(--accent)),transparent)}
.usecase-num{font-family:'JetBrains Mono',monospace;font-size:.58rem;color:var(--uc-c,var(--accent));margin-bottom:.4rem;letter-spacing:.08em}
.usecase-title{font-family:'Syne',sans-serif;font-size:.9rem;font-weight:700;margin-bottom:.4rem}
.usecase-desc{font-size:.78rem;color:var(--text-3);line-height:1.6}

/* Compare table */
.compare-table{width:100%;border-collapse:collapse;font-size:.8rem}
.compare-table th{text-align:left;padding:12px 16px;font-family:'Syne',sans-serif;font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;border-bottom:1px solid var(--border)}
.compare-table th:first-child{color:var(--text-3);font-size:.7rem;font-weight:500;text-transform:none;letter-spacing:0}
.compare-table td{padding:11px 16px;border-bottom:1px solid var(--border);vertical-align:middle;color:var(--text-2)}
.compare-table td:first-child{color:var(--text-3);font-size:.76rem}
.compare-table tr:last-child td{border-bottom:none}
.compare-table tr:hover td{background:rgba(255,255,255,0.02)}
.ct-yes{color:var(--accent)!important;font-weight:600}
.ct-no{color:var(--text-4)!important}

/* Drawer CTA */
.dd-cta{border-top:1px solid var(--border);padding:22px 36px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
.dd-cta-note{font-size:.8rem;color:var(--text-3)}
.dd-cta-note strong{color:var(--text)}
.dd-cta-btns{display:flex;gap:.7rem;flex-wrap:wrap}

/* Comparison section */
.compare-section{padding:80px 5vw;background:var(--bg-alt);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.fct{width:100%;border-collapse:separate;border-spacing:0}
.fct thead tr th{padding:14px 18px;font-family:'Syne',sans-serif;font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;border-bottom:2px solid var(--border-2);text-align:center}
.fct thead tr th:first-child{text-align:left;color:var(--text-3);font-weight:500;font-size:.72rem;text-transform:none;letter-spacing:0}
<<<<<<< HEAD
.fct thead .th-essential{
  color:#00ff9d;
}
=======
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
.fct thead .th-lite{color:var(--amber)}
.fct thead .th-kit{color:var(--accent)}
.fct thead .th-pro{color:var(--blue)}
.fct tbody tr:hover td{background:rgba(255,255,255,0.02)}
.fct tbody td{padding:12px 18px;border-bottom:1px solid var(--border);font-size:.8rem;color:var(--text-2);text-align:center;vertical-align:middle}
.fct tbody td:first-child{text-align:left;color:var(--text-3);font-size:.76rem}
.fct-cat td{background:var(--surface)!important;font-family:'Syne',sans-serif;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--text-3)!important;text-align:left!important;padding:10px 18px!important}
.fct-yes{color:var(--accent)!important;font-size:1rem}
.fct-no{color:rgba(255,255,255,.12)!important;font-size:1rem}
.fct-val{color:var(--text)!important;font-weight:600}
.fct-best{color:var(--bg)!important;font-weight:700;font-size:.7rem;background:var(--amber);padding:3px 8px;border-radius:4px;display:inline-block}
.price-row-fct td{font-family:'Syne',sans-serif!important;font-size:1.2rem!important;font-weight:800!important;padding:18px 18px!important}
.price-row-fct td:nth-child(2){color:var(--amber)!important}
.price-row-fct td:nth-child(3){color:var(--accent)!important}
.price-row-fct td:nth-child(4){color:var(--blue)!important}

/* Bottom CTA */
.pcta-section{padding:90px 5vw;text-align:center;position:relative;overflow:hidden}
.pcta-section::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:400px;background:radial-gradient(ellipse,rgba(0,212,170,0.05),transparent 65%);pointer-events:none}
.pcta-section h2{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(1.8rem,4vw,3rem);letter-spacing:-.03em;margin-bottom:.8rem;position:relative}
.pcta-section p{color:var(--text-3);font-size:.95rem;margin-bottom:2rem;position:relative}
.pcta-btns{display:flex;gap:.7rem;justify-content:center;flex-wrap:wrap;position:relative}

@media(max-width:768px){
<<<<<<< HEAD
  .ph-hero{min-height:390px;padding:92px 5vw 58px}
  .product-dotted-surface{inset:-60px -30% -110px;opacity:.42}
=======
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
  .kit-stage{min-height:440px;padding:84px 18px 24px}
  .kit-caption{left:20px;top:22px;right:20px}
  .kit-board{width:100%;min-height:300px}
  .kit-photo-wrap{width:100%}
<<<<<<< HEAD

=======
  .kit-chip{font-size:.56rem;padding:6px 7px}
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
  .dd-header{padding:22px 20px 18px}
  .dd-content{padding:20px}
  .dd-cta{padding:16px 20px}
  .compare-section{padding:52px 4vw}
  .pg-grid{grid-template-columns:1fr}
}
`;

/* ─── PRODUCT DATA ──────────────────────────────────────────────── */
const PRODUCTS = [
  {
<<<<<<< HEAD
    id: "essential",
    tier: "TIER 01 · essential",
    name: "ARC LABS IoT Essential Kit",
    short: "IoT essential Kit",
    tagline: "Affordable starter kit for basic IoT and embedded learning.",
    price: 10000,
    oldPrice: 13000,
    color: "#22c55e",
    glow: "34,197,94",
    image: "/images/products/essential-kit.jpg",
    badge: "ESSENTIAL",
    badgeBg: "rgba(34,197,94,0.12)",
    badgeColor: "#22c55e",
    overview: "The ARC LABS IoT Essential Kit is designed for absolute beginners who want an affordable introduction to Arduino and ESP32 programming with essential sensors and outputs. Plug-and-play layout with all core peripherals pre-wired.",
    controllers: ["Arduino UNO (ATmega328P)", "ESP32 Wi-Fi + Bluetooth"],
    sensors: ["DHT11 — Temperature & Humidity", "HC-SR04 — Ultrasonic Sensor", "LDR — Light Sensor", "IR Obstacle Sensor"],
    display: ["0.96\" OLED Display", "RGB LED", "Active Buzzer"],
    actuators: ["Single Relay Module", "Tactile Push Buttons"],
    connectivity: ["GPIO Headers", "UART / I2C / SPI", "5V & 3.3V Power Rails"],
    includes: [
      { label: "HW", name: "essential Kit Board", desc: "Pre-assembled training board" },
      { label: "CD", name: "Sample Codes", desc: "Arduino & ESP32 examples" },
      { label: "MN", name: "User Manual", desc: "Quick start documentation" },
      { label: "SP", name: "Technical Support", desc: "ARC LABS support access" },
    ],
    useCases: [
      { title: "IoT Learning", desc: "Perfect for students starting with IoT and embedded systems." },
      { title: "Mini Projects", desc: "Build simple automation and monitoring systems." },
      { title: "School Labs", desc: "Ideal for basic electronics and coding practice." },
    ],
    forTags: ["School Students", "Beginners", "IoT Basics", "Training Labs"],
  },
  {
    id: "lite",
    tier: "TIER 02 · STARTER",
=======
    id: "lite",
    tier: "TIER 01 · STARTER",
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
    name: "ARC LABS IoT Lite Kit",
    short: "IoT Lite Kit",
    tagline: "Compact, beginner-friendly IoT training board for Arduino & ESP32.",
    price: 15000,
    oldPrice: 18000,
    color: "#f59e0b",
    glow: "245,158,11",
    image: "/images/products/lite-kit.jpg",
    badge: "BEGINNER",
    badgeBg: "rgba(245,158,11,0.15)",
    badgeColor: "#f59e0b",
    overview: "The ARC LABS IoT Lite Kit is a compact, budget-friendly training platform designed for beginners, students, and aspiring innovators entering the world of IoT and embedded systems. Dual microcontroller support (Arduino UNO + ESP32) with a curated sensor set and plug-and-play design.",
    controllers: ["Arduino UNO (ATmega328P)", "ESP32 (Dual-core Wi-Fi + Bluetooth)", "Dual MCU slots for flexible usage"],
    sensors: ["DHT11 — Temperature & Humidity", "HC-SR04 — Ultrasonic Distance", "IR Obstacle Sensor — Digital proximity", "Touch Sensor — Capacitive input", "LDR — Light detection", "MQ Gas Sensor — Gas leakage", "Potentiometer — Analog ADC testing"],
    display: ["0.96\" OLED Display (I2C)", "RGB LED Indicators", "Active Buzzer Output"],
    actuators: ["Dual Relay Modules (AC/DC control)", "Tactile Push Buttons"],
    connectivity: ["Onboard 5V/3.3V regulated rails", "Screw terminals for relay", "UART, SPI, I2C, GPIO breakout headers"],
    includes: [
      { label: "HW", name: "Assembled Lite Kit Board", desc: "Fully built, ready-to-use" },
      { label: "CD", name: "Sample Codes", desc: "Arduino & ESP32 examples" },
      { label: "DC", name: "Sensor Datasheets", desc: "All onboard sensors" },
      { label: "MN", name: "Basic User Manual", desc: "Setup and getting started" },
      { label: "SP", name: "Technical Support", desc: "ARC LABS expert team" },
    ],
    useCases: [
      { title: "Academic IoT Lab", desc: "Perfect for school and college IoT labs — students can start without any prior electronics experience." },
      { title: "Embedded Systems Basics", desc: "Learn GPIO, sensors, actuators, and communication protocols from scratch." },
      { title: "DIY & Hobby Projects", desc: "Build smart home prototypes, weather stations, and automation controllers." },
      { title: "Early Prototyping", desc: "Rapid proof-of-concept for IoT product ideas — from idea to working demo in hours." },
    ],
    forTags: ["School Students (Class 9-12)", "Engineering Year 1", "Beginners & Hobbyists", "Academic Labs"],
  },
  {
    id: "experience",
<<<<<<< HEAD
    tier: "TIER 03 · FLAGSHIP",
=======
    tier: "TIER 02 · FLAGSHIP",
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
    name: "ARC LABS IoT Experience Kit",
    short: "IoT Experience Kit",
    tagline: "All-in-one multi-MCU trainer — the most versatile kit in the lineup.",
    price: 20000,
    oldPrice: 23000,
    color: "#00d4aa",
    glow: "0,212,170",
    image: "/images/products/experience-kit.jpg",
    badge: "BEST SELLER",
    badgeBg: "rgba(0,212,170,0.12)",
    badgeColor: "#00d4aa",
    isBest: true,
    overview: "The ARC LABS IoT Experience Kit is a comprehensive, all-in-one embedded systems trainer supporting 5 microcontrollers — Arduino, ESP32, STM32, Raspberry Pi Pico, and Raspberry Pi 4/5 — with LoRa, GSM/4G, RS485, and full sensor coverage.",
    controllers: ["Arduino UNO (ATmega328P) — Beginner dev", "ESP32 DevKit — Dual-core Wi-Fi + BT", "STM32 DevKit — ARM Cortex-M industrial", "Raspberry Pi Pico/W — RP2040 + Wi-Fi", "Raspberry Pi 4/5 Header — 40-pin GPIO"],
    sensors: ["BMP180 — Barometric pressure & temp", "DHT11 — Temperature & Humidity", "Ultrasonic HC-SR04 — Distance", "IR Obstacle Detection", "INA219 — Current & Voltage monitoring", "Potentiometer — Analog ADC input"],
    display: ["1.8\" TFT Color Display (SPI)", "RGB LED — Full color", "Active Buzzer", "4x DP Switches with onboard LEDs"],
    actuators: ["Dual Relay Module (RELAY1 & RELAY2)", "Servo Motor Port", "Digital Output Headers"],
    connectivity: ["LoRa Module Interface — Long range", "GSM/4G Module (SIMCOM) — SIM slot", "RS485 — Industrial serial", "I2C & UART Headers", "USB-Powered", "GPIO Breakout Headers"],
    includes: [
      { label: "HW", name: "Pre-assembled Training Board", desc: "Ready to use — plug in and start" },
      { label: "PW", name: "Optional Power Supply", desc: "External 5V supply supported" },
      { label: "CD", name: "Sample Codes & Manuals", desc: "All 5 controller platforms covered" },
      { label: "CL", name: "Cloud Platform Access", desc: "Arc Lab Cloud, Blynk, MQTT ready" },
      { label: "SP", name: "Expert Technical Support", desc: "ARC LABS certified team" },
    ],
    useCases: [
      { title: "Wireless Sensor Networks", desc: "Use LoRa and GSM to build long-range IoT sensor networks for agriculture, smart cities, or industry." },
      { title: "Embedded Systems R&D", desc: "Experiment with 5 different MCU platforms — compare performance, power, and code on real hardware." },
      { title: "Cloud IoT Integration", desc: "Connect to Arc Lab Cloud, Blynk, or custom MQTT servers and build live dashboards." },
      { title: "Industrial Monitoring", desc: "Use RS485, current sensing, and relay control to simulate industrial automation scenarios." },
      { title: "Smart Home Systems", desc: "Build complete smart home automation with sensors, relays, cloud alerts, and remote control." },
      { title: "AIoT Projects", desc: "Combine sensor data with edge AI on Raspberry Pi — build intelligent IoT systems." },
    ],
    forTags: ["Engineering Year 1-3", "IoT Professionals", "R&D Labs", "Academic Institutions", "Training Programs"],
  },
  {
    id: "pro",
<<<<<<< HEAD
    tier: "TIER 04 · ADVANCED",
=======
    tier: "TIER 03 · ADVANCED",
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
    name: "ARC LABS IoT Pro Kit",
    short: "IoT Pro Kit",
    tagline: "High-performance board for advanced IoT, edge AI, and Raspberry Pi.",
    price: 25000,
    oldPrice: 28000,
    color: "#3b82f6",
    glow: "59,130,246",
    image: "/images/products/pro-kit.jpg",
    badge: "ADVANCED",
    badgeBg: "rgba(59,130,246,0.12)",
    badgeColor: "#3b82f6",
    overview: "The ARC LABS IoT Pro Kit is a high-performance development board for advanced learners, researchers, and developers. Dual-controller support for Raspberry Pi 4 and ESP32 with shared I/O zones — ideal for edge computing, AIoT, sensor fusion, and complex data acquisition.",
    controllers: ["Raspberry Pi 4 — 40-pin GPIO interface", "ESP32 DevKit — Wi-Fi + Bluetooth", "Shared I/O zones for hybrid Pi + ESP32 experiments"],
    sensors: ["BMP180 — Barometric Pressure & Temp", "DHT11 — Temperature & Humidity", "HC-SR04 — Ultrasonic Distance", "MQ-135 — Gas & Air Quality", "ADXL345 — 3-Axis Accelerometer", "Touch Sensor — Capacitive", "IR Obstacle Detection", "LDR — Light Dependent Resistor", "Potentiometer — ADC testing"],
    display: ["1.8\" SPI TFT Color Display", "RGB LED Output", "1-Digit 7-Segment Display", "3x Push Buttons", "Onboard 3.3V & 5V Power Indicators"],
    actuators: ["Dual Relay Module", "Active Buzzer", "GPIO Breakout Headers"],
    connectivity: ["Isolated 3.3V and 5V power rails", "MCP3008 ADC — analog sensor inputs", "GPIO expansion for Pi + ESP32", "USB / Power connectivity"],
    includes: [
      { label: "HW", name: "Assembled IoT Pro Kit Board", desc: "Fully built and tested" },
      { label: "CB", name: "Ribbon Cable for Raspberry Pi", desc: "40-pin GPIO ribbon included" },
      { label: "CD", name: "Sample Codes & Tutorials", desc: "Python (Pi) + Arduino (ESP32)" },
      { label: "DC", name: "Full Documentation", desc: "Online tutorials + schematic" },
      { label: "SP", name: "Arc Lab Technical Support", desc: "Priority support access" },
    ],
    useCases: [
      { title: "Edge Computing & AIoT", desc: "Run TensorFlow Lite models on Raspberry Pi while ESP32 handles real-time sensor acquisition." },
      { title: "Environmental Monitoring", desc: "Multi-sensor data logging with gas, temperature, pressure, light, and motion — cloud-connected." },
      { title: "Wireless Data Logging", desc: "ESP32 Wi-Fi + Raspberry Pi Linux stack for enterprise-grade wireless sensor deployments." },
      { title: "Industrial Training", desc: "Simulate real industrial sensor systems — accelerometer, gas, relay control, and current sensing." },
      { title: "Research Projects", desc: "Ideal for dissertation, publication, and advanced research in embedded systems and IoT." },
      { title: "Product Development", desc: "Use as a rapid-development platform to validate IoT product concepts before PCB design." },
    ],
    forTags: ["Engineering Year 3-4", "Postgraduate Students", "Researchers & R&D Teams", "IoT Professionals", "Product Developers"],
  },
];

/* ─── COMPARISON DATA ──────────────────────────────────────────── */
const COMPARE_ROWS = [
<<<<<<< HEAD

  {
    section: "CONTROLLERS",
  },

  {
    label: "Arduino UNO",
    essential: "✓",
    lite: "✓",
    exp: "✓",
    pro: "—",
  },

  {
    label: "ESP32",
    essential: "✓",
    lite: "✓",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "STM32",
    essential: "—",
    lite: "—",
    exp: "✓",
    pro: "—",
  },

  {
    label: "Raspberry Pi Pico/W",
    essential: "—",
    lite: "—",
    exp: "✓",
    pro: "—",
  },

  {
    label: "Raspberry Pi 4/5",
    essential: "—",
    lite: "—",
    exp: "✓",
    pro: "✓",
  },

  // =========================

  {
    section: "SENSORS",
  },

  {
    label: "DHT11 Temp & Humidity",
    essential: "✓",
    lite: "✓",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "Ultrasonic HC-SR04",
    essential: "✓",
    lite: "✓",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "BMP180 Barometric",
    essential: "—",
    lite: "—",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "INA219 Current/Voltage",
    essential: "—",
    lite: "—",
    exp: "✓",
    pro: "—",
  },

  {
    label: "Gas Sensor MQ135",
    essential: "—",
    lite: "—",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "IR Obstacle Sensor",
    essential: "✓",
    lite: "✓",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "LDR Sensor",
    essential: "✓",
    lite: "✓",
    exp: "✓",
    pro: "✓",
  },

  // =========================

  {
    section: "DISPLAY & UI",
  },

  {
    label: "OLED Display",
    essential: "✓",
    lite: "✓",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "RGB LEDs",
    essential: "✓",
    lite: "✓",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "Push Buttons",
    essential: "✓",
    lite: "✓",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "Buzzer",
    essential: "✓",
    lite: "✓",
    exp: "✓",
    pro: "✓",
  },

  // =========================

  {
    section: "CONNECTIVITY",
  },

  {
    label: "Wi-Fi",
    essential: "✓",
    lite: "✓",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "Bluetooth",
    essential: "✓",
    lite: "✓",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "LoRa",
    essential: "—",
    lite: "—",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "GSM / 4G",
    essential: "—",
    lite: "—",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "RS485 Industrial",
    essential: "—",
    lite: "—",
    exp: "✓",
    pro: "✓",
  },

  // =========================

  {
    section: "APPLICATIONS",
  },

  {
    label: "Beginner IoT Projects",
    essential: "✓",
    lite: "✓",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "Embedded Systems",
    essential: "✓",
    lite: "✓",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "Industrial IoT",
    essential: "—",
    lite: "—",
    exp: "✓",
    pro: "✓",
  },

  {
    label: "AI + Edge Computing",
    essential: "—",
    lite: "—",
    exp: "—",
    pro: "✓",
  },

  {
    label: "Cloud Integration",
    essential: "—",
    lite: "✓",
    exp: "✓",
    pro: "✓",
  },

];
=======
  { cat: true, label: "Controllers" },
  { label: "Arduino UNO", lite: "✓", exp: "✓", pro: "—" },
  { label: "ESP32", lite: "✓", exp: "✓", pro: "✓" },
  { label: "STM32", lite: "—", exp: "✓", pro: "—" },
  { label: "Raspberry Pi Pico/W", lite: "—", exp: "✓", pro: "—" },
  { label: "Raspberry Pi 4/5", lite: "—", exp: "✓", pro: "✓" },
  { cat: true, label: "Sensors" },
  { label: "DHT11 Temp & Humidity", lite: "✓", exp: "✓", pro: "✓" },
  { label: "Ultrasonic HC-SR04", lite: "✓", exp: "✓", pro: "✓" },
  { label: "BMP180 Barometric", lite: "—", exp: "✓", pro: "✓" },
  { label: "INA219 Current/Voltage", lite: "—", exp: "✓", pro: "—" },
  { label: "MQ-135 Gas & Air Quality", lite: "✓", exp: "—", pro: "✓" },
  { label: "ADXL345 Accelerometer", lite: "—", exp: "—", pro: "✓" },
  { label: "LDR Light Sensor", lite: "✓", exp: "—", pro: "✓" },
  { label: "Touch Sensor", lite: "✓", exp: "—", pro: "✓" },
  { label: "IR Obstacle Sensor", lite: "✓", exp: "✓", pro: "✓" },
  { cat: true, label: "Display & Output" },
  { label: "OLED 0.96\" (I2C)", lite: "✓", exp: "—", pro: "—" },
  { label: "TFT 1.8\" Color (SPI)", lite: "—", exp: "✓", pro: "✓" },
  { label: "7-Segment Display", lite: "—", exp: "—", pro: "✓" },
  { label: "RGB LEDs", lite: "✓", exp: "✓", pro: "✓" },
  { label: "Active Buzzer", lite: "✓", exp: "✓", pro: "✓" },
  { cat: true, label: "Connectivity" },
  { label: "Wi-Fi + Bluetooth (ESP32)", lite: "✓", exp: "✓", pro: "✓" },
  { label: "LoRa Interface", lite: "—", exp: "✓", pro: "—" },
  { label: "GSM/4G (SIMCOM)", lite: "—", exp: "✓", pro: "—" },
  { label: "RS485 Industrial", lite: "—", exp: "✓", pro: "—" },
  { label: "MCP3008 ADC Expansion", lite: "—", exp: "—", pro: "✓" },
  { cat: true, label: "Pricing" },
  { label: "Price (incl. GST)", lite: "₹15,000", exp: "₹20,000", pro: "₹25,000", priceRow: true },
  { label: "Best For", lite: "Beginners", exp: "All levels", pro: "Advanced" },
];

>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
/* ─── DETAIL DRAWER ──────────────────────────────────────────────── */
function DetailDrawer({ product, onClose }) {
  const [tab, setTab] = useState("specs");
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => ref.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
  }, []);

  const TABS = [
    { id: "specs", label: "Specifications" },
    { id: "inbox", label: "What's Included" },
    { id: "usecases", label: "Use Cases" },
    { id: "compare", label: "Compare All" },
  ];

<<<<<<< HEAD
=======
  const cleanLabel = (value) => value.split(/[—-]/)[0].split("(")[0].trim();
  const getPartIcon = (label, type) => {
    const value = label.toLowerCase();
    if (type === "controller" || value.includes("arduino") || value.includes("esp32") || value.includes("raspberry") || value.includes("stm32")) return "controller";
    if (value.includes("dht") || value.includes("temp") || value.includes("humidity") || value.includes("bmp")) return "temp";
    if (value.includes("ultrasonic") || value.includes("distance")) return "distance";
    if (value.includes("ldr") || value.includes("light")) return "light";
    if (value.includes("gas") || value.includes("mq")) return "gas";
    if (value.includes("touch")) return "touch";
    if (value.includes("ir") || value.includes("obstacle") || value.includes("accelerometer") || value.includes("adxl")) return "motion";
    if (value.includes("oled") || value.includes("tft") || value.includes("display") || value.includes("segment") || value.includes("rgb") || value.includes("buzzer")) return "display";
    if (value.includes("relay") || value.includes("servo")) return "relay";
    return "default";
  };
  const animatedParts = [
    ...product.controllers.slice(0, 3).map((item) => ({ type: "controller", label: cleanLabel(item) })),
    ...product.sensors.slice(0, 7).map((item) => ({ type: "sensor", label: cleanLabel(item) })),
    ...product.display.slice(0, 3).map((item) => ({ type: "output", label: cleanLabel(item) })),
    ...product.actuators.slice(0, 2).map((item) => ({ type: "output", label: cleanLabel(item) })),
  ].map((part) => ({ ...part, icon: getPartIcon(part.label, part.type) }));

>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
  return (
    <div
      className="detail-drawer"
      ref={ref}
      style={{
        "--kit-color": product.color,
        "--kit-glow": product.glow,
      }}
    >
      <div className="kit-stage">
        <div className="kit-caption">
          {product.short} assembly
<<<<<<< HEAD
=======
          <span>The kit image drops first. Components then fall into place on the kit.</span>
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
        </div>
        <div className="kit-board">
          <div className="kit-photo-wrap">
            <img className="kit-photo" src={product.image} alt={product.name} />
          </div>
<<<<<<< HEAD
    
=======
          <div className="kit-parts-layer">
            {animatedParts.map((part, i) => {
              const positions = [
                ["8%", "17%"], ["35%", "10%"], ["64%", "16%"],
                ["14%", "39%"], ["40%", "34%"], ["68%", "38%"],
                ["22%", "60%"], ["51%", "58%"], ["74%", "61%"],
                ["10%", "76%"], ["37%", "78%"], ["63%", "76%"],
                ["80%", "24%"], ["82%", "49%"], ["77%", "78%"],
              ];
              const [landX, landY] = positions[i % positions.length];
              return (
                <span
                  className={`kit-chip ${part.type === "controller" ? "" : part.type}`}
                  key={`${part.type}-${part.label}-${i}`}
                  style={{
                    "--land-x": landX,
                    "--land-y": landY,
                    "--fall-delay": `${0.9 + i * 0.18}s`,
                    "--fall-x": `${(i % 3 - 1) * (48 + i * 3)}px`,
                    "--fall-rot": `${(i % 2 === 0 ? -1 : 1) * (9 + i * 2)}deg`,
                  }}
                >
                  <span className="part-board" />
                  <span className="part-pin p1" />
                  <span className="part-pin p2" />
                  <span className="part-pin p3" />
                  <span className="part-pin p4" />
                  <span className={`part-symbol ${part.icon}`} aria-hidden="true" />
                  <span className="part-label">{part.label}</span>
                </span>
              );
            })}
          </div>
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
        </div>
      </div>
      <div className="dd-header">
        <div className="dd-hl">
          <div className="dd-eyebrow" style={{ color: product.color }}>{product.tier}</div>
          <h2>{product.name}</h2>
          <p>{product.overview}</p>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "1rem" }}>
            {product.forTags.map((f) => (
              <span key={f} className="chip" style={{ color: product.color, borderColor: `${product.color}30` }}>{f}</span>
            ))}
          </div>
        </div>
        <div className="dd-hr">
          <div className="dd-price-big" style={{ color: product.color }}>
            ₹{product.price.toLocaleString("en-IN")} <span>/ unit</span>
          </div>
          <div style={{ textDecoration: "line-through", fontSize: ".8rem", color: "var(--text-4)", textAlign: "right" }}>
            MRP ₹{product.oldPrice.toLocaleString("en-IN")}
          </div>
          <button className="btn btn-secondary" onClick={onClose} style={{ padding: "6px 14px", fontSize: ".75rem" }}>
            Close
          </button>
        </div>
      </div>

      <div className="dd-tabs">
        {TABS.map((t) => (
          <button key={t.id} className={`dd-tab${tab === t.id ? " active" : ""}`} style={{ "--tab-c": product.color }} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="dd-content">
        {tab === "specs" && (
          <div className="spec-sections">
            {[
              { title: "Controllers / MCUs", items: product.controllers },
              { title: "Sensors", items: product.sensors },
              { title: "Display & Output", items: product.display },
              { title: "Actuators", items: product.actuators },
              { title: "Connectivity & Power", items: product.connectivity },
            ].map((sec) => (
              <div className="spec-section" key={sec.title} style={{ "--ss-c": product.color }}>
                <h4>{sec.title}</h4>
                <ul className="spec-list">
                  {sec.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}

        {tab === "inbox" && (
          <div className="inbox-grid">
            {product.includes.map((item) => (
              <div className="inbox-item" key={item.name}>
                <span className="inbox-icon">{item.label}</span>
                <div>
                  <div className="inbox-name">{item.name}</div>
                  <div className="inbox-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "usecases" && (
          <div className="usecase-grid">
            {product.useCases.map((uc, i) => (
              <div className="usecase-card" key={uc.title} style={{ "--uc-c": product.color }}>
                <div className="usecase-num">USE CASE {String(i + 1).padStart(2, "0")}</div>
                <div className="usecase-title">{uc.title}</div>
                <div className="usecase-desc">{uc.desc}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "compare" && (
          <div style={{ overflowX: "auto" }}>
            <table className="fct">
<<<<<<< HEAD
<thead>
  <tr>
    <th style={{ minWidth: "210px" }}>Feature</th>

    <th className="th-essential">
      IoT Essential Kit
      <br />
      <span
        style={{
          fontSize: ".65rem",
          fontWeight: 400,
          color: "var(--text-3)",
        }}
      >
        ₹10,000
      </span>
    </th>

    <th className="th-lite">
      IoT Lite Kit
      <br />
      <span
        style={{
          fontSize: ".65rem",
          fontWeight: 400,
          color: "var(--text-3)",
        }}
      >
        ₹15,000
      </span>
    </th>

    <th className="th-kit">
      IoT Experience Kit
      <br />
      <span
        style={{
          fontSize: ".65rem",
          fontWeight: 400,
          color: "var(--text-3)",
        }}
      >
        ₹20,000
      </span>
    </th>

    <th className="th-pro">
      IoT Pro Kit
      <br />
      <span
        style={{
          fontSize: ".65rem",
          fontWeight: 400,
          color: "var(--text-3)",
        }}
      >
        ₹25,000
      </span>
    </th>
  </tr>
</thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => {
if (row.cat) return <tr className="fct-cat" key={i}><td colSpan={5}>{row.label}</td></tr>;
=======
              <thead>
                <tr>
                  <th style={{ minWidth: "200px" }}> </th>
                  <th className="th-lite">IoT Lite Kit<br /><span style={{ fontSize: ".65rem", fontWeight: 400, color: "var(--text-3)" }}>Beginner</span></th>
                  <th className="th-kit">IoT Experience Kit<br /><span style={{ fontSize: ".65rem", fontWeight: 400, color: "var(--text-3)" }}>Flagship</span></th>
                  <th className="th-pro">IoT Pro Kit<br /><span style={{ fontSize: ".65rem", fontWeight: 400, color: "var(--text-3)" }}>Advanced</span></th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => {
                  if (row.cat) return <tr className="fct-cat" key={i}><td colSpan={4}>{row.label}</td></tr>;
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
                  const cls = (v) => v === "✓" ? "fct-yes" : v === "—" ? "fct-no" : row.priceRow ? "fct-val" : "";
                  return (
                    <tr key={i} className={row.priceRow ? "price-row-fct" : ""}>
                      <td>{row.label}</td>
<<<<<<< HEAD
                      <td className={cls(row.essential)}>{row.essential}</td>
=======
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
                      <td className={cls(row.lite)}>{row.lite}</td>
                      <td className={cls(row.exp)}>{row.exp}{row.label === "Best For" && <span className="fct-best" style={{ marginLeft: 6 }}>BEST</span>}</td>
                      <td className={cls(row.pro)}>{row.pro}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="dd-cta">
        <div className="dd-cta-note">
          <strong>{product.short}</strong> · ₹{product.price.toLocaleString("en-IN")} · Made in India
        </div>
        <div className="dd-cta-btns">
<<<<<<< HEAD
          <a href="https://wa.me/917815809412" className="btn btn-secondary" target="_blank" rel="noreferrer">WhatsApp</a>
=======
          <a href="https://wa.me/918699929532" className="btn btn-secondary" target="_blank" rel="noreferrer">WhatsApp</a>
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
          <button className="btn btn-primary" style={{ background: product.color }} onClick={() => window.location.href = `/checkout?product=${product.id}&price=${product.price}`}>
            Order This Kit &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── PRODUCT CARD ───────────────────────────────────────────────── */
function ProductCard({ product, isSelected, onSelect }) {
  return (
    <div
      className={`pcard${isSelected ? " selected" : ""}`}
      style={{ "--pc-color": product.color }}
      onClick={() => onSelect(product.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(product.id);
        }
      }}
    >
      <div className="pc-visual">
        <div className="pc-badge-wrap">
          <span className="pc-badge" style={{ background: product.badgeBg, color: product.badgeColor }}>{product.badge}</span>
        </div>
        {product.isBest && <span className="pc-best">BEST SELLER</span>}
        {product.image ? (
          <img src={product.image} alt={product.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative", zIndex: 1 }} />
        ) : null}
        <div className="pc-fade" />
      </div>

      <div className="pc-body">
        <div className="pc-tier" style={{ color: product.color }}>{product.tier}</div>
        <div className="pc-name">{product.name}</div>
        <div className="pc-tagline">{product.tagline}</div>
        <div className="pc-chips">
          {product.controllers.slice(0, 3).map((c) => (
            <span className="chip" key={c}>{c.split("—")[0].split("(")[0].trim()}</span>
          ))}
        </div>
        <div className="pc-price-row">
          <div>
            <div className="pc-price" style={{ color: product.color }}>₹{product.price.toLocaleString("en-IN")} <span> + GST / unit</span></div>
            <div className="pc-old-price">MRP ₹{product.oldPrice.toLocaleString("en-IN")}</div>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".62rem", color: product.color, background: product.badgeBg, padding: "4px 10px", borderRadius: "5px", textAlign: "center" }}>
            SAVE<br />₹{(product.oldPrice - product.price).toLocaleString("en-IN")}
          </div>
        </div>
      </div>

      <div className="pc-footer">
        <button
          className="pc-btn-detail"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product.id);
          }}
        >
          {isSelected ? "Hide Details" : "Full Specs"}
        </button>
        <button
          className="pc-btn-buy"
          style={{ background: product.color }}
          onClick={(e) => {
            e.stopPropagation();
            window.location.href = `/checkout?product=${product.id}&price=${product.price}`;
          }}
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ──────────────────────────────────────────────────── */
export default function ProductsPage() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");
  const filterKitMap = {
<<<<<<< HEAD
    essential: "essential",
=======
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
    beginner: "lite",
    flagship: "experience",
    advanced: "pro",
  };

  const handleSelect = (id) => setSelected((prev) => (prev === id ? null : id));

  const handleFilter = (id) => {
    setFilter(id);
    setSelected(filterKitMap[id] || null);
  };

  const filtered = filter === "all" ? PRODUCTS
<<<<<<< HEAD
    : filter === "essential" ? PRODUCTS.filter((p) => p.id === "essential")
=======
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
    : filter === "beginner" ? PRODUCTS.filter((p) => p.id === "lite")
    : filter === "flagship" ? PRODUCTS.filter((p) => p.id === "experience")
    : PRODUCTS.filter((p) => p.id === "pro");

  const selectedId = filterKitMap[filter] || selected;
  const selectedProduct = PRODUCTS.find((p) => p.id === selectedId);

  const FILTERS = [
    { id: "all", label: "All Kits" },
<<<<<<< HEAD
    { id: "essential", label: "Essential" },
=======
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
    { id: "beginner", label: "Beginner" },
    { id: "flagship", label: "Flagship" },
    { id: "advanced", label: "Advanced" },
  ];

  return (
    <>
      <Helmet>
        <title>IoT &amp; Robotics AI Kits, Drones &amp; STEM Educational Boards | ARC LABS</title>
        <meta name="description" content="Buy premium made-in-India IoT and robotics AI kits, educational drones, and STM32/ESP32/Raspberry Pi development boards online. Designed for STEM school labs &amp; college training." />
        <link rel="canonical" href="https://arclabs.in/products" />
        <meta property="og:url" content="https://arclabs.in/products" />
        <meta property="og:title" content="IoT &amp; Robotics AI Kits, Drones &amp; STEM Educational Boards" />
        <meta property="og:description" content="Buy premium educational AI, IoT, robotics kits and drone training boards online. Support for Arduino, ESP32, STM32, and Raspberry Pi." />
      </Helmet>
      <style>{pageStyles}</style>

      <div className="ph-hero">
<<<<<<< HEAD
        <DottedSurface className="product-dotted-surface" />
=======
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
        <div className="badge" style={{ marginBottom: "1.8rem" }}>
          ARC Labs Hardware · Made in India
        </div>
        <h1>IoT &amp; Robotics Development Kits<br /><em>for STEM Education</em></h1>
<<<<<<< HEAD
        <p>Four development boards. Every major microcontroller. Designed in Hyderabad for Indian classrooms and labs.</p>
=======
        <p>Three development boards. Every major microcontroller. Designed in Hyderabad for Indian classrooms and labs.</p>
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
      </div>

      <div className="filter-bar">
        {FILTERS.map((f) => (
          <button key={f.id} className={`filter-btn${filter === f.id ? " active" : ""}`} onClick={() => handleFilter(f.id)}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="products-wrap">
        <div className={`pg-grid${selectedId ? " focus-mode" : ""}`}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} isSelected={selectedId === product.id} onSelect={handleSelect} />
          ))}
        </div>
        {selectedId && selectedProduct && (
          <DetailDrawer key={selectedId} product={selectedProduct} onClose={() => setSelected(null)} />
        )}
      </div>

      <div className="compare-section">
        <div className="section-label">Side-by-Side Comparison</div>
        <h2 className="section-heading">Which kit is right for you?</h2>
        <p className="section-desc" style={{ marginBottom: "2.5rem" }}>Compare all three kits across controllers, sensors, connectivity, and price.</p>
        <div style={{ overflowX: "auto" }}>
          <table className="fct">
<<<<<<< HEAD
<thead>
  <tr>
    <th style={{ minWidth: "210px" }}>Feature</th>

    <th className="th-essential">
      IOT ESSENTIAL KIT
      <br />
      <span
        style={{
          fontSize: ".65rem",
          fontWeight: 400,
          color: "var(--text-3)",
        }}
      >
        ₹10,000
      </span>
    </th>

    <th className="th-lite">
      IOT LITE KIT
      <br />
      <span
        style={{
          fontSize: ".65rem",
          fontWeight: 400,
          color: "var(--text-3)",
        }}
      >
        ₹15,000
      </span>
    </th>

    <th className="th-kit">
      IOT EXPERIENCE KIT
      <br />
      <span
        style={{
          fontSize: ".65rem",
          fontWeight: 400,
          color: "var(--text-3)",
        }}
      >
        ₹20,000
      </span>
    </th>

    <th className="th-pro">
      IOT PRO KIT
      <br />
      <span
        style={{
          fontSize: ".65rem",
          fontWeight: 400,
          color: "var(--text-3)",
        }}
      >
        ₹25,000
      </span>
    </th>
  </tr>
</thead>

<tbody>
  {COMPARE_ROWS.map((row, i) => {
    if (row.section)
      return (
        <tr className="fct-cat" key={i}>
          <td colSpan={5}>{row.section}</td>
        </tr>
      );

    const cell = (v) =>
      v === "✓" ? (
        <span className="fct-yes">{v}</span>
      ) : v === "—" ? (
        <span className="fct-no">{v}</span>
      ) : (
        <span className="fct-val">{v}</span>
      );

    return (
      <tr key={i}>
        <td>{row.label}</td>

        <td>{cell(row.essential)}</td>

        <td>{cell(row.lite)}</td>

        <td>{cell(row.exp)}</td>

        <td>{cell(row.pro)}</td>
      </tr>
    );
  })}
</tbody>
=======
            <thead>
              <tr>
                <th style={{ minWidth: "210px" }}>Feature</th>
                <th className="th-lite">IoT Lite Kit<br /><span style={{ fontSize: ".65rem", fontWeight: 400, color: "var(--text-3)" }}>₹15,000</span></th>
                <th className="th-kit">IoT Experience Kit<br /><span style={{ fontSize: ".65rem", fontWeight: 400, color: "var(--text-3)" }}>₹20,000</span></th>
                <th className="th-pro">IoT Pro Kit<br /><span style={{ fontSize: ".65rem", fontWeight: 400, color: "var(--text-3)" }}>₹25,000</span></th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row, i) => {
                if (row.cat) return <tr className="fct-cat" key={i}><td colSpan={4}>{row.label}</td></tr>;
                const cell = (v) => v === "✓" ? <span className="fct-yes">{v}</span> : v === "—" ? <span className="fct-no">{v}</span> : <span className="fct-val">{v}</span>;
                return (
                  <tr key={i} className={row.priceRow ? "price-row-fct" : ""}>
                    <td>{row.label}</td>
                    <td>{cell(row.lite)}</td>
                    <td>{cell(row.exp)}{row.label === "Best For" && <span className="fct-best" style={{ marginLeft: 6 }}>BEST</span>}</td>
                    <td>{cell(row.pro)}</td>
                  </tr>
                );
              })}
            </tbody>
>>>>>>> b8dfff3b603393a10fbbefad35e20ce310f665f2
          </table>
        </div>
      </div>

      <div className="pcta-section">
        <h2>Need help choosing the <span style={{ color: "var(--accent)" }}>right kit?</span></h2>
        <p>Talk to our team. We'll recommend the right board for your lab, budget, and curriculum.</p>
        <div className="pcta-btns">
          <a href="tel:+918699929532" className="btn btn-primary">Call Us</a>
          <a href="https://wa.me/918699929532" className="btn btn-secondary" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="mailto:hello@arclabs.in" className="btn btn-secondary">Email</a>
        </div>
        <p style={{ marginTop: "1.5rem", fontSize: ".85rem", color: "var(--text-3)" }}>
          Need a complete lab? <Link to="/lab-packages" style={{ color: "var(--accent)" }}>See our lab packages &rarr;</Link>
          &nbsp;&middot;&nbsp; <Link to="/programs" style={{ color: "var(--accent)" }}>Explore training programs &rarr;</Link>
        </p>
      </div>
    </>
  );
}
