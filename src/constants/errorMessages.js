const LOTTO = require('./lotto');

const ERROR_PREFIX = '[ERROR]';
const AMOUNT_ERROR = `${ERROR_PREFIX} 금액은 숫자여야합니다.`;
const DIVISIBLE_ERROR = `${ERROR_PREFIX} 금액은 1,000원 단위여야 합니다.`;
const SEPARATOR_ERROR = `${ERROR_PREFIX} 당첨 번호는 ','로 구분돼야합니다.`;
const LENGTH_ERROR = `${ERROR_PREFIX} 로또 번호는 ${LOTTO.AMOUNT}개여야 합니다.`;
const NOT_A_NUMBER = `${ERROR_PREFIX} 로또 번호는 숫자여야 합니다.`;
const RANGE_ERROR = `${ERROR_PREFIX} 로또 번호는 ${LOTTO.FIRST_NUMBER} ~ ${LOTTO.LAST_NUMBER}사이입니다.`;
const DUPLICATE_ERROR = `${ERROR_PREFIX} 로또 번호는 중복돼선 안 됩니다.`;

module.exports = {
  AMOUNT_ERROR,
  DIVISIBLE_ERROR,
  SEPARATOR_ERROR,
  LENGTH_ERROR,
  NOT_A_NUMBER,
  RANGE_ERROR,
  DUPLICATE_ERROR,
};
