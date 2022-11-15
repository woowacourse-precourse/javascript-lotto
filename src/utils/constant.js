const ERROR = Object.freeze({
  LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  DUPLICATE: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
  PURCHASABLE: '[ERROR] 로또는 1000원 이상부터 구매 가능합니다',
  DIVISIBLE: '[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.',
});

const CONDITION = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  LOTTO_LENGTH: 6,
  LOTTO_PRICE: 1000,
  PERCENTAGE: 100,
});

const MESSAGE = Object.freeze({
  INPUT_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  INPUT_LOTTO_NUMBER: '\n당첨 번호를 입력해 주세요.',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.',

  OUTPUT_PURCHASE_AMOUNT(lottoAmount) {
    return `\n${lottoAmount}개를 구매했습니다.`;
  },
});

const RESULT = Object.freeze({
  HEADER: '\n당첨 통계',
  BOUNDARY_LINE: '---',

  STATISTIC(rank, totalRank) {
    const match = [
      '',
      `6개 일치 (2,000,000,000원) - ${totalRank}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${totalRank}개`,
      `5개 일치 (1,500,000원) - ${totalRank}개`,
      `4개 일치 (50,000원) - ${totalRank}개`,
      `3개 일치 (5,000원) - ${totalRank}개`,
    ];
    return match[rank];
  },

  RATE_OF_RETURN(rateOfReturn) {
    return `총 수익률은 ${rateOfReturn}%입니다.`;
  },
});

const PRIZE = [0, 2000000000, 30000000, 1500000, 50000, 5000];

const RANK = Object.freeze({
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
  SIXTH: 6,
});

module.exports = { ERROR, CONDITION, MESSAGE, RESULT, PRIZE, RANK };
