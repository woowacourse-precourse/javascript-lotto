const { Console } = require('@woowacourse/mission-utils');

const isValidateNumber = (number) => {
  const numberRegex = /^[0-9]+$/g;
  if (!number.match(numberRegex)) {
    Console.close();
    throw new Error('[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.');
  }
};

const isAmountUnitOf1000 = (number) => {
  if (number % 1000 !== 0) {
    Console.close();
    throw new Error('[ERROR] 구입금액은 1000 단위 입니다.');
  }
};

const isZeroNumber = (number) => {
  if (number === '0') {
    Console.close();
    throw new Error('[ERROR] 최소금액은 1000원입니다.');
  }
};

const isLottoRange = (number) => {
  if (number < 1 || number > 45) {
    Console.close();
    throw new Error('[ERROR] 로또번호는 1부터 45까지입니다.');
  }
};

const isDuplicate = (number) => {
  if (new Set(number).size !== 6) {
    Console.close();
    throw new Error('[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.');
  }
};

module.exports = { isValidateNumber, isAmountUnitOf1000, isZeroNumber, isLottoRange, isDuplicate };
