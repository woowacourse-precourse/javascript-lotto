const { RANK_MESSAGE } = require('../constant');
const { print, close } = require('../utils/Utils');

class LottoGameView {
  printLottoCount(count) {
    print(`${count}개를 구매했습니다.`);
  }

  printLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      print(lotto.toString());
    });
  }

  printResult(result, money) {
    const { rank, reward } = result;

    this.printRank(rank);
    this.printRawardRates(reward, money);
    close();
  }

  printRank(rank) {
    const rankArray = Object.entries(rank);

    rankArray.forEach((list) => {
      const [rank, count] = list;

      print(RANK_MESSAGE[rank](count));
    });
  }

  printRawardRates(reward, money) {
    const rewardRates = ((reward / money) * 100).toFixed(1);

    print(`총 수익률은 ${rewardRates}%입니다.`);
  }
}

module.exports = LottoGameView;
