const VALIDATE_NUMBER = Object.freeze({
  start: 1,
  end: 45,
  len: 6,
  moneyUnit: 1000,
});

const ERROR_MESSAGE = Object.freeze({
  len: '[ERROR] 당첨 번호는 6개여야 합니다.',
  range: '[ERROR] 번호는 1 ~ 45 사이여야 합니다.',
  notNumber: '[ERROR] 보너스 번호는 숫자여야 합니다.',
  duplicate: '[ERROR] 당첨 번호 중에서 중복된 번호가 없어야 합니다.',
  bonusDuplicate: '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 숫자여야 합니다.',
  moneyUnit: '[ERROR] 구매 금액의 단위는 1000원 단위여야 합니다.',
});

const INPUT_QUESTION = Object.freeze({
  money: '구매금액을 입력해 주세요. \n',
  winNum: '\n당첨 번호를 입력해 주세요. \n',
  bonusNum: '\n보너스 번호를 입력해 주세요. \n',
});

const PRINT_MESSAGE = Object.freeze({
  count: (parameter) => `\n${parameter}개를 구매했습니다.`,
  statistics: '\n당첨 통계\n---',
  matchThree: (parameter) => `3개 일치 (5,000원) - ${parameter}개`,
  matchFour: (parameter) => `4개 일치 (50,000원) - ${parameter}개`,
  matchFive: (parameter) => `5개 일치 (1,500,000원) - ${parameter}개`,
  matchFiveBonus: (parameter) => `6개 일치 (30,000,000원) - ${parameter}개`,
  matchSix: (parameter) => `6개 일치 (2,000,000,000원) - ${parameter}개`,
  profit: (parameter) => `총 수익률은 ${parameter}%입니다.`,
});

const PRIZE = Object.freeze({
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
});

module.exports = {
  VALIDATE_NUMBER,
  ERROR_MESSAGE,
  INPUT_QUESTION,
  PRINT_MESSAGE,
  PRIZE,
};