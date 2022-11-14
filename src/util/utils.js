const {
  VALID_LOTTO_NUMBER_LENGTH,
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER
} = require('../constants/numbers.js');

const isValidMoneyNumberAmount = (money) => {
  if (isNaN(money) || money === undefined) {
    throw new Error('[ERROR] 금액 입력 시 숫자 이외에는 입력할 수 없습니다.');
  }
  if (!Number.isInteger(money)) {
    throw new Error('[ERROR] 금액 입력 시 소수점 이하는 허용되지 않습니다.');
  }
  if (money < 0) {
    throw new Error('[ERROR] 금액 입력 시 음수를 입력할 수 없습니다.');
  }
  if (money % 1000 !== 0) {
    throw new Error('[ERROR] 금액은 1,000 원 단위로만 입력 가능합니다.');
  }
};

const isValidLottoNumbers = (numbers) => {
  if (numbers.length !== VALID_LOTTO_NUMBER_LENGTH) {
    throw new Error('[ERROR] 로또 번호는 6자리 숫자로 구성되어야 합니다.');
  }
  if (hasNonNumber(numbers)) {
    throw new Error('[ERROR] 로또 번호는 숫자로만 구성되어야 합니다.');
  }
  if (hasNonInteger(numbers)) {
    throw new Error('[ERROR] 로또 번호에는 소수점 이하가 허용되지 않습니다.');
  }
  if (hasNegativeNumber(numbers)) {
    throw new Error('[ERROR] 로또 번호에는 음수가 포함될 수 없습니다.');
  }
  if (hasInvalidSizeNumber(numbers)) {
    throw new Error('[ERROR] 로또 번호는 1 이상 45 이하여야 합니다.');
  }
  if (hasDuplicateNumbers(numbers)) {
    throw new Error('[ERROR] 로또 번호에 중복된 숫자가 포함되어 있습니다.');
  }
};

const isValidLottoBonusNumber = (number, winningNumbers) => {
  if (isNaN(number) || number === undefined) {
    throw new Error('[ERROR] 보너스 번호는 하나의 숫자만 허용됩니다.');
  }
  if (!Number.isInteger(number)) {
    throw new Error(
      '[ERROR] 보너스 번호 입력 시 소수점 이하는 허용되지 않습니다.'
    );
  }
  if (isNegativeNumber(number)) {
    throw new Error('[ERROR] 보너스 번호 입력 시 음수는 허용되지 않습니다.');
  }
  if (isInvalidSize(number)) {
    throw new Error('[ERROR] 보너스 번호는 1 이상 45 이하여야 합니다.');
  }
  if (winningNumbers.includes(number)) {
    throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  }
};

module.exports = {
  isValidMoneyNumberAmount,
  isValidLottoNumbers,
  isValidLottoBonusNumber
};

const hasNonNumber = (array) => {
  if (array.map(isNaN).includes(true)) {
    return true;
  }
  return false;
};

const hasNonInteger = (array) => {
  if (array.map(Number.isInteger).includes(false)) {
    return true;
  }
  return false;
};

const hasDuplicateNumbers = (array) => {
  const uniqueSet = new Set(array);
  if (uniqueSet.size < VALID_LOTTO_NUMBER_LENGTH) {
    return true;
  }
  return false;
};

const hasNegativeNumber = (array) => {
  if (array.map(isNegativeNumber).includes(true)) {
    return true;
  }
  return false;
};

const hasInvalidSizeNumber = (array) => {
  if (array.map(isInvalidSize).includes(true)) {
    return true;
  }
  return false;
};

const isInvalidSize = (number) => {
  if (number < MIN_LOTTO_NUMBER || number > MAX_LOTTO_NUMBER) {
    return true;
  }
  return false;
};

const isNegativeNumber = (number) => {
  if (number < 0) {
    return true;
  }
  return false;
};
