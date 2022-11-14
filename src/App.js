const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const {
  amountValidate,
  winNumberValidate,
  bonusNumberValidate,
} = require('./Validates');

class App {
  #amount;

  #lottos;

  #winNumbers;

  #bonusNumber;

  #revenue;

  constructor() {
    this.#amount = 0;
    this.#lottos = [];
    this.#winNumbers = [];
    this.#bonusNumber = 0;
    this.#revenue = 0;
  }

  play() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (amount) => {
      this.setAmount(amount);
      this.issueLottos();
      this.inputWinNumbers();
    });
  }

  issueLottos() {
    const count = this.getAmount() / 1000;
    const lottos = [];
    for (let i = 0; i < count; i += 1) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
    }
    this.setLottos(lottos);
  }

  inputWinNumbers() {
    MissionUtils.Console.readLine(
      '\n당첨 번호를 입력해주세요.\n',
      (numbers) => {
        this.setWinNumbers(numbers.split(','));
        this.inputBonusNumbers();
      }
    );
  }

  inputBonusNumbers() {
    MissionUtils.Console.readLine(
      '\n보너스 번호를 입력해주세요.\n',
      (number) => {
        this.setBonusNumber(number);
      }
    );
  }

  setAmount(amount) {
    amountValidate(amount);
    this.#amount = amount;
  }

  getAmount() {
    return this.#amount;
  }

  setLottos(lottos) {
    this.#lottos = lottos;
  }

  getLottos() {
    return this.#lottos;
  }

  setWinNumbers(numbers) {
    winNumberValidate(numbers);
    this.#winNumbers = numbers;
  }

  getWinNumbers() {
    return this.#winNumbers;
  }

  setBonusNumber(number) {
    bonusNumberValidate(number, this.getWinNumbers());
    this.#bonusNumber = number;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setRevenue(revenue) {
    this.#revenue = revenue;
  }

  getRevenue() {
    return this.#revenue;
  }

  getRevenueRate() {
    const revenue = this.getRevenue();
    const amount = this.getAmount();
    if (revenue === 0) return (0).toFixed(1);

    const revenueRate = (revenue / amount) * 100;
    return revenueRate.toFixed(1);
  }
}

const app = new App();
app.play();

module.exports = App;
