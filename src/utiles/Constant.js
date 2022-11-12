const SENTENCE = Object.freeze({
  PURCHASE: '구입 금액을 입력해 주세요.',
  PURCHASE_AMOUNT: '개를 구매했습니다.',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBERS: '보너스 번호를 입력해 주세요.',
  RESULT: '당첨 통계',
  DIVIDING_LINE: '---',
});

const LOTTO = Object.freeze({
  COUNT: 6,
  RANGE_MIN: 1,
  RANGE_MAX: 45,
});

const MONEY = Object.freeze({
  MATCH_3: '5,000원',
  MATCH_4: '50,000원',
  MATCH_5: '1,500,000원',
  MATCH_5_BONUS: '30,000,000원',
  MATCH_6: '2,000,000,000원',
});

const ERROR = Object.freeze({
  PREFIX: '[ERROR]',
  RANGE: '로또 번호는 min부터 max 사이의 숫자여야 합니다.',
  MONETARY_UNIT: ' 로또는 1,000원 단위로만 구매할 수 있습니다.',
  COUNT: `로또 번호는 ${LOTTO.COUNT}개여야 합니다.`,
  NUMBER_ONLY: '숫자만 입력해주세요.',
  COMMA: '쉼표로 구분해 입력해주세요.',
  DUPLICATION: '중복된 번호는 입력할 수 없습니다.',
});

module.exports = { SENTENCE, LOTTO, MONEY, ERROR };
