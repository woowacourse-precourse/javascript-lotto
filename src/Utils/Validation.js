const { ERROR_MESSAGE } = require('../Constants/MESSAGE');

function checkAppropriateUnit(money) {
  if (money % 1000 !== 0) throw new Error(`${ERROR_MESSAGE.appropriateUnit}`);
}

function checkAppropriateMoney(money) {
  const RegExp = /^[1-9]$/;
  if (RegExp.test(money)) throw new Error(`${ERROR_MESSAGE.appropriateMoney}`);
}

function checkSplitSymbol(mainNumber) {
  if (Number.isNaN(mainNumber[0])) throw new Error(`${ERROR_MESSAGE.splitSymbol}`);
}

function checkMainNumber(mainNumber) {
  const RegExp = /^[1-9]{1}$/;
  if (mainNumber.length !== 6) throw new Error(`${ERROR_MESSAGE.mainNumber}`);
  mainNumber.forEach((number) => {
    if (!RegExp.test(number)) throw new Error(`${ERROR_MESSAGE.mainNumber}`);
  });
}

function checkBonusNumber(bonusNumber) {
  const RegExp = /^[1-9]{1}$/;
  if (!RegExp.test(bonusNumber)) throw new Error(`${ERROR_MESSAGE.bonusNumber}`);
}

function checkRange(mainNumber, bonusNumber) {
  mainNumber.forEach((number) => {
    if (number < 0 || number > 45) throw new Error(`${ERROR_MESSAGE.numberRange}`);
  });
  if (bonusNumber < 0 || bonusNumber > 45) throw new Error(`${ERROR_MESSAGE.numberRange}`);
}

function checkMainNumberOverlap(mainNumber) {
  const numberSet = new Set(mainNumber);
  if (numberSet.size !== mainNumber.length) throw new Error(`${ERROR_MESSAGE.mainNumberOverlap}`);
}

function checkBonusNumberOverlap(mainNumber, bonusNumber) {
  if (mainNumber.includes(bonusNumber)) throw new Error(`${ERROR_MESSAGE.bonusNumberOverlap}`);
}

module.exports = {
  checkAppropriateUnit,
  checkAppropriateMoney,
  checkSplitSymbol,
  checkMainNumber,
  checkBonusNumber,
  checkRange,
  checkMainNumberOverlap,
  checkBonusNumberOverlap,
};
