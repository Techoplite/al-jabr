import { KEYS } from "./constants.js";
import { OPERATORS } from "./constants.js";
import { initialiseKeyboard } from "./helpers.js";

initialiseKeyboard(KEYS, OPERATORS);

document.addEventListener("click", (event) => {});
