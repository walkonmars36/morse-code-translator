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
      const inputTextArray = inputTextLowerCase.split("");
      const inputTextTranslate = inputTextArray.map((char) => englishToMorse[char]);
      const inputTextConcat = inputTextTranslate.join(" ");
      return inputTextConcat;
    } else {
      return "Not a valid input";
    }
  }

  getMorseToEnglish(inputMorse) {
    if (typeof inputMorse === "string" && inputMorse.length > 0) {
      const inputMorseLowerCase = inputMorse.toLowerCase();
      const inputMorseArray = inputMorseLowerCase.split(" ");
      const inputMorseTranslate = inputMorseArray.map((char) => morseToEnglish[char]);
      const inputMorseConcat = inputMorseTranslate.join("");
      return inputMorseConcat;
    } else {
      return "Not a valid input";
    }
  }
}

const translation = new Translator();

const input = document.querySelector(".input");
const output = document.querySelector(".output");
const button = document.querySelector(".button");

const getTranslation = () => {
  let getInputType = input.value;

  if (!/[^a-zA-Z]/.test(getInputType)) {
    const translateToMorse = translation.getEnglishToMorse(getInputType);
    output.innerHTML = translateToMorse;
  } else {
    const translateToEnglish = translation.getMorseToEnglish(getInputType);
    output.innerHTML = translateToEnglish;
  }
};

button.addEventListener("click", () => {
  getTranslation();
});
