const { ErrorMessage } = require("./Constants");

function validateUserMoney(userMoney) {
  if (userMoney % 1000 !== 0) {
    throw Error(ErrorMessage.puchaseAmount);
  }
}

function sortAscending(numbers) {
  numbers.sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
}

module.exports = {
  validateUserMoney,
  sortAscending,
};
