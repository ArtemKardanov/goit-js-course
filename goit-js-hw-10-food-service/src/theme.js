const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const input = document.querySelector("input.js-switch-input");
const body = document.querySelector("body");

body.classList.toggle(Theme.LIGHT);

const darkTheme = localStorage.getItem("dark");

if (darkTheme) {
  body.classList.toggle(Theme.LIGHT);
  body.classList.toggle(darkTheme);

  input.setAttribute("checked", true);
}

input.addEventListener("change", handleThemeChanger);

function handleThemeChanger(e) {
  e.preventDefault();

  body.classList.toggle(Theme.LIGHT);
  body.classList.toggle(Theme.DARK);

  if (body.classList.contains(Theme.LIGHT)) {
    localStorage.setItem("light", Theme.LIGHT);
    localStorage.removeItem("dark")
  } else if (body.classList.contains(Theme.DARK)) {
    localStorage.setItem("dark", Theme.DARK);
    localStorage.removeItem("light")
  }
};
