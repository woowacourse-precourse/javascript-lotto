// eachLottoPrice
// minLottoNumber
// maxLottoNumber
// lottoNumberCount

const LOTTO = Object.freeze({
  PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  LENGTH: 6,
});

const ERROR_MESSAGE = Object.freeze({
  MONEY_FORM: '[ERROR] 음이아닌 정수를 입력해야 합니다.',
  MONEY_MULTIPLE: '[ERROR] 1000의 배수를 입력해야 합니다.',
  INT_FORM: '[ERROR] 정수 앞에 0이 올 수 없습니다.',
  WINNING_NUM_FORM: '[ERROR] 숫자를 ,로 구분해 입력해야 합니다.',
  LOTTO_NUM_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_NUM_RANGE: '[ERROR] 1에서 45까지의 숫자를 입력해야 합니다.',
  WINNING_NUM_DUPLICATION: '[ERROR] 중복된 숫자를 입력할 수 없습니다.',
  INCLUDED_WINNING_NUM:
    '[ERROR] 이미 당첨 번호에 포함된 번호를 입력할 수 없습니다.',
});

const MESSAGE = Object.freeze({});

module.exports = {
  LOTTO,
  ERROR_MESSAGE,
  MESSAGE,
};
