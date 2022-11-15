const { Console, Random } = require("@woowacourse/mission-utils");

const getRandomNum = () => {
  const randomArr = Random.pickUniqueNumbersInRange(1, 45, 6);
  getRandomNumAscendingSort(randomArr);
  return randomArr;
};

const getRandomNumAscendingSort = (randomArr) => {
  randomArr.sort(function (prev, next) {
    return prev - next;
  });
};

const lottoQuantity = (money) => {
  const lottoQuantity = parseInt(money / 1000);
  return lottoQuantity;
};

const getProfit = (equalScore) => {
  const prizeMoney = [2000000000, 30000000, 1500000, 50000, 5000];

  let sumPrizeMoney = 0;
  for (let i = 0; i < prizeMoney.length; i++) {
    sumPrizeMoney += prizeMoney[i] * equalScore[i];
  }

  return sumPrizeMoney;
};

const getProfitRate = (equalScore, userMoney) => {
  const sumPrizeMoney = getProfit(equalScore);
  return (sumPrizeMoney / userMoney) * 100;
};

module.exports = { lottoQuantity, getRandomNum, getProfitRate };
