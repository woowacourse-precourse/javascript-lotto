const {
  isNumberType,
  isValidRange,
  isValidUnique,
  isThousandUnits,
  isValuesNumberType,
  isValuesValidRange,
  isValuesValidLength,
} = require("./validate");
const {
  inputUserValue,
  printMessage,
  generateRandomNumbers,
  close,
} = require("./missionUtils");
const { getTestLottoForm } = require("./testLottoForm");

module.exports = {
  isNumberType,
  isValidRange,
  isValidUnique,
  isThousandUnits,
  isValuesNumberType,
  isValuesValidRange,
  isValuesValidLength,
  inputUserValue,
  printMessage,
  generateRandomNumbers,
  close,
  getTestLottoForm,
};
