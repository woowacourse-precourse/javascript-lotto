const { Console } = require('@woowacourse/mission-utils');
const Lotto1stWinning = require('../Lotto1stWinning/Lotto1stWinning');
const Lotto2ndWinning = require('../Lotto2ndWinning/Lotto2ndWinning');
const Lotto3rdWinning = require('../Lotto3rdWinning/Lotto3rdWinning');
const Lotto4thWinning = require('../Lotto4thWinning/Lotto4thWinning');
const Lotto5thWinning = require('../Lotto5thWinning/Lotto5thWinning');
const Money = require('../Money/Money');

class LottoDrawer {
  #lottoWinnings = [
    Lotto5thWinning,
    Lotto4thWinning,
    Lotto3rdWinning,
    Lotto2ndWinning,
    Lotto1stWinning,
  ];

  constructor(lottoResults) {
    this.#lottoWinnings = this.#lottoWinnings.map((LottoWinning) => new LottoWinning(lottoResults));
  }

  getResults() {
    return this.#lottoWinnings.map((lottoWinning) => lottoWinning.getResult());
  }

  getTotalWinningMoney() {
    return this.#lottoWinnings.reduce((totalMoney, lottoWinning) => {
      totalMoney.addMoney(lottoWinning.getWinningMoney());

      return totalMoney;
    }, new Money());
  }
}

module.exports = LottoDrawer;
