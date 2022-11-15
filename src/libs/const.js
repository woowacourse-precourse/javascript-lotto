const ERROR_SUBJECT = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  purchase: `${ERROR_SUBJECT} 구입 금액은 1,000원 단위의 숫자여야 합니다.`,
  range: `${ERROR_SUBJECT} 로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
  manyInputPrize: `${ERROR_SUBJECT} 당첨 번호는 6개를 입력해야 합니다.`,
  manyInputBonus: `${ERROR_SUBJECT} 보너스 번호는 1개를 입력해야 합니다.`,
  overlapPrize: `${ERROR_SUBJECT} 당첨 번호 중 중복된 번호가 있습니다.`,
  overlapBonus: `${ERROR_SUBJECT} 보너스 번호가 당첨 번호와 중복됩니다.`,
  comma: `${ERROR_SUBJECT} 쉼표를 이용해 숫자를 구분해야 합니다.`,
});

const BUY_MESSAGE = '개를 구매했습니다.';

const QUESTION_MESSAGE = Object.freeze({
  buy: '구입금액을 입력해 주세요.',
  prize: '당첨 번호를 입력해 주세요.',
  bonus: '보너스 번호를 입력해 주세요.',
});

const WIN_MESSAGE = Object.freeze({
  statistics: '당첨 통계',
  divideLine: '---',
  fifth: '3개 일치 (5,000원) -',
  fourth: '4개 일치 (50,000원) -',
  third: '5개 일치 (1,500,000원) -',
  second: '5개 일치, 보너스 볼 일치 (30,000,000원) -',
  first: '6개 일치 (2,000,000,000원) -',
  some: '개',
});

const YIELD_MESSAGE = Object.freeze({
  front: '총 수익률은',
  back: '%입니다.',
});

const WINNING_AMOUNT = Object.freeze({
  fifth: 5000,
  fourth: 50000,
  third: 1500000,
  second: 30000000,
  first: 2000000000,
});

module.exports = {
  QUESTION_MESSAGE,
  ERROR_MESSAGE,
  BUY_MESSAGE,
  WIN_MESSAGE,
  WINNING_AMOUNT,
  YIELD_MESSAGE,
};
