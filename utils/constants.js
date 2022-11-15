const VARIABLE_LOTTO = Object.freeze({
  regex: /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/,
  start: 1,
  end: 45,
  len: 6,

  priceUnit: 1000,
  priceRegex: /^[1-9]+0{3,}$/,
});

const LOTTO_ERROR_MESSAGE = Object.freeze({
  range: '[ERROR] 보너스 번호는 1 ~ 45사이 숫자여야 합니다.',
  len: '[ERROR] 로또 번호는 6개여야 합니다.',
  overlap: '[ERROR] 로또 번호는 중복이 되어서는 안됩니다.',
  priceLimit: '[ERROR] 금액 단위는 천 단위여야 합니다.',
});

const VARIABLE_FACTORY = Object.freeze({
  lotto: 'lotto',
  bonus: 'bonus',
  lottoStore: 'lottoStore',
  typeError: '[ERROR] 로또 타입을 명시해야 합니다.',
});

const LOTTO_AMOUNT = Object.freeze([
  5000,
  50000,
  1500000,
  30000000,
  2000000000,
]);

const LOTTO_QUESTION = Object.freeze({
  money: '구입금액을 입력해주세요.\n',
  lotto: '\n당첨 번호를 입력해 주세요.\n',
  bonus: '\n보너스 번호를 입력해 주세요.\n',
});

module.exports = {
  VARIABLE_LOTTO,
  LOTTO_ERROR_MESSAGE,
  LOTTO_AMOUNT,
  LOTTO_QUESTION,
  VARIABLE_FACTORY,
};
