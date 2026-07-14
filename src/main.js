import { generateProjects } from "./generate.js";

window.onload = generateProjects;

document.querySelectorAll(".colour_selector").forEach(e =>
  e.addEventListener("click", select_colour)
)

function select_colour(self, event) {
  document.querySelectorAll(".selected").forEach(e =>
    e.classList.remove("selected"));

  self.currentTarget.classList.add("selected");

  document.documentElement.dataset.theme = self.currentTarget.dataset.colourscheme
}
