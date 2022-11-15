const Lotto = require("./Lotto");
const WinningLotto = require("./WinningLotto");
const UI = require("./UI");
const Calculater = require("./Calculater");
const { pickUniqueNumbersInRange } = require("./Utils");

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
      this.setBoughtAmount(answer);

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

  setBoughtAmount(amount) {
    this.boughtAmount = parseInt(amount, 10);
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
    this.numberOfEachRanking = Calculater.numberOfEachRanking(
      this.lottosOfUser,
      this.winningLotto,
    );
  }

  calculateTotalProfitRate() {
    this.totalProfitRate = Calculater.totalProfitRate(
      this.numberOfEachRanking,
      this.boughtAmount,
    );
  }
}

module.exports = LottoGame;
