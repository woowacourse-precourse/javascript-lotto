const CheckError = require("./CheckError.js");
class Lotto {
  // Lotto 번호 유효성 검사하는 클래스.
  // 이런식으로 로또 한 줄을 넣는다.
  // new Lotto([1, 2, 3, 4, 5, 6, 7]);
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    CheckError.checkLottoNumbers(numbers);
  }

  getLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
