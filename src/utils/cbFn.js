const { validateInputNumber } = require("../validateNumber");

function gameStartCallback(userInput) {
  this.userPrice = userInput;
  if (validateInputNumber(this.userPrice)) {
    console.log("통과!");
  }
}

module.exports = {
  gameStartCallback,
};
