const User = require('./User');
const Lotto = require('./Lotto');
const Raffle = require('./Raffle');
class App {
  play() {
    const user = new User();
    const raffle = new Raffle(user.setMoney());
    const lotto = new Lotto(user.setNumbers(), user.setBonus());

    raffle.compareLottoes(lotto.getNumbers());
    raffle.printResult();
  }
}

module.exports = App;
