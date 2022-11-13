const question = Object.freeze({
  purchaseAmout: '구입금액을 입력해 주세요.'
});

const errMsg = Object.freeze({
  invalidPurchaseMoney: '[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.',
  invalidLottoNumber: '[ERROR] 로또 번호는 6개여야 합니다.'
});

const PRINT_SENTENSE = Object.freeze({
  purchaseAmout: '개를 구매했습니다.'
});

const purchaseAmountRegex = /^[1-9][0-9]*0{3}$/;
const MIN_LOTTO_NUMBER = 1;
const MAX_LOTTO_NUMBER = 45;
const LOTTO_LENGTH = 6;

module.exports = {
  question,
  purchaseAmountRegex,
  errMsg,
  PRINT_SENTENSE,
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
  LOTTO_LENGTH
};
