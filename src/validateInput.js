const { PRICE_TYPE, LOTTO_TYPE } = require("./constant/errorMessage");
const { UserInputValidationError } = require("./utils/errorHandling");
const {
  insideNotNumber,
  onlyInputInThousand,
  checkBelowThousand,
  isSixNumbers,
  checkWinRange,
  checkDuplicationNumber,
  checkValidationInput,
  existNotNumberInInput,
  checkBonusRange,
  checkDuplicationInWinNumbers,
} = require("./utils/validateFn");

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
