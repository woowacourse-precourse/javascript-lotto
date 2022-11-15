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
  MY_TICKETS: (lottery) => {
    Console.print(`[${lottery.join(', ')}]`);
  },
});

const ERROR = Object.freeze({
  INVALID_TYPE: '[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.',
  INVALID_AMOUNT: '[ERROR] 복권을 한 장 이상 구매하셔야 합니다.',
  INVALID_UNIT: '[ERROR] 입력할 수 있는 최소 단위금액은 1000원입니다.',
  INVALID_DIVIDE: '[ERROR] 당첨 번호는 쉼표로 구분해야 합니다.',
  INVALID_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_RANGE: '[ERROR] 입력할 수 있는 범위는 1에서 45 사이입니다.',
  LOTTO_NUMBER_DUPLICATE: '[ERROR] 중복된 번호는 입력할 수 없습니다.',
  BONUS_DUPLICATE: '[ERROR] 당첨 번호와 중복된 번호는 선택할 수 없습니다.',
});

module.exports = { MESSAGE, PRINT, ERROR };
