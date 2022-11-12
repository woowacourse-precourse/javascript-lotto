const Lotto = require("./Lotto");
const WinningLotto = require("./WinningLotto");
const UI = require("./UI");
const { pickUniqueNumbersInRange } = require("./Utils");

class App {
  #lottoListOfUser;

  #winningLotto;

  constructor() {
    this.#lottoListOfUser = [];
  }

  play() {
    UI.askHowMuchBuy((answer) => {
      this.createLottos(answer / 1000);

      UI.showBoughtLottos(this.#lottoListOfUser);

      this.askWinningLottoNumbers();
    });
  }

  createLottos(amount) {
    for (let i = 0; i < amount; i += 1) {
      this.#lottoListOfUser.push(new Lotto(pickUniqueNumbersInRange(1, 45, 6)));
    }
  }

  askWinningLottoNumbers() {
    UI.askWinningLottoNumbers((answer) => {
      this.createWinningLotto(Array.from(answer.split(","), Number));

      this.askBonusNumber();
    });
  }

  createWinningLotto(numbers) {
    this.#winningLotto = new WinningLotto(numbers);
  }

  askBonusNumber() {
    UI.askBonusNumber((answer) => {
      this.#winningLotto.setBonusNumber(parseInt(answer, 10));
    });
  }
}

module.exports = App;

const app = new App();
app.play();
