import { WORDS } from "./data/words.js";
import { PATTERNS } from "./core/patterns.js";
import { highlightWord } from "./core/highlight.js";
import { createWordEngine } from "./core/wordEngine.js";
import { renderWord } from "./ui/renderer.js";

const container = document.getElementById("word-container");
const toggleButton = document.getElementById("toggle-highlight");
const nextButton = document.getElementById("next-word");

const engine = createWordEngine(WORDS);

let highlightEnabled = false;

function updateWord() {
  const word = engine.current();
  const display = highlightEnabled
    ? highlightWord(word, PATTERNS)
    : word;

  renderWord(container, display);
}

toggleButton.addEventListener("click", () => {
  highlightEnabled = !highlightEnabled;
  updateWord();
});

nextButton.addEventListener("click", () => {
  engine.next();
  updateWord();
});

// initialize
engine.next();
updateWord();

