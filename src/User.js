const { lottoGenerator } = require('./Lotto.js');
const { print, reducer } = require('./Funcs.js');
const Lotto = require('./Lotto.js');

class User {
  constructor() {
    this.money = 0;
    this.quentity = 0;
    this.lottos = [];
  }
  purchaseLotto(payment) {
    this.money = Number(payment);
    this.quentity = parseInt(payment / 1000);
  }
  myLottos() {
    let count = this.quentity;
    while (count > 0) {
      const lotto = lottoGenerator();
      this.lottos.push(lotto);
      count--;
    }
  }

  calculateRank() {
    const myLottos = this.lottos;
    const calculator = this.lotto.calculateRank;
    reducer(
      myLottos,
      myLottos.map(item => calculator(item, this.lotto.numbers, RECORD)),
    );
  }

  calculateProfitRatio(record) {
    const table = Object.entries(record).map(item => item[1]);
    const total = table.reduce((acc, cur) => {
      return acc + cur.count * cur.money;
    }, 0);
    return ((total / this.money) * 100).toFixed(1);
  }
}

module.exports = User;
