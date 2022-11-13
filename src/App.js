const MissionUtils = require('@woowacourse/mission-utils');
const LottoSet = require('./LottoSet');
const Lotto = require('./Lotto');
const Bonus = require('./Bonus');
class App {
  #winning;
  #bonus;
  #lottoSet;
  #money;

  constructor() {
    this.#lottoSet = [];
  }

  getMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.#money = Number(money);
      MissionUtils.Console.print('');
      const lottoSet = new LottoSet(this.#money);
      this.#lottoSet = lottoSet.play();
      this.getWinnings();
    });
  }

  getWinnings() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (winning) => {
      this.#winning = winning.split(',').map(Number);
      new Lotto(this.#winning);
      MissionUtils.Console.print('');
      this.getBonus();
    });
  }

  getBonus() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (bonus) => {
      this.#bonus = Number(bonus);
      new Bonus(this.#winning, this.#bonus);
      MissionUtils.Console.print('');
      this.compareLotto();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
