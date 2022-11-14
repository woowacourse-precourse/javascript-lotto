const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = Object.freeze({
  INPUT: {
    MONEY: '구입금액을 입력해 주세요.',
    LOTTO_NUMBER: '당첨 번호를 입력해 주세요.',
    BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  },
});

const PRINT = Object.freeze({
  TICKETS_AMOUNT: (amount) => Console.print(`${amount}개를 구매했습니다.`),
  HEADER: () => Console.print('당첨 통계'),
  LINE: () => Console.print('---'),
  GET_THREE: (amount) => Console.print(`3개 일치 (5,000원) - ${amount}개`),
  GET_FOUR: (amount) => Console.print(`4개 일치 (50,000원) - ${amount}개`),
  GET_FIVE: (amount) => Console.print(`5개 일치 (1,500,000원) - ${amount}개`),
  GET_FIVE_AND_BONUS: (amount) => Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${amount}개`),
  GET_SIX: (amount) => Console.print(`6개 일치 (2,000,000,000원) - ${amount}개`),
  REVENUE_RATE: (revenueRate) => Console.print(`총 수익률은 ${revenueRate}%입니다.`),
});

const LOTTO_PRICE_DATA = Object.freeze({
  getThree: { amount: 0, price: 5000 },
  getFour: { amount: 0, price: 50000 },
  getFive: { amount: 0, price: 1500000 },
  getFiveAndBonus: { amount: 0, price: 30000000 },
  getSix: { amount: 0, price: 2000000000 },
});

const ERROR = Object.freeze({
  INVALID_TYPE: '[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.',
  INVALID_AMOUNT: '[ERROR] 복권을 한 장 이상 구매하셔야 합니다.',
  INVALID_UNIT: '[ERROR] 입력할 수 있는 최소 단위금액은 1000원입니다.',
  INVALID_DIVIDE: '[ERROR] 당첨 번호는 쉼표로 구분해야 합니다.',
  INVALID_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_RANGE: '[ERROR] 입력할 수 있는 범위는 1에서 45 사이입니다.',
  DUPLICATE: '[ERROR] 당첨 번호와 중복된 번호는 선택할 수 없습니다.',
});

const STRING = Object.freeze({
  ZERO: '0',
  COMMA: ',',
  COMMA_WITH_SPACE: ', ',
});

const NUMBER = Object.freeze({
  LOTTO_LENGTH: 6,
  PRICE_UNIT: 1000,
  MIN_LOTTO_RANGE: 1,
  MAX_LOTTO_RANGE: 45,
  DEFAULT_MONEY: 0,
  DEFAULT_TICKET_AMOUT: 0,
  DEFAULT_BONUS_NUMBER: 0,
  DEFAULT_COUNT: 0,
  COUNT_UNIT: 1,
  GET_THREE: 3,
  GET_FOUR: 4,
  GET_FIVE: 5,
  GET_SIX: 6,
  DEFAULT_REVENUE: 0,
  REVENUE_CONSTANT: 1000,
  RATE_CONSTANT: 10,
});

const BOOLEAN = {
  DEFAULT_BONUS: false,
  GET_BONUS: true,
};

const REGEX = Object.freeze({
  NUMBER: /^\d+$/g,
});

module.exports = { LOTTO_PRICE_DATA, MESSAGE, PRINT, ERROR, STRING, NUMBER, BOOLEAN, REGEX };
