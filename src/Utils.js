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

function validateLottoNumber(input) {
  if (Array.from(input).length !== 6) {
    throw new Error(ErrorMessage.length);
  }

  input.map((number) => {
    if (number < 1 || number > 45) {
      throw Error(ErrorMessage.range);
    }
  });
}

function validateUniqueNumbers(numbers) {
  const set = new Set(numbers);
  if (set.size !== Array.from(numbers).length) {
    throw Error(ErrorMessage.duplicated);
  }
}

module.exports = {
  validateUserMoney,
  sortAscending,
  validateLottoNumber,
  validateUniqueNumbers,
};
