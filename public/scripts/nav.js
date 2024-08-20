let navbar = document.getElementById("top-nav");

/* theme consts */
const THEME = "theme";
const LIGHT = "light";
const DARK = "dark";

const LIGHT_ICON = '<i class="fa-regular fa-sun" aria-hidden="true"></i>';
const DARK_ICON = '<i class="fa-regular fa-moon" aria-hidden="true"></i>';

/* Light/dark modes */
let body = document.body;

let theme = localStorage.getItem(THEME);
let themeToggle = document.getElementById(THEME);

function setThemeDark() {
  body.className = DARK;
  themeToggle.innerHTML = LIGHT_ICON;
}

function setThemeLight() {
  body.className = LIGHT;
  themeToggle.innerHTML = DARK_ICON;
}

function changeTheme(theme) {
  if (theme != LIGHT && theme != DARK) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      theme = LIGHT;
    } else {
      theme = DARK;
    }
  }

  switch (theme) {
    case LIGHT:
      setThemeLight();
      break;
    case DARK:
      setThemeDark();
      break;
  }
  localStorage.setItem(THEME, theme);
}

changeTheme(theme);

function toggleTheme() {
  if (theme === LIGHT) theme = DARK;
  else if (theme === DARK) theme = LIGHT;
  changeTheme(theme);
}

themeToggle.addEventListener("click", toggleTheme);

/* menu orientation consts */
const ALIGN = "alignment";
const LEFT = "left";
const RIGHT = "right";

const LEFT_ICON = '<i class="fa-regular fa-hand-point-left"></i>';
const RIGHT_ICON = '<i class="fa-regular fa-hand-point-right"></i>';

/* Menu alignment - right or left handed */
let align = localStorage.getItem(ALIGN);
let alignToggle = document.getElementById(ALIGN);

function setAlignLeft() {
  alignToggle.innerHTML = RIGHT_ICON;
  navbar.style.justifyContent = "flex-start";
  navbar.prepend(themeToggle);
  navbar.append(alignToggle);
}

function setAlignRight() {
  alignToggle.innerHTML = LEFT_ICON;
  navbar.style.justifyContent = "flex-end";
  navbar.prepend(alignToggle);
  navbar.append(themeToggle);
}

function changeAlign(align) {
  switch (align) {
    case LEFT:
      setAlignLeft();
      break;
    case null:
      align = RIGHT;
    case RIGHT:
      setAlignRight();
      break;
  }
  localStorage.setItem(ALIGN, align);
}

changeAlign(align);

function toggleAlign() {
  if (align === LEFT) align = RIGHT;
  else if (align === RIGHT) align = LEFT;
  changeAlign(align);
}

alignToggle.addEventListener("click", toggleAlign);

/* Populate the footer so I don't have to keep copy pasting */
let footerHTML = `
  <p>
    Created by <a href="https://leecat.art">Lee Cattarin</a> with help from
  </p>
  <ul>
    <li>
      <a href="https://linktr.ee/lenny_wonders">Lenny Wondra</a> (CSS and
      accessibility)
    </li>
    <li><a href="https://jaygrant.dev">Mx. Jay Grant</a> (web design)</li>
    <li>
      <a href="https://github.com/Joll59">Yomi Lajide</a> (responsive
      design)
    </li>
    <li>
      <a href="https://kolektiva.social/@LinsCollective">Lins&</a> (planning
      and support)
    </li>
    <li>
      <a href="https://socialgaff.whirling.top">Liam Woodard</a> (site
      testing)
    </li>
    <li>and all our wonderful <a href="/artists">artists</a></li>
  </ul>
  <p>
    Got site feedback?
    <a href="mailto:lee.cattarin@gmail.com?subject=rTR feedback"
      >Reach out!</a
    >
  </p>
`;

function populateFooter() {
  let footer = document.getElementById("footer");
  footer.innerHTML = footerHTML;
}

populateFooter();
