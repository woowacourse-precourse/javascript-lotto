const { LOTTO_INFO, INPUT, ERROR } = require("./Constants");

const isCorrectAmountForm = (input) => {
  return INPUT.amount_form.test(input);
};

const isCorrectNumberForm = (input) => {
  return INPUT.number_form.test(input);
};

const amountInputValidation = (input) => {
  if (!isCorrectAmountForm(input)) {
    throw new Error(ERROR.incorrect_form);
  }
  return Number(input);
};

const numbersInputValidation = (input) => {
  if (!isCorrectNumberForm(input)) {
    throw new Error(ERROR.incorrect_form);
  }
  return input.split(",").map(Number);
};

const getValidatedInput = ({ input, type }) => {
  if (type === "purchase") return amountInputValidation(input);
  return numbersInputValidation(input);
};

const isNumberOfLottoNumbersCorrect = (numbers) => {
  return numbers.length === LOTTO_INFO.number_of_numbers;
};

const isNumbersInRange = (numbers) => {
  for (let i = 0, length = numbers.length; i < length; i++) {
    if (numbers[i] < LOTTO_INFO.min || numbers[i] > LOTTO_INFO.max) {
      return false;
    }
  }
  return true;
};

const hasDuplicateNumbers = (numbers) => {
  return new Set(numbers).size !== numbers.length;
};

const isNumberOfBonusNumberCorrect = (numbers) => {
  return numbers.length === LOTTO_INFO.number_of_bonus_number;
};

module.exports = {
  isNumberOfLottoNumbersCorrect,
  isNumbersInRange,
  hasDuplicateNumbers,
  isNumberOfBonusNumberCorrect,
  getValidatedInput,
};
