export const initialiseKeyboard = (KEYS, OPERATORS) => {
    const keyboardWrapper = document.querySelector(".keyboard-wrapper");
    const templateRow = (data) => {
        let template = "";
        data.map((key) => {
          let className = "";
          if (key === 0) {
            className = "zero";
          }
          if (OPERATORS.includes(key)) {
            className = 'operator'
          }
          template +=
            "<button class='key " + className + "'>" + key + "</button>";
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
}