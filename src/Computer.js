const getUserLottoListResult = (userLottoList, winLotto) => {
  return userLottoList.map(userLotto => winLotto.getLottoResult(userLotto.getNumbers()));
};
const getUserLottoRankList = UserLottoMatchList => {
  const rankList = {};
  const Ranking = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
  Ranking.forEach(rank => {
    rankList[rank] = UserLottoMatchList.filter(match => match === rank).length;
  });
  return rankList;
};
const Computer = {
  userLottoRankResult(userLottoList, winLotto) {
    const userLottoMatchList = getUserLottoListResult(userLottoList, winLotto);
    return getUserLottoRankList(userLottoMatchList);
  },
  getUserProfit(rankResult, inputMoney) {
    const profit = rankResult.First * 2000000000 + rankResult.Second * 30000000 + rankResult.Third * 1500000 + rankResult.Fourth * 50000 + rankResult.Fifth * 5000;
    return ((profit / inputMoney) * 100).toFixed(1);
  },
};

module.exports = Computer;
