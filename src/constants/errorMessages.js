const ERROR_PREFIX = '[ERROR]';
const AMOUNT_ERROR = `${ERROR_PREFIX} 금액은 숫자여야합니다.`;
const DIVISIBLE_ERROR = `${ERROR_PREFIX} 금액은 1,000원 단위여야 합니다.`;

module.exports = {
  AMOUNT_ERROR,
  DIVISIBLE_ERROR,
};
