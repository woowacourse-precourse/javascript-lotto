const { PRICE_TYPE, LOTTO_TYPE } = require("./constant/errorMessage");
const { RANGE } = require("./constant/inputMessage");
const { THOUSAND } = require("./constant/inputMessage");
const { UserInputValidationError } = require("./utils/errorHandling");
const { removeDuplication } = require("./utils/removeDuplication");

const insideNotNumber = (userInput) =>
  [...userInput].every((v) => parseInt(v) || v === "0");

const onlyInputInThousand = (userInput) => +userInput % THOUSAND !== 0;

const checkBelowThousand = (userInput) => +userInput < THOUSAND;

const isSixNumbers = (userInput) =>
  userInput.split(",").filter((v) => v !== ",").length === RANGE.COUNT;

const checkWinRange = (userInput) =>
  userInput.split(",").every((v) => +v >= RANGE.START && +v <= RANGE.END);

const checkDuplicationNumber = (userInput) => {
  const arr = userInput.split(",").map(Number);

  return removeDuplication(arr).length === arr.length;
};

const checkValidationInput = (userInput) => userInput.includes(".");

const existNotNumberInInput = (userInput) => +userInput;

const checkBonusRange = (userInput) =>
  +userInput >= RANGE.START && +userInput <= RANGE.END;

const checkDuplicationInWinNumbers = (userInput, winLottos) =>
  winLottos.includes(+userInput);

function validatePurchaseCost(userInput) {
  if (!insideNotNumber(userInput)) {
    UserInputValidationError.priceErrorMessage(PRICE_TYPE.NOT_NUMBER);
  }

  if (onlyInputInThousand(userInput)) {
    UserInputValidationError.priceErrorMessage(PRICE_TYPE.NOT_THOUSAND);
  }

  if (checkBelowThousand(userInput)) {
    UserInputValidationError.priceErrorMessage(PRICE_TYPE.NOT_BUY_LOTTO);
  }

  return true;
}

function validateWinNumbers(userInput) {
  if (!isSixNumbers(userInput)) {
    UserInputValidationError.lottoErrorMessage(LOTTO_TYPE.NOT_SIX_NUMBERS);
  }

  if (!checkWinRange(userInput)) {
    UserInputValidationError.lottoErrorMessage(LOTTO_TYPE.NOT_RANGE);
  }

  if (!checkDuplicationNumber(userInput)) {
    UserInputValidationError.lottoErrorMessage(LOTTO_TYPE.IS_DUPLICATION);
  }

  if (checkValidationInput(userInput)) {
    UserInputValidationError.lottoErrorMessage(LOTTO_TYPE.IS_VALIDATION);
  }

  return true;
}

function validateBonusNumber(userInput, winLottos) {
  if (checkValidationInput(userInput) || !existNotNumberInInput(userInput)) {
    UserInputValidationError.lottoErrorMessage(LOTTO_TYPE.IS_VALIDATION);
  }

  if (!checkBonusRange(userInput)) {
    UserInputValidationError.lottoErrorMessage(LOTTO_TYPE.NOT_RANGE);
  }

  if (checkDuplicationInWinNumbers(userInput, winLottos)) {
    UserInputValidationError.lottoErrorMessage(LOTTO_TYPE.IS_BONUS_IN_WIN);
  }

  return true;
}

module.exports = {
  validatePurchaseCost,
  validateWinNumbers,
  validateBonusNumber,
};
