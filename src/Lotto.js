class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    // 로또 번호 유효 검사
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    } else if (numbers.some(number => number <= 0 || number > 45)){
      throw new Error("[ERROR] 로또 번호는 1~45 범위 내에 존재해야 합니다.");
    } else if (numbers.length !== new Set(numbers).size){
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  setBonusNum(bonus) {
    // 보너스 번호 설정
    this.bonusValidate(bonus);
    this.#numbers.push(bonus);
  }

  bonusValidate(bonus) {
    // 보너스 번호 유효 검사
    if (bonus <=0 || bonus > 45){
      throw new Error("[ERROR] 보너스 번호는 1~45 범위 내에 존재해야 합니다.");
    } else if (this.#numbers.includes(bonus)){
      throw new Error("[ERROR] 보너스 번호는 당첨번호와 중복되지 않아야 합니다.");
    }
  }

  getNumbers() {
    // 당첨 번호 반환
    return this.#numbers.slice(0, -1);
  }

  getBonus() {
    return this.#numbers[this.#numbers.length-1];
  }
}

module.exports = Lotto;
