class Lotto {
  #numbers;

  constructor({ userInputMoney }) {
    this.validate(numbers);
    this.#numbers = userInputMoney; //Lotto.number를 써야한다는말!
  }

  validate({ userInputMoney }) {
    if (userInputMoney % 1000 !== 0) {
      throw new Error(`[ERROR] 돈은 1000원 단위로 입력이 가능합니다.`);
    }
    if (userInputMoney <= 0) {
      throw new Error(`[ERROR] 돈은 1000원부터 입력이 가능합니다.`);
    }
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
