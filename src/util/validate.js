const {
  VALID_LENGTH,
  VALID_MAX_NUM,
  VALID_MIN_NUM,
  UNIT_OF_AMOUNT,
} = require('../constant');

function validateUnitOfAmount(money) {
  if (money % UNIT_OF_AMOUNT !== 0)
    throw new Error('[ERROR] 로또 구입 금액은 1,000원 단위로 입력해주세요');
}

function validateMinAmount(money) {
  if (money < 1000)
    throw new Error('[ERROR] 로또 구입 금액은 1,000원 이상이어야 합니다.');
}

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
  validateUnitOfAmount,
  validateMinAmount,
  validateLength,
  validateDuplicate,
  validateDuplicateWithBonusNumber,
  validateNumberRange,
};
