// Shared header, nav, and footer for all pages

const PAGES = {
  home: { label: 'Home', href: 'index.html' },
  integumentary: { label: 'Integumentary System (10000s)', href: 'cheat-integumentary.html' },
  musculoskeletal: { label: 'Musculoskeletal System (20000s)', href: 'cheat-musculoskeletal.html' },
  respiratory: { label: 'Respiratory / Hemic / Lymphatic (30000s)', href: 'cheat-respiratory.html' },
  cardiovascular: { label: 'Cardiovascular System (33000s)', href: 'cheat-cardiovascular.html' },
  digestive: { label: 'Digestive System (40000s)', href: 'cheat-digestive.html' },
  urinary: { label: 'Urinary System (50000s)', href: 'cheat-urinary.html' },
  radiology: { label: 'Radiology (70000s)', href: 'cheat-radiology.html' },
  week1: { label: 'Part 1: AAPC Membership', href: 'week-1.html' },
  week2: { label: 'Part 2: Exam Format', href: 'week-2.html' },
  week3: { label: 'Part 3: Registration', href: 'week-3.html' },
  week4: { label: 'Part 4: Study Strategies', href: 'week-4.html' },
  week5: { label: 'Part 5: Exam Day', href: 'week-5.html' },
  week6: { label: 'Part 6: After the Exam', href: 'week-6.html' },
};

const CHEAT_SHEETS = ['integumentary','musculoskeletal','respiratory','cardiovascular','digestive','urinary','radiology'];
const WEEKS = ['week1','week2','week3','week4','week5','week6'];

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

  const csActive = CHEAT_SHEETS.includes(activePage);
  const wkActive = WEEKS.includes(activePage);

  const csItems = CHEAT_SHEETS.map(p =>
    `<a href="${PAGES[p].href}" class="dropdown-item ${activePage===p?'active':''}">${PAGES[p].label}</a>`
  ).join('');

  const wkItems = WEEKS.map(p =>
    `<a href="${PAGES[p].href}" class="dropdown-item ${activePage===p?'active':''}">${PAGES[p].label}</a>`
  ).join('');

  el.innerHTML = `
    <div class="inner">
      <a href="index.html" class="nav-link ${activePage==='home'?'active':''}">Home</a>
      <div class="nav-dropdown">
        <a class="nav-link dropdown-toggle ${csActive?'active':''}" href="#">
          CPT Cheat Sheets <span class="caret">&#9660;</span>
        </a>
        <div class="dropdown-menu">${csItems}</div>
      </div>
      <div class="nav-dropdown">
        <a class="nav-link dropdown-toggle ${wkActive?'active':''}" href="#">
          Exam Prep Series <span class="caret">&#9660;</span>
        </a>
        <div class="dropdown-menu">${wkItems}</div>
      </div>
    </div>`;
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
