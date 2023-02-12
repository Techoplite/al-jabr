export const initialiseKeyboard = (DIGITS) => {
    const keyboardWrapper = document.querySelector(".keyboard-wrapper");
    const templateRow = (data) => {
        let template = "";
        data.map((digit) => {
          let className = "";
          if (digit === 0) {
            className = "zero";
          }
          template +=
            "<button class='digit " + className + "'>" + digit + "</button>";
        });
        return template;
      };
      
      DIGITS.reverse().map((row) => {
        keyboardWrapper.insertAdjacentHTML(
          "afterbegin",
          `
              <div class='row'>` +
            templateRow(row) +
            `</div>
          `
        );
      });
      
      const inputDisplay = document.querySelector(".input-display");
      inputDisplay.insertAdjacentHTML(
        "afterbegin",
        `
          <div class='input-placeholder'></div>
      `
      );
}