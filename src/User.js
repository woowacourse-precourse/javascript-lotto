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
    while (this.quentity--) {
      this.lottos.push(Lotto.lottoGenerator());
    }
  }
}

module.exports = User;
