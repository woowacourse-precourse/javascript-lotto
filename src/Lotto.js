class Lotto {
  #numbers;

  constructor(numbersArray) {
    this.validate(numbersArray);
    this.#numbers = numbersArray;
  }

  static validate(numbersArray) {
    if (numbersArray.length !== 6) throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    if (new Set([...numbersArray]).size !== 6) throw new Error('[ERROR] 번호는 중복되지 않아야 합니다');
  }

  // TODO: 추가 기능 구현
}

const lotto = new Lotto([1, 1, 2, 3, 4, 5]);

console.log(lotto.validate());

module.exports = Lotto;
