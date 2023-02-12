export const initialiseKeyboard = (KEYS, OPERATORS, ACTIONS) => {
  const keyboardWrapper = document.querySelector(".keyboard-wrapper");
  const templateRow = (data) => {
    let template = "";
    data.map((key) => {
      let className = "";
      if (key === 0) {
        className = "zero";
      }
      if (OPERATORS.includes(key)) {
        className = "operator";
      }
      if (ACTIONS.includes(key)) {
        className = "action";
      }
      template += "<div class='key " + className + "'>" + key + "</div>";
    });
    return template;
  };

  KEYS.reverse().map((row) => {
    keyboardWrapper.insertAdjacentHTML(
      "afterbegin",
      `
              <div class='row'>` +
        templateRow(row) +
        `</div>
          `
    );
  });
};
