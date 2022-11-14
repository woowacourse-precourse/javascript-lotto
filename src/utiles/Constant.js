const SENTENCE = Object.freeze({
  PURCHASE: '구입 금액을 입력해 주세요.',
  PURCHASE_COUNT: '개를 구매했습니다.',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBERS: '보너스 번호를 입력해 주세요.',
  RESULT: '당첨 통계',
  DIVIDING_LINE: '---',
  MATCH_BONUS: '보너스 볼 일치',
  MATCH_COUNT: (matchCount) => `${matchCount}개 일치`,
  PROFIT_RATE: (profitRate) => `총 수익률은 ${profitRate}%입니다.`,
});

const UNIT_MONEY = 1000;

const LOTTO = Object.freeze({
  COUNT: 6,
  RANGE_MIN: 1,
  RANGE_MAX: 45,
  MATCH_START_COUNT: 3,
});

const MONEY = Object.freeze([
  '5,000원',
  '50,000원',
  '1,500,000원',
  '30,000,000원',
  '2,000,000,000원',
]);

const ERROR = Object.freeze({
  PREFIX: '[ERROR]',
  RANGE: `로또 번호는 ${LOTTO.RANGE_MIN}부터 ${LOTTO.RANGE_MAX}사이의 숫자여야 합니다.`,
  MONETARY_UNIT: `로또는 ${UNIT_MONEY}원 단위로만 구매할 수 있습니다.`,
  COUNT: `로또 번호는 ${LOTTO.COUNT}개여야 합니다.`,
  NUMBER_ONLY: '숫자만 입력해주세요.',
  COMMA: '쉼표로 구분해 입력해주세요.',
  DUPLICATION: '중복된 번호는 입력할 수 없습니다.',
  DUPLICATION_BONUS: '입력한 보너스 번호는 당첨 번호에 이미 포함되어 있습니다.',
});

module.exports = { SENTENCE, UNIT_MONEY, LOTTO, MONEY, ERROR };
