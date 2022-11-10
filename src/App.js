const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto.js');

const { Console,  Random } = MissionUtils;

class App {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  getAmount() {
    Console.readLine('구입금액을 입력해 주세요.\n', answer => {
      this.validateAmount(answer);
      this.generateLotto(answer / 1000);
      this.printLottos();
    });
  }

  validateAmount(amount) {
    if (!/\d/g.test(amount) || amount % 1000 !== 0) throw new Error("[ERROR] 올바른 금액을 입력하세요");
  }

  generateLotto(num) {
    this.#lottos = Array.from({ length: num }, () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
  }

  printLottos() {
    this.#lottos.forEach(lotto => Console.print(lotto.numbers));
  }

  play() {
    this.getAmount();
  }
}

const app = new App();
app.play();

module.exports = App;
