const PRIZE_MONEY = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
  NOTHING: 0,
};

const RANKING = {
  FIRST: { name: '1등', matchCount: 6, prizeMoney: PRIZE_MONEY.FIRST },
  SECOND: { name: '2등', matchCount: 5, hasBonusNumber: true, prizeMoney: PRIZE_MONEY.SECOND },
  THIRD: { name: '3등', matchCount: 5, prizeMoney: PRIZE_MONEY.THIRD },
  FOURTH: { name: '4등', matchCount: 4, prizeMoney: PRIZE_MONEY.FOURTH },
  FIFTH: { name: '5등', matchCount: 3, prizeMoney: PRIZE_MONEY.FIFTH },
  NOTHING: { name: '꽝', prizeMoney: PRIZE_MONEY.NOTHING },
};

Object.freeze(PRIZE_MONEY);
Object.freeze(RANKING);

module.exports = {
  PRIZE_MONEY,
  RANKING,
};
