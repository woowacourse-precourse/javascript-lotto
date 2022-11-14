const { print } = require('../utils/Utils');

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

    this.printRawardRates(reward, money);
  }

  printRawardRates(reward, money) {
    const rewardRates = ((reward / money) * 100).toFixed(1);

    print(`총 수익률은 ${rewardRates}%입니다.`);
  }
}

module.exports = LottoGameView;
