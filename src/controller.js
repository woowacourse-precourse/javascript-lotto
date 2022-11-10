const { Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const View = require('./view');
const WinningNumber = require('./winning-number');

class Controller {
  constructor() {
    this.lottos = [];
    this.view = new View(this);
    this.winningNumber = new WinningNumber();
  }

  generateLotto(answer) {
    const quantity = answer / 1000;
    for (let count = 0; count < quantity; count += 1) {
      this.lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }

    this.view.printLottos(this.lottos);
  }

  enterWinningNumber(answer) {
    this.winningNumber.setWinningNumber(answer);
  }
}

module.exports = Controller;
