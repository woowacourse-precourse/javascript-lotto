const LOTTO_ERROR_MESSAGE = Object.freeze({
  LENGTH: '로또 번호는 6개여야 합니다.',
  DUPLICATED: '로또 번호에 중복되는 숫자가 없어야 합니다.',
  RANGE: '로또 번호의 숫자 범위는 1~45까지 입니다.',
  DEFAULT: '로또 번호의 유효성을 검사하는데 예기치 못한 에러가 발생했습니다,',
});

const BONUS_ERROR_MESSAGE = Object.freeze({
  DUPLICATED: '보너스 번호는 로또 번호와 중복되는 숫자가 없어야 합니다.',
  RANGE: '로또 번호의 숫자 범위는 1~45까지 입니다.',
  DEFAULT: '보너스 번호의 유효성을 검사하는데 예기치 못한 에러가 발생했습니다,',
});

module.exports = {
  LOTTO_ERROR_MESSAGE,
  BONUS_ERROR_MESSAGE,
};
