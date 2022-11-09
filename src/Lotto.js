class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.overlapValidate(numbers);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  // 입력 받은 수 중복된 숫자 제거
  overlapValidate(numbers) {
    const setNum = new Set(numbers);
    if (setNum.length !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }
  }
}

module.exports = Lotto;
