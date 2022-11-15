const { PRIZE_MONEY, RANKING } = require("./Constant");

const calculateRankingOfEachLotto = (lottosOfUser, winningLotto) => {
  return lottosOfUser.map((lotto) =>
    winningLotto.calculateLottoRanking(lotto.getNumbers()),
  );
};

const calculateTotalProfit = (numberOfEachRanking) => {
  let profit = 0;

  Object.keys(RANKING).forEach((rankingKey) => {
    profit += numberOfEachRanking[rankingKey] * PRIZE_MONEY[rankingKey];
  });

  return profit;
};

const calculateNumberOfEachRanking = (rankingOfEachLotto) => {
  const numberOfEachRanking = {};
  Object.keys(RANKING).forEach((rankingKey) => {
    numberOfEachRanking[rankingKey] = rankingOfEachLotto.filter(
      (ranking) => ranking === rankingKey,
    ).length;
  });

  return numberOfEachRanking;
};

const Calculater = {
  numberOfEachRanking(lottosOfUser, winningLotto) {
    const rankingOfEachLotto = calculateRankingOfEachLotto(
      lottosOfUser,
      winningLotto,
    );

    return calculateNumberOfEachRanking(rankingOfEachLotto);
  },

  totalProfitRate(numberOfEachRanking, boughtAmount) {
    const totalProfit = calculateTotalProfit(numberOfEachRanking);

    return ((totalProfit / boughtAmount) * 100).toFixed(1);
  },
};

module.exports = Calculater;
