class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.noRepeat(numbers);
  }
  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    } else {
      console.log(numbers);
      // console.log("성공쓰!!");
    }
  }
  // TODO: 추가 기능 구현 중복 불가.
  noRepeat(numbers) {
    const validateRepeat = [...new Set(numbers)];
    if (validateRepeat.length !== 6) {
      throw new Error("[ERROR] 중복된 글자는 입력할 수 없습니다.");
    }
  }
}

module.exports = Lotto;
