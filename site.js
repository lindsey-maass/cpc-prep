// Shared header, nav, and footer for all pages
// Usage: call renderHeader(activePage) after DOMContentLoaded

const PAGES = {
  home: { label: 'Home', href: 'index.html' },
  integumentary: { label: 'Integumentary', href: 'cheat-integumentary.html' },
  musculoskeletal: { label: 'Musculoskeletal', href: 'cheat-musculoskeletal.html' },
  respiratory: { label: 'Respiratory', href: 'cheat-respiratory.html' },
  cardiovascular: { label: 'Cardiovascular', href: 'cheat-cardiovascular.html' },
  digestive: { label: 'Digestive', href: 'cheat-digestive.html' },
  urinary: { label: 'Urinary', href: 'cheat-urinary.html' },
  radiology: { label: 'Radiology', href: 'cheat-radiology.html' },
  week1: { label: 'Week 1', href: 'week-1.html' },
  week2: { label: 'Week 2', href: 'week-2.html' },
  week3: { label: 'Week 3', href: 'week-3.html' },
  week4: { label: 'Week 4', href: 'week-4.html' },
  week5: { label: 'Week 5', href: 'week-5.html' },
  week6: { label: 'Week 6', href: 'week-6.html' },
};

function renderSite(activePage) {
  renderHeader();
  renderNav(activePage);
  renderFooter();
}

function renderHeader() {
  const el = document.getElementById('site-header');
  if (!el) return;
  el.innerHTML = `
    <div class="inner">
      <a href="index.html" class="logo">
        <div class="logo-mark">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="none" stroke="white" stroke-width="2.5"/>
            <polygon points="20,10 30,15 30,25 20,30 10,25 10,15" fill="none" stroke="white" stroke-width="2"/>
            <circle cx="20" cy="20" r="3" fill="white"/>
          </svg>
        </div>
        <div>
          <span class="logo-name">Alexandria College</span>
          <span class="logo-sub">CPC Certification Prep</span>
        </div>
      </a>
      <div class="header-contact">
        <strong style="font-family:var(--font-head);color:var(--black);font-size:13px;letter-spacing:0.3px;">Lindsey Maass</strong><br>
        <a href="tel:+13207624515">320-762-4515</a> &nbsp;|&nbsp;
        <a href="mailto:lindsey.maass@alextech.edu">lindsey.maass@alextech.edu</a>
      </div>
    </div>`;
}

function renderNav(activePage) {
  const el = document.getElementById('site-nav');
  if (!el) return;

  const cheatSheets = ['integumentary','musculoskeletal','respiratory','cardiovascular','digestive','urinary','radiology'];
  const weeks = ['week1','week2','week3','week4','week5','week6'];

  let html = '<div class="inner">';
  html += `<a href="index.html" class="${activePage==='home'?'active':''}">Home</a>`;
  html += '<div class="nav-divider"></div>';
  html += '<span style="font-family:var(--font-head);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#555;padding:13px 10px 13px 16px;display:block;">Cheat Sheets:</span>';
  cheatSheets.forEach(p => {
    html += `<a href="${PAGES[p].href}" class="${activePage===p?'active':''}">${PAGES[p].label}</a>`;
  });
  html += '<div class="nav-divider"></div>';
  html += '<span style="font-family:var(--font-head);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#555;padding:13px 10px 13px 16px;display:block;">Exam Prep Series:</span>';
  weeks.forEach(p => {
    html += `<a href="${PAGES[p].href}" class="${activePage===p?'active':''}">${PAGES[p].label}</a>`;
  });
  html += '</div>';
  el.innerHTML = html;
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
    <div class="inner">
      <div class="footer-name">Alexandria Technical &amp; Community College</div>
      <div>1601 Jefferson Street, Alexandria, MN 56308 &nbsp;|&nbsp; 320-762-0221 &nbsp;|&nbsp; <a href="https://www.alextech.edu" target="_blank">alextech.edu</a></div>
      <div style="margin-top:8px;">CPC Certification Prep &nbsp;|&nbsp; Questions: <a href="mailto:lindsey.maass@alextech.edu">lindsey.maass@alextech.edu</a> &nbsp;|&nbsp; <a href="tel:+13207624515">320-762-4515</a></div>
      <div style="margin-top:10px;font-size:11px;color:#444;">An Equal Opportunity Employer/Educator &nbsp;|&nbsp; A Member of Minnesota State</div>
    </div>`;
}
