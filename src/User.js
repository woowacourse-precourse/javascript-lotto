const Lotto = require('./Lotto');

class User {
  #money;
  #lottos;

  buyLottos(money) {
    this.#lottos = Array.from({ length: money / 1000 }, () => {
      this.#money = money;
      return new Lotto([1, 2, 3, 4, 5, 6]);
    });
  }
}

module.exports = User;
