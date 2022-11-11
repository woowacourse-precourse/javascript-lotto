class InputCheck {
  constructor(number) {
    this.number = number;
    this.numberOfLotto;
  }

  userInputNumber() {
    this.isNumber();
    if (this.canNotBuy()) throw '[ERROR] 로또 구입 금액이 올바르지 않습니다';
    this.numberOfLotto = this.howManyBuy();
    return this.numberOfLotto;
  }

  isNumber() {
    if (/\D/.test(this.number)) throw '[ERROR] 숫자이외의 문자가 존재합니다.';
  }

  canNotBuy() {
    return this.number % 1000;
  }

  howManyBuy() {
    return this.number / 1000;
  }
}

module.exports = InputCheck;

console.log(3333 % 1000);
