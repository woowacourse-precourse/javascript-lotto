const { INPUT, ERROR } = require("../Constants/Constants");

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
  if (type === "purchase") {
    return amountInputValidation(input);
  }
  return numbersInputValidation(input);
};

module.exports = {
  getValidatedInput,
};
