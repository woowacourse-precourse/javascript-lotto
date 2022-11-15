const { print } = require('./Funcs.js');

const MESSAGES = Object.freeze({
  MONEY: '구입 금액을 입력해주세요.',
  WINNING_NUMBER: '당첨 번호를 입력해주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해주세요.',
});

const ERROR = Object.freeze({
  INVALID_INPUT_TYPE: '입력 값은 숫자여야 합니다.',
  INVALID_MONEY: '구입 금액은 1000원 이상이어야 합니다.',
  INVALID_WINNING_NUMBER: '당첨 번호는 6개의 숫자여야 합니다.',
  INVALID_LOTTO_NUMBER: '로또 번호는 1부터 45까지의 숫자여야 합니다.',
  INVALID_SHORTAGE_NUMBERS_AMOUNT: '로또 번호는 6개여야 합니다.',
  INVALID_EXCEED_NUMBERS_AMOUNT:
    '선택할 수 있는 로또 번호의 갯수를 초과헀습니다',
  INVALID_NO_DUPLICATED_NUMBERS: '로또 번호는 중복되지 않아야 합니다.',
});

const RECORD = Object.freeze({
  first: { count: 0, money: 2000000000 },
  second: { count: 0, money: 30000000 },
  third: { count: 0, money: 1500000 },
  fourth: { count: 0, money: 50000 },
  fifth: { count: 0, money: 5000 },
});

const RESULTS = Object.freeze({
  FIRST_PRICE: (count = 0) => print(`6개 일치 (2,000,000,000원)- ${count}개`),
  SECOND_PRICE: (count = 0) =>
    print(`5개 일치, 보너스 볼 일치 (30,000,000원)- ${count}개`),
  THIRD_PRICE: (count = 0) => print(`5개 일치 (1,500,000원)- ${count}개`),
  FOURTH_PRICE: (count = 0) => print(`4개 일치 (50,000원)- ${count}개`),
  FIFTH_PRICE: (count = 0) => print(`3개 일치 (5,000원)- ${count}개`),
});

module.exports = {
  MESSAGES,
  ERROR,
  RECORD,
  RESULTS,
};
