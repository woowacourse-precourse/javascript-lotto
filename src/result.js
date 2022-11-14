const TITLE_MESSAGE = '당첨 통계\n---';
const UNIT = { BALL: '개', MONEY: '원' };
const RESULT = [
  { count: 3, money: 5000, word: `${UNIT.BALL} 일치` },
  { count: 4, money: 50000, word: `${UNIT.BALL} 일치` },
  { count: 5, money: 1500000, word: `${UNIT.BALL} 일치` },
  { count: 5, money: 30000000, word: `${UNIT.BALL} 일치 보너스 볼 일치` },
  { count: 6, money: 2000000000, word: `${UNIT.BALL} 일치` },
];
const RATE_MESSAGE = { START: '총 수익률은 ', END: '%입니다' };

function getRate(myMoney, winMoney) {
  return ((myMoney / winMoney) * 100).toFixed(2);
}

function getOneReult(lotto, bonus, myLottos) {
  //
}

const result = {
  getTotalResult(lotto, bonus, myLottos) {},
};

module.exports = result;
