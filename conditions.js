export const isClickOnInputPlaceholder = (event) =>
  event.target.classList.contains("input-placeholder");

export const isClickAway = (event) => !event.target.classList.contains("digit");

export const isClickOnDigit = (event) =>
  event.target.classList.contains("digit");

export const isInputPlaceHolderFocused = (event, inputPlaceholder) =>
  inputPlaceholder.classList.contains("focused");
