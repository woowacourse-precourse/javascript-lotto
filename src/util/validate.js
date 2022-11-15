const { VALID_LENGTH, VALID_MAX_NUM, VALID_MIN_NUM } = require('../constant');

function validateLength(numbers) {
  if (numbers.length !== VALID_LENGTH) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }
  return true;
}

function validateDuplicate(numbers) {
  if (new Set(numbers).size !== VALID_LENGTH) {
    throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
  }
  return true;
}

function validateDuplicateWithBonusNumber(numbers, bonusNumber) {
  if (numbers.includes(bonusNumber)) {
    throw new Error('[ERROR] 보너스 번호는 당첨번호와 중복되지 않아야 합니다.');
  }
  return true;
}

function validateNumberRange(numbers) {
  for (const number of numbers) {
    if (number < VALID_MIN_NUM || number > VALID_MAX_NUM) {
      throw new Error('[ERROR] 로또 번호는 1~45 사이여야 합니다.');
    }
  }
  return true;
}

module.exports = {
  validateLength,
  validateDuplicate,
  validateDuplicateWithBonusNumber,
  validateNumberRange,
};
