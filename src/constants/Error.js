const HEADER = '[ERROR]';

const WRONG_LENGTH = `${HEADER} 로또 번호는 6개여야 합니다.`;
const DUPLICATED = `${HEADER} 로또 번호는 중복되지 않아야 합니다.`;
const WRONG_RANGE = `${HEADER} 로또 번호는 1부터 45까지의 정수여야 합니다.'`;
const WRONG_MONEY = `${HEADER} 구입 금액은 1,000원 단위의 정수여야 합니다.`;

module.exports = {
  WRONG_LENGTH,
  DUPLICATED,
  WRONG_RANGE,
  WRONG_MONEY,
};
