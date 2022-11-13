const Lotto = require("./Lotto");
const WinningLotto = require("./WinningLotto");
const UI = require("./UI");
const { pickUniqueNumbersInRange } = require("./Utils");

class LottoGame {
  constructor() {
    this.lottosOfUser = [];
    this.winningLotto = null;
  }

  start() {
    this.#receiveMoney();
  }

  #receiveMoney() {
    UI.askHowMuchBuy((answer) => {
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

      const lottosRanking = this.calculateLottosRanking();
    });
  }

  setLottosOfUser(amount) {
    for (let i = 0; i < amount; i += 1) {
      this.lottosOfUser.push(new Lotto(pickUniqueNumbersInRange(1, 45, 6)));
    }
  }

  setWinningLotto(numbers) {
    this.winningLotto = new WinningLotto(numbers);
  }

  setBonusNumber(number) {
    this.winningLotto.setBonusNumber(number);
  }

  calculateLottosRanking() {
    return this.lottosOfUser.map((lotto) =>
      this.winningLotto.calculateLottoRanking(lotto.getNumbers()),
    );
  }
}

module.exports = LottoGame;
