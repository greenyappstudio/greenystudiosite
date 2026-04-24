// Greeny Studio shared UI

function injectNav(activePage) {
  const nav = document.createElement("nav");
  nav.className = "nav";
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-brand">
        <div class="nav-logo">
          <img src="images/greenyicon.png" alt="Greeny App Studio logo" />
        </div>
        <div class="nav-brand-text">
          <span class="studio-label">Greeny App Studio</span>
          <span class="studio-name">Green Studio</span>
        </div>
      </a>
      <ul class="nav-links">
        <li><a href="index.html" ${activePage === "home" ? 'class="active"' : ""}>Home</a></li>
        <li><a href="apps.html" ${activePage === "apps" ? 'class="active"' : ""}>Our Apps</a></li>
        <li><a href="privacy.html" ${activePage === "privacy" ? 'class="active"' : ""}>Privacy Policy</a></li>
        <li><a href="mailto:support@greenystudio.site">Contact</a></li>
      </ul>
      <div class="nav-cta">
        <a href="apps.html" class="btn btn-primary" style="font-size:13px;padding:10px 20px;">View Apps</a>
      </div>
    </div>
  `;
  document.body.prepend(nav);

  ["bg-glow bg-glow--green", "bg-glow bg-glow--teal", "bg-glow bg-glow--blue"].forEach((cls) => {
    const el = document.createElement("div");
    el.className = cls;
    document.body.prepend(el);
  });
}

function injectFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:4px;">
            <div class="nav-logo" style="width:40px;height:40px;font-size:18px;">
              <img src="images/greenyicon.png" alt="Greeny App Studio logo" />
            </div>
            <span style="font-size:18px;font-weight:700;">Greeny App Studio</span>
          </div>
          <p>Crafting playful, polished mobile apps designed to brighten everyday moments. Built with heart, shipped with care.</p>
          <div style="margin-top:20px;display:flex;gap:10px;">
            <a href="mailto:support@greenystudio.site" class="btn btn-ghost" style="font-size:13px;padding:9px 16px;border-radius:12px;">Email Us</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Apps</h4>
          <ul>
            <li><a href="apps.html#greeny-block">Greeny Block</a></li>
            <li><a href="apps.html#greeny-word">Greeny Word Journey</a></li>
            <li><a href="apps.html#greeny-color">Greeny Color</a></li>
            <li><a href="apps.html#easymath">EasyMath Kids</a></li>
            <li><a href="apps.html#clipmy">ClipMy</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Studio</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="apps.html">All Apps</a></li>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="mailto:support@greenystudio.site">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="privacy.html#data">Data Collection</a></li>
            <li><a href="privacy.html#children">Children's Privacy</a></li>
            <li><a href="privacy.html#contact">Policy Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 Greeny App Studio (Green Studio). All rights reserved.</span>
        <span>
          <a href="privacy.html" style="color:var(--text3);margin-right:20px;transition:color 0.2s;" onmouseover="this.style.color='var(--g1)'" onmouseout="this.style.color='var(--text3)'">Privacy Policy</a>
          <a href="mailto:support@greenystudio.site" style="color:var(--text3);transition:color 0.2s;" onmouseover="this.style.color='var(--g1)'" onmouseout="this.style.color='var(--text3)'">support@greenystudio.site</a>
        </span>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}
