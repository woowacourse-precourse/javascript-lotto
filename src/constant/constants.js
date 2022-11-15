const CONSTANT = {
  MSG: {
    PURCHASE: '구입금액을 입력해 주세요.',
    WINNER: '당첨 번호를 입력해 주세요.',
    PURCHASED: amount => `${amount / CONSTANT.UNIT}개를 구매했습니다.}`,
    BONUS: '보너스 번호를 입력해 주세요.',
    RESULT: (MATCH, ISBONUS, PRIZE, getNumOfWinner) =>
      `${MATCH}개 일치${ISBONUS ? ', 보너스 볼 일치' : ''} (${PRIZE}원) - ${getNumOfWinner}개`,
    TOTAL_RATE: rate => `총 수익률은 ${rate}%입니다.`,
  },

  ERROR_MSG: {
    WRONG_AMOUNT: '[ERROR] 올바른 금액을 입력하세요',
    NAN: '[ERROR] 로또 번호는 숫자여야 합니다.',
    WRONG_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
    DUPLICATE: '[ERROR] 로또 번호는 중복이 없어야 합니다.',
    OUT_OF_RANGE: '[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.',
    DUPLICATE_BONUS: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  },

  CHECK: {
    IS_NUMBER: amount => /^\d+$/.test(amount),
    IS_UNIT: amount => +amount % 1000 !== 0,
    IS_LENGTH: numbers => numbers.length !== 6,
    IS_DUPLICATE: numbers => numbers.length !== new Set(numbers).size,
    IS_IN_RANGE: numbers => numbers.every(num => num > 0 && num < 46),
    IS_IN_WINNER: (number, winner) => winner.includes(number),
    IS_BONUS: (lotto, bonus) =>
      lotto.count === CONSTANT.SECOND_RANK && lotto.numbers.includes(bonus),
    IS_WINNER: (ISBONUS, MATCH, lotto) =>
      ISBONUS ? lotto.count === MATCH && lotto.isBonus : !lotto.isBonus && lotto.count === MATCH,
  },

  PRIZE_DETAILS: [
    { MATCH: 3, PRIZE: '5,000' },
    { MATCH: 4, PRIZE: '50,000' },
    { MATCH: 5, PRIZE: '1,500,000' },
    { MATCH: 5, PRIZE: '30,000,000', ISBONUS: true },
    { MATCH: 6, PRIZE: '2,000,000,000' },
  ],

  SECOND_RANK: 5,

  UNIT: 1000,

  RATE: (prize, amount) => ((prize / amount) * 100).toFixed(1),
};

const deepFreeze = obj => {
  [...Object.getOwnPropertyNames(obj)].forEach(name => {
    const value = obj[name];
    if (value && typeof value === 'object') deepFreeze(value);
  });
  return Object.freeze(obj);
}

deepFreeze(CONSTANT);

module.exports = CONSTANT;
