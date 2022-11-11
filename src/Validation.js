const { PICK_TYPE, PICK_LENGTH } = require('./Constants/PICK');
const { ERROR_MESSAGE } = require('./Constants/MESSAGE');

function checkAppropriateUnit(money) {
  if (money % 1000 !== 0) throw new Error(`${ERROR_MESSAGE.appropriateUnit}`);
}

function checkSplitSymbol(numbers) {
  if (Number.isNaN(numbers)) throw new Error(`${ERROR_MESSAGE.splitSymbol}`);
}

function checkNumberOfDigit(numbers, type) {
  if (type === PICK_TYPE.main) {
    if (numbers.length !== PICK_LENGTH.main) throw new Error(`${ERROR_MESSAGE.mainNumberOfDigit}`);
  }
  if (type === PICK_TYPE.bonus) {
    if (numbers.length !== PICK_LENGTH.bonus) throw new Error(`${ERROR_MESSAGE.bonusNumberOfDigit}`);
  }
}

function checkMainNumberInRange(numbers) {
  numbers.forEach((number) => {
    if (number < 1 || number > 45) throw new Error(`${ERROR_MESSAGE.numberInRange}`);
  });
}

function checkBonusNumberInRange(number) {
  if (number < 1 || number > 45) throw new Error(`${ERROR_MESSAGE.numberInRange}`);
}

function checkMainNumberOverlap(numbers) {
  const numberSet = new Set(numbers);
  if (numberSet.size !== numbers.length) throw new Error(`${ERROR_MESSAGE.mainNumberOverlap}`);
}

function checkBonusNumberOverlap(numbers, bonusNumber) {
  if (numbers.includes(bonusNumber)) throw new Error(`${ERROR_MESSAGE.bonusNumberOverlap}`);
}

module.exports = {
  checkAppropriateUnit,
  checkSplitSymbol,
  checkNumberOfDigit,
  checkMainNumberInRange,
  checkBonusNumberInRange,
  checkMainNumberOverlap,
  checkBonusNumberOverlap,
};
