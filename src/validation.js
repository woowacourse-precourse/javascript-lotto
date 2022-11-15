const {
  NOT_LOTTO_PRICE_UNIT,
  NOT_INTEGER,
  IS_DUPLICATE,
  VALID_LIST_LENGTH_MSG,
  VALID_INPUT_FAIL,
  LOTTO_PRICE,
  LOTTO_MIN_BOUND,
  LOTTO_MAX_MOUND,
  LOTTO_COUNT,
  VALID_LOTTO_COUNT_MSG,
} = require('./Constant');

/**
 * @param {any[]} list
 * @param {number} length
 * @param {string} errMessage
 * @returns {boolean | ERROR}
 */
const validListLength = (list, length, errMessage) => {
  if (list.length === length) {
    return true;
  }
  throw new Error(errMessage ?? VALID_LIST_LENGTH_MSG);
};

/**
 * @param {string} value
 * @returns {boolean | ERROR}
 */
const validInteger = (value) => {
  const regex = /^[0-9]+$/;
  const number = parseInt(value, 10);

  if (regex.test(number)) {
    return true;
  }

  throw new Error(NOT_INTEGER);
};

/**
 * value가 1000원 단위인지 확인
 * @param {number} value
 * @returns {boolean | ERROR}
 */
const validLottoPriceUnit = (value) => {
  if (value % 1000 === 0) {
    return true;
  }

  throw new Error(NOT_LOTTO_PRICE_UNIT);
};

/**
 * 입력값이 criterion 이상인지 확인
 * @param {string} str
 * @param {number} criterion
 * @returns {boolean | ERROR}
 */
const validHigherNumber = (str, criterion) => {
  validInteger(criterion);

  const number = parseInt(str, 10);
  if (number >= criterion) {
    return true;
  }
  return new Error(VALID_INPUT_FAIL);
};

/**
 * @param {number} number
 * @param {number} minBound
 * @param {number} maxBound
 * @returns {boolean | ERROR}
 */
const validBoundInsideNumber = (number, minBound, maxBound) => {
  validInteger(number, minBound, maxBound);

  if (number >= minBound && number <= maxBound) {
    return true;
  }

  throw new Error(`[ERROR] 입력값이 ${minBound}~${maxBound} 의 값이 아닙니다.`);
};

/**
 * @param {number} number
 * @param {number} minBound
 * @param {number} maxBound
 * @return void
 */
const validBoundInsideNumberList = (numbers, minBound, maxBound) => {
  validInteger(minBound, maxBound);

  numbers.forEach((number) => {
    validBoundInsideNumber(number, minBound, maxBound);
  });
};

/**
 * 리스트 안에 중복된 값이 있는지 확인
 * @param {any[]} list
 * @returns {boolean | ERROR}
 */
const validNoDuplication = (list) => {
  const uniqueSet = new Set(list);
  const uniqueArr = [...uniqueSet];
  if (list.length === uniqueArr.length) {
    return true;
  }

  throw new Error(IS_DUPLICATE);
};

/**
 * 두 리스트간의 중복된 요소가 있는지 확인
 * @param {any[]} list1
 * @param {any[]} list2
 * @returns {boolean | ERROR}
 */
const validExistedDuplication = (list1, list2) => {
  const intersectionList = list1.filter((it) => list2.includes(it));
  if (intersectionList.length === 0) {
    return true;
  }

  throw new Error(IS_DUPLICATE);
};

const validPurchaseLotto = (answer) => {
  validInteger(answer);
  validLottoPriceUnit(answer);
  validHigherNumber(answer, LOTTO_PRICE);
};

const validInputWinningNumber = (numbers) => {
  validListLength(numbers, LOTTO_COUNT, VALID_LOTTO_COUNT_MSG);
  validBoundInsideNumberList(numbers, LOTTO_MIN_BOUND, LOTTO_MAX_MOUND);
  validNoDuplication(numbers);
};

const validInputBonusNumber = (winningNumbers, bonusNumber) => {
  validBoundInsideNumber(bonusNumber, LOTTO_MIN_BOUND, LOTTO_MAX_MOUND);
  validExistedDuplication(winningNumbers, [bonusNumber]);
};

const validLottoNumber = (numbers) => {
  validListLength(numbers, LOTTO_COUNT, VALID_LOTTO_COUNT_MSG);
  validNoDuplication(numbers);
  numbers.forEach((number) => {
    validBoundInsideNumber(number, LOTTO_MIN_BOUND, LOTTO_MAX_MOUND);
  });
};

module.exports = {
  validInteger,
  validBoundInsideNumber,
  validListLength,
  validBoundInsideNumberList,
  validNoDuplication,
  validExistedDuplication,
  validPurchaseLotto,
  validInputWinningNumber,
  validInputBonusNumber,
  validLottoNumber,
};
