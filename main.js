let digits = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0, "."],
];

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

const inputDisplay = document.querySelector(".input-display");
inputDisplay.insertAdjacentHTML(
  "afterbegin",
  `
    <div class='input-placeholder'></div>
`
);

document.addEventListener("click", (event) => {
  const inputPlaceholder = document.querySelector(".input-placeholder");
  console.log('inputPlaceholder :>> ', inputPlaceholder);
  if (event.target.classList.contains("input-placeholder")) {
    event.target.classList.add("focused");
  } else if (!event.target.classList.contains("digit")) {
    const inputPlaceholder = document.querySelector(".input-placeholder");
    inputPlaceholder.classList.remove("focused");
  }
  if (
    event.target.classList.contains("digit") &&
    inputPlaceholder.classList.contains("focused")
  ) {
    console.log('should insert digit');
    inputPlaceholder.insertAdjacentHTML(
      "beforebegin",
      event.target.textContent
    );
  }
});
