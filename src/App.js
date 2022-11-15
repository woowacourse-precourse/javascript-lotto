const MissionUtils = require('@woowacourse/mission-utils');
const LottoSet = require('./LottoSet');
const Lotto = require('./Lotto');
const CompareLotto = require('./CompareLotto');
const Bonus = require('./Bonus');
class App {
  #winningSet;
  #bonus;
  #lottoSet;
  #money;

  constructor() {
    this.#lottoSet = [];
  }

  getPurchaseAmount() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.#money = Number(money);
      MissionUtils.Console.print('');
      this.getLottoSet(money);
    });
  }

  getLottoSet(money) {
    const lottoSet = new LottoSet(money);
    this.#lottoSet = lottoSet.play();
    this.getWinningSet();
  }

  getWinningSet() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (winning) => {
      this.#winningSet = winning.split(',').map(Number);
      new Lotto(this.#winningSet);

      MissionUtils.Console.print('');
      this.getBonus(winning);
    });
  }

  getBonus(winning) {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (bonus) => {
      this.#bonus = Number(bonus);
      new Bonus(winning, bonus);

      MissionUtils.Console.print('');
      this.compareLotto();
    });
  }

  compareLotto() {
    const compareLotto = new CompareLotto();
    compareLotto.play(this.#lottoSet, this.#money, this.#winningSet, this.#bonus);
  }

  play() {
    this.getPurchaseAmount();
  }
}

const app = new App();
app.play();

module.exports = App;
