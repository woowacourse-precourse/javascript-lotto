const RULE = Object.freeze({
  FIRST: Object.freeze({
    TYPE: 'FIRST',
    NUMBER_OF_SAME: 6,
    PRIZE_MONEY: 2000000000,
  }),
  SECOND: Object.freeze({
    TYPE: 'SECOND',
    NUMBER_OF_SAME: 5,
    PRIZE_MONEY: 30000000,
  }),
  THIRD: Object.freeze({
    TYPE: 'THIRD',
    NUMBER_OF_SAME: 5,
    PRIZE_MONEY: 1500000,
  }),
  FOURTH: Object.freeze({
    TYPE: 'FOURTH',
    NUMBER_OF_SAME: 4,
    PRIZE_MONEY: 50000,
  }),
  FIFTH: Object.freeze({
    TYPE: 'FIFTH',
    NUMBER_OF_SAME: 3,
    PRIZE_MONEY: 5000,
  }),
  NOPRIZE: Object.freeze({
    TYPE: 'NOPRIZE',
    PRIZE_MONEY: 0,
  }),
});

const STATISTIC_PRINT = Object.freeze({
  FIRST: `${RULE.FIRST.NUMBER_OF_SAME}개 일치 (${RULE.FIRST.PRIZE_MONEY.toLocaleString()}원)`,
  SECOND: `${RULE.SECOND.NUMBER_OF_SAME}개 일치, 보너스 볼 일치 (${RULE.SECOND.PRIZE_MONEY.toLocaleString()}원)`,
  THIRD: `${RULE.THIRD.NUMBER_OF_SAME}개 일치 (${RULE.THIRD.PRIZE_MONEY.toLocaleString()}원)`,
  FOURTH: `${RULE.FOURTH.NUMBER_OF_SAME}개 일치 (${RULE.FOURTH.PRIZE_MONEY.toLocaleString()}원)`,
  FIFTH: `${RULE.FIFTH.NUMBER_OF_SAME}개 일치 (${RULE.FIFTH.PRIZE_MONEY.toLocaleString()}원)`,
});

const NUMBER_RANGE = Object.freeze({
  START: 1,
  END: 45,
});

const DECIMAL_PLACE = 1;
const PRICE_OF_LOTTO = 1000;

module.exports = {
  RULE,
  STATISTIC_PRINT,
  NUMBER_RANGE,
  DECIMAL_PLACE,
  PRICE_OF_LOTTO,
};
