class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    //객체 Set을 통해서 중복된 원소 제거 가능
    if (new Set(numbers).size !== numbers.length)
      throw '[ERROR] 중복된 번호가 있습니다.';
  }
}

module.exports = Lotto;
