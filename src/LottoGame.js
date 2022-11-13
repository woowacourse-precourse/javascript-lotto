const Lotto = require("./Lotto");
const WinningLotto = require("./WinningLotto");
const UI = require("./UI");
const { pickUniqueNumbersInRange } = require("./Utils");
const { PRIZE_MONEY, RANKING } = require("./Constant");

class LottoGame {
  constructor() {
    this.boughtAmount = 0;
    this.lottosOfUser = [];
    this.winningLotto = null;
    this.numberOfEachRanking = {};
    this.totalProfitRate = 0;
  }

  start() {
    this.#receiveMoney();
  }

  #receiveMoney() {
    UI.askHowMuchBuy((answer) => {
      this.boughtAmount = parseInt(answer, 10);

      this.setLottosOfUser(answer / 1000);

      UI.showBoughtLottos(this.lottosOfUser);

      this.#receiveWinningLottoNumbers();
    });
  }

  #receiveWinningLottoNumbers() {
    UI.askWinningLottoNumbers((answer) => {
      this.setWinningLotto(Array.from(answer.split(","), Number));

      this.#receiveBonusNumber();
    });
  }

  #receiveBonusNumber() {
    UI.askBonusNumber((answer) => {
      this.setBonusNumber(parseInt(answer, 10));

      this.calculateResult();

      UI.showResult(this.numberOfEachRanking, this.totalProfitRate);

      UI.closeIOstream();
    });
  }

  setLottosOfUser(amount) {
    for (let i = 0; i < amount; i += 1)
      this.lottosOfUser.push(new Lotto(pickUniqueNumbersInRange(1, 45, 6)));
  }

  setWinningLotto(numbers) {
    this.winningLotto = new WinningLotto(numbers);
  }

  setBonusNumber(number) {
    this.winningLotto.setBonusNumber(number);
  }

  calculateResult() {
    this.calculateNumberOfEachRanking();

    this.calculateTotalProfitRate();
  }

  calculateNumberOfEachRanking() {
    const rankingOfEachLotto = this.calculateRankingOfEachLotto();

    Object.keys(RANKING).forEach((rankingKey) => {
      this.numberOfEachRanking[rankingKey] = rankingOfEachLotto.filter(
        (ranking) => ranking === rankingKey,
      ).length;
    });
  }

  calculateRankingOfEachLotto() {
    return this.lottosOfUser.map((lotto) =>
      this.winningLotto.calculateLottoRanking(lotto.getNumbers()),
    );
  }

  calculateTotalProfitRate() {
    const totalProfit = this.calculateTotalProfit();

    this.totalProfitRate = ((totalProfit / this.boughtAmount) * 100).toFixed(1);
  }

  calculateTotalProfit() {
    let profit = 0;

    Object.keys(RANKING).forEach((rankingKey) => {
      profit += this.numberOfEachRanking[rankingKey] * PRIZE_MONEY[rankingKey];
    });

    return profit;
  }
}

module.exports = LottoGame;
