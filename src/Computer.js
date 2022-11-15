const MissionUtils = require('@woowacourse/mission-utils');

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
    //MissionUtils.Console.print(userLottoMatchList);
    return getUserLottoRankList(userLottoMatchList);
  },
};

module.exports = Computer;
