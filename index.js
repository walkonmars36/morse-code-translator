// import alphabet and morse objects from alphabet.js
import {englishToMorse, morseToEnglish} from "./alphabetMorse.js";

// create a translator class with methods
class Translator {
  constructor(englishToMorse, morseToEnglish) {
    this.englishToMorse = englishToMorse;
    this.morseToEnglish = morseToEnglish;
  }

  getEnglishToMorse(inputText) {
    if (typeof inputText === "string" && inputText.length > 0) {
      const inputTextLowerCase = inputText.toLowerCase();
      const TextArray = inputTextLowerCase.split("");
      const TextTranslate = TextArray.map((e) => englishToMorse[e]);
      const morseTranslation = TextTranslate.join(" ");
      return morseTranslation;
    } else {
      return "Not a valid input";
    }
  }

  getMorseToEnglish(inputMorse) {
    if (typeof inputMorse === "string" && inputMorse.length > 0) {
      const MorseArray = inputMorse.split(" ");
      const MorseTranslate = MorseArray.map((e) => morseToEnglish[e] || " ");
      const textTranslation = MorseTranslate.join("");
      return textTranslation;
    } else {
      return "Not a valid input";
    }
  }
}

const translation = new Translator();

const input = document.querySelector(".input");
const output = document.querySelector(".output");
const translateBtn = document.querySelector(".translate-btn");
const clearBtn = document.querySelector(".clear-btn");

const getTranslation = () => {
  let getInputType = input.value;

  if (!/[^a-zA-Z ' .]/.test(getInputType)) {
    const translateToMorse = translation.getEnglishToMorse(getInputType);
    output.innerHTML = translateToMorse;
  } else {
    const translateToEnglish = translation.getMorseToEnglish(getInputType);
    output.innerHTML = translateToEnglish.charAt(0).toUpperCase() + translateToEnglish.slice(1);
  }
};

translateBtn.addEventListener("click", () => {
  getTranslation();
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  output.innerHTML = "";
});
