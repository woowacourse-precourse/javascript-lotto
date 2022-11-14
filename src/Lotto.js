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
  }

  // TODO: 추가 기능 구현
  winTest(){
    const setNumbers = new Set(this.#numbers);
    if (this.#numbers.length !== [...setNumbers].length){
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.")
    }
    return true;
  }
  bonusTest(bonus_number){
    if (this.#numbers.includes(bonus_number)){
      throw new Error("[ERROR] 보너스 번호는 로또 번호에 포함되면 안됩니다.")
    }
    return true;
  }
}

module.exports = Lotto;
