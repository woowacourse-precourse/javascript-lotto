class LottoDrawFactory {
  constructor({ lotto, bunus }) {
    this.lotto = lotto;
    this.bunus = bunus;
  }

  getNumber(type) {
    switch (type) {
      case 'lotto':
        return this.lotto.getNumber();
      case 'bonus':
        return this.bunus.getNumber();
      default:
        throw new Error('type을 명시해야합나디.');
    }
  }
}

module.exports = LottoDrawFactory;
