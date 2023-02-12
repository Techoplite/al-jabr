import { KEYS } from "./constants.js";
import { OPERATORS } from "./constants.js";
import { ACTIONS } from "./constants.js";
import { initialiseKeyboard } from "./helpers.js";

initialiseKeyboard(KEYS, OPERATORS, ACTIONS);

document.addEventListener("click", (event) => {});
