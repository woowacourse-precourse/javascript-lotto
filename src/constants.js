const QUESTION = Object.freeze({
  purchaseAmout: '구입금액을 입력해 주세요.',
  winningNumbers: '당첨 번호를 입력해 주세요.',
  bonusNumber: '보너스 번호를 입력해 주세요.'
});

const ERR_MSG = Object.freeze({
  invalidPurchaseMoney: '[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.',
  invalidLottoNumberLength: '[ERROR] 로또 번호는 6개여야 합니다.',
  invalidLottoNumberRange:
    '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  duplicatedNumber: '[ERROR] 로또 번호는 중복될 수 없습니다.'
});

const PRINT_SENTENSE = Object.freeze({
  purchaseAmout: '개를 구매했습니다.'
});

const PURCHASE_AMOUT_REGEX = /^[1-9][0-9]*0{3}$/;
const MIN_LOTTO_NUMBER = 1;
const MAX_LOTTO_NUMBER = 45;
const LOTTO_LENGTH = 6;

module.exports = {
  QUESTION,
  PURCHASE_AMOUT_REGEX,
  ERR_MSG,
  PRINT_SENTENSE,
  MIN_LOTTO_NUMBER,
  MAX_LOTTO_NUMBER,
  LOTTO_LENGTH
};
