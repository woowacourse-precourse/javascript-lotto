const Lotto = require("./Lotto");
const UI = require("./UI");
const { isMultipleOf1000 } = require("./Validate");
const { ERROR_MESSAGE } = require("./Constant");
const { pickUniqueNumbersInRange } = require("./Utils");

class App {
  #lottoListOfUser;

  constructor() {
    this.#lottoListOfUser = [];
  }

  play() {
    UI.askHowMuchBuy((answer) => {
      if (isMultipleOf1000(answer)) {
        throw new Error(ERROR_MESSAGE.INPUT_ONLY_MULTIPLE_OF_1000);
      }

      this.createLottos(answer / 1000);
      UI.showBoughtLottos(this.#lottoListOfUser);

      // TODO 2. 당첨 로또 생성
    });
  }

  createLottos(amount) {
    for (let i = 0; i < amount; i += 1) {
      this.#lottoListOfUser.push(new Lotto(pickUniqueNumbersInRange(1, 45, 6)));
    }
  }
}

module.exports = App;

const app = new App();
app.play();
