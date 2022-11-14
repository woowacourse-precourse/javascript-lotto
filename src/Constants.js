const FIVE = 5;
const LOTTO_PRICE = 1000;

const LOTTO_MATCHES = Object.freeze({
  0: 'out',
  1: 'out',
  2: 'out',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  fiveWithBonus: 'fiveWithBonus',
});

const LOTTO_PRIZE = Object.freeze({
  six: 2000000000,
  fiveWithBonus: 30000000,
  five: 1500000,
  four: 50000,
  three: 5000,
  out: 0,
});

const RESULT_MESSAGE = Object.freeze({
  beginning: '\n당첨 통계\n---',
  three: (number) => `3개 일치 (5,000원) - ${number}개`,
  four: (number) => `4개 일치 (50,000원) - ${number}개`,
  five: (number) => `5개 일치 (1,500,000원) - ${number}개`,
  fiveWithBonus: (number) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`,
  six: (number) => `6개 일치 (2,000,000,000원) - ${number}개`,
  purchase: (numberOfPurchase) => `\n${numberOfPurchase}개를 구매했습니다.`,
  profitRate: (profitRate) => `총 수익률은 ${profitRate}%입니다.`,
});

const INPUT_MESSAGE = Object.freeze({
  purchase: '구입금액을 입력해 주세요.\n',
  winning: '\n당첨 번호를 입력해 주세요.\n',
  bonus: '\n보너스 번호를 입력해 주세요.\n',
});

const ERROR_MESSAGE = Object.freeze({
  range: '[ERROR] 로또 번호는 1~45범위의 숫자여야 합니다.',
  length: '[ERROR] 로또 번호는 6개여야 합니다.',
  duplicate: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.',
  bonusDuplicate: '[ERROR] 보너스 번호가 당첨 번호에 중복되는 값입니다.',
  number: '[ERROR] 입력값이 숫자가 아닙니다.',
  zero: '[ERROR] 구입금액은 0원보다 커야 합니다.',
  divisible: '[ERROR] 구입금액의 단위는 1000원입니다.',
});

module.exports = {
  FIVE,
  LOTTO_PRICE,
  LOTTO_MATCHES,
  LOTTO_PRIZE,
  RESULT_MESSAGE,
  INPUT_MESSAGE,
  ERROR_MESSAGE,
};
