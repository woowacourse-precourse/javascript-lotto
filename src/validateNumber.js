const { TYPE } = require("./constant/errorMessage");
const { THOUSAND } = require("./constant/inputMessage");
const { UserInputValidationError } = require("./errorHandling");

const insideNotNumber = (userInput) =>
  [...userInput].every((v) => parseInt(v) || v === "0");
const onlyInputInThousand = (userInput) => +userInput % THOUSAND !== 0;

function validateInputNumber(userInput) {
  if (!insideNotNumber(userInput)) {
    UserInputValidationError.showErrorMessage(TYPE.NOT_NUMBER);
  }

  if (onlyInputInThousand(userInput)) {
    UserInputValidationError.showErrorMessage(TYPE.NOT_THOUSAND);
  }
}

module.exports = {
  validateInputNumber,
};
