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

module.exports = { LOTTO_PRICE_DATA, MESSAGE, PRINT };
