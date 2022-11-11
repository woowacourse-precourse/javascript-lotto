const ERROR = "[ERROR]";
const ERROR_MESSAGE = Object.freeze({
  LOTTO_LENGTH_6: `${ERROR} 로또 번호는 6개여야 합니다.`,
  LOTTO_DUPLICATE_NUMBER: `${ERROR} 로또 번호는 중복되지 않아야 합니다.`,
  LOTTO_RANGE_FROM_1_TO_45: `${ERROR} 로또 번호의 숫자 범위는 1~45입니다.`,
});

module.exports = {
  ERROR_MESSAGE,
};
