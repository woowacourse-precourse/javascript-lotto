class User {
  constructor() {
    this.money = 0;
    this.lottoNumbers = [];
  }

  getMoney() {
    return this.money;
  }

  getLottoNumbers() {
    return this.lottoNumbers;
  }

  setMoney(money) {
    this.validateMoney(money);
    this.money = Number(money);
  }

  setLottoNumbers(lottoNumbers) {
    this.lottoNumbers = lottoNumbers;
  }

  validateMoney(money) {
    if (money.includes(' ')) {
      throw new Error('[ERROR] 로또 구입 금액에 공백이 포함되어 있습니다.');
    }
    if (!Number(money)) {
      throw new Error('[ERROR] 로또 구입 금액이 숫자가 아닙니다');
    }
    if (Number(money) % 1000 !== 0) {
      throw new Error('[ERROR] 로또 구입 금액이 1000원 단위가 아닙니다.');
    }
  }
}

module.exports = User;
