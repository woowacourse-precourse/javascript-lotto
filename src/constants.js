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
  purchaseAmout: '개를 구매했습니다.',
  totalResult: '당첨 통계\n---'
});

const PRIZE_MONEY = Object.freeze({
  FIFTH: 5_000,
  FOURTH: 50_000,
  THIRD: 1_500_000,
  SECOND: 30_000_000,
  FIRST: 2_000_000_000
});

const RESULT_MSG = Object.freeze({
  FIFTH: '3개 일치 (5,000원)',
  FOURTH: '4개 일치 (50,000원)',
  THIRD: '5개 일치 (1,500,000원)',
  SECOND: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  FIRST: '6개 일치 (2,000,000,000원)'
});

const RANKS = Object.freeze({
  FIFTH: 'FIFTH',
  FOURTH: 'FOURTH',
  THIRD: 'THIRD',
  SECOND: 'SECOND',
  FIRST: 'FIRST'
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
  LOTTO_LENGTH,
  PRIZE_MONEY,
  RESULT_MSG,
  RANKS
};
