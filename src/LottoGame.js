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
    UI.askHowMuchBuy((answer) => {
      this.createLottosOfUser(answer / 1000);

      UI.showBoughtLottos(this.lottosOfUser);

      this.askWinningLottoNumbers();
    });
  }

  createLottosOfUser(amount) {
    for (let i = 0; i < amount; i += 1) {
      this.lottosOfUser.push(new Lotto(pickUniqueNumbersInRange(1, 45, 6)));
    }
  }

  askWinningLottoNumbers() {
    UI.askWinningLottoNumbers((answer) => {
      this.createWinningLotto(Array.from(answer.split(","), Number));

      this.askBonusNumber();
    });
  }

  createWinningLotto(numbers) {
    this.winningLotto = new WinningLotto(numbers);
  }

  askBonusNumber() {
    UI.askBonusNumber((answer) => {
      this.winningLotto.setBonusNumber(parseInt(answer, 10));
    });
  }
}

module.exports = LottoGame;
