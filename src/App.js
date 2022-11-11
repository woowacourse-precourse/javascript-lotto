class App {
  constructor() {}

  validate(purchaseAmount) {
    if (/[^0-9]/.test(purchaseAmount)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }

    if (Number(purchaseAmount) % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000단위여야 합니다.');
    }
  }

  play() {}
}

module.exports = App;
