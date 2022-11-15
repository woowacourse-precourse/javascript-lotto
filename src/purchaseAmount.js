class purchaseAmount {
  constructor(amount) {
    this.validate(amount);
    this.amount = amount;
  }

  validate(amount) {
    console.log('numbers : ', numbers);
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
