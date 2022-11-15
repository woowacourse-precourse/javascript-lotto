class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    // 중복 있는지 검사
    const set = new Set(numbers);
    if(numbers.length !== set.size) {
      throw new Error("[ERROR] 로또 번호는 중복이 불가능합니다.");
    }
    console.log(`lotto size : ${numbers.length}, set size : ${set.size}`);
  }

  getNumbers(){
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
