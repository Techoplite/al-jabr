let digits = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0, '.']];

const keyboardWrapper = document.querySelector(".keyboard-wrapper");

const templateRow = (data) => {
  let template = "";
  data.map((digit) => {
    let className = ''
    if (digit === 0 ) {
        className = 'zero'
    }
    template += "<button class='" + className + "'>" + digit + "</button>";
  });
  return template;
};

digits.reverse().map((row) => {
  keyboardWrapper.insertAdjacentHTML(
    "afterbegin",
    `
        <div class='row'>` +
      templateRow(row) +
      `</div>
    `
  );
});
