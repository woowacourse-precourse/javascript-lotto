const NUMBER = Object.freeze({
  START_LOTTO: 1,
  END_LOTTO: 45,
  LENGTH_LOTTO: 6,
  PRICE_LOTTO: 1000,
  THREE_WINNING: 5000,
  FOUR_WINNING: 50000,
  FIVE_WINNING: 1500000,
  FIVE_BONUS_WINNIGN: 30000000,
  SIX_WINNING: 2000000000,
});

const MESSAGE = Object.freeze({
  MONEY_INPUT: '구입금액을 입력해 주세요.',
  ALERT_PURCHASE: '개를 구매했습니다.',
  NUMBER_INPUT: '당첨 번호를 입력해 주세요.',
  BONUS_INPUT: '보너스 번호를 입력해 주세요.',
  WINNING: '당첨 통계\n---',
  COUNT: '개',
  MATCH_THREE: '3개 일치 (5,000원) - ',
  MATCH_FOUR: '4개 일치 (50,000원) - ',
  MATCH_FIVE: '5개 일치 (1,500,000원) - ',
  MATCH_FIVE_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  MATCH_SIX: '6개 일치 (2,000,000,000원) - ',
  YIELD: '총 수익률은',
  END: '입니다.',
});

const ERROR = Object.freeze({
  LENGTH: `[ERROR] 로또 번호는 ${NUMBER.LENGTH_LOTTO}개여야 합니다.`,
  DIVIDE: `[ERROR] ${NUMBER.PRICE_LOTTO}원으로 나누어 떨어지지 않는 값을 입력하셨습니다.`,
  RANGE: '[ERROR] 잘못된 범위의 값을 입력하셨습니다.',
  NOT_UNIQUE: '[ERROR] 중복되는 값이 있습니다.',
  LOTTO_RANGE: `[ERROR] ${NUMBER.START_LOTTO}~${NUMBER.END_LOTTO}의 범위 내에서 입력 해주세요.`,
  NUMBER_OF_INPUT: '[ERROR] 입력 번호의 개수를 지켜주세요.',
  NUMBER_WAY: '[ERROR] 입력 형식을 지켜주세요.',
  BONUS_COUNT: '[ERROR] 보너스 번호는 1개만 입력해주세요.',
});

module.exports = { MESSAGE, ERROR, NUMBER };
