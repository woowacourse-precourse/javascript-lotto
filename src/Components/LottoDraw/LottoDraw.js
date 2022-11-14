const { Console } = require('@woowacourse/mission-utils');
const Lotto1stWinning = require('../Lotto1stWinning/Lotto1stWinning');
const Lotto2ndWinning = require('../Lotto2ndWinning/Lotto2ndWinning');
const Lotto3rdWinning = require('../Lotto3rdWinning/Lotto3rdWinning');
const Lotto4thWinning = require('../Lotto4thWinning/Lotto4thWinning');
const Lotto5thWinning = require('../Lotto5thWinning/Lotto5thWinning');
const Money = require('../Money/Money');

class LottoDraw {
  #lottoResults;
  #lottoWinnings;

  constructor(lottoResults) {
    this.#lottoResults = lottoResults;
    this.#lottoWinnings = [
      Lotto5thWinning,
      Lotto4thWinning,
      Lotto3rdWinning,
      Lotto2ndWinning,
      Lotto1stWinning,
    ].map((LottoWinning) => new LottoWinning(lottoResults));
  }

  printResult() {
    this.#lottoWinnings.forEach((lottoWinning) => lottoWinning.printCount());
  }

  printEarningRate(money) {
    const totalEarning = this.#lottoWinnings.reduce((total, lottoWinning) => {
      total.addMoney(lottoWinning.getTotalWinningMoney());

      return total;
    }, new Money());
    console.log(totalEarning.getMoney());

    money.printEarningRate(totalEarning);
  }
}

module.exports = LottoDraw;
