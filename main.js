import {
  isClickAway,
  isClickOnDigit,
  isClickOnInputPlaceholder,
  isInputPlaceHolderFocused,
} from "./conditions.js";
import { DIGITS } from "./constants.js";
import { getInputHolder } from "./getters.js";
import { initialiseKeyboard } from "./helpers.js";

initialiseKeyboard(DIGITS);

document.addEventListener("click", (event) => {
  const inputPlaceholder = getInputHolder();
  if (isClickOnInputPlaceholder(event)) {
    event.target.classList.add("focused");
  } else if (isClickAway(event)) {
    const inputPlaceholder = document.querySelector(".input-placeholder");
    inputPlaceholder.classList.remove("focused");
  }
  if (
    isClickOnDigit(event) &&
    isInputPlaceHolderFocused(event, inputPlaceholder)
  ) {
    inputPlaceholder.insertAdjacentHTML(
      "beforebegin",
      event.target.textContent
    );
  }
});
