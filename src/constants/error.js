const ERROR_HEADER = '[ERROR]';
const ERROR_WRONG_LENGTH = `${ERROR_HEADER} 로또 번호는 6개여야 합니다.`;
const ERROR_DUPLICATED = `${ERROR_HEADER} 로또 번호는 중복되지 않아야 합니다.`;
const ERROR_WRONG_RANGE = `${ERROR_HEADER} 로또 번호는 1부터 45까지의 정수여야 합니다.'`;
const ERROR_WRONG_MONEY = `${ERROR_HEADER} 구입 금액은 1,000원 단위의 정수여야 합니다.`;

module.exports = {
  ERROR_WRONG_LENGTH,
  ERROR_DUPLICATED,
  ERROR_WRONG_RANGE,
  ERROR_WRONG_MONEY,
};
