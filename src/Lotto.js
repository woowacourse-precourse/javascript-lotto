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
    if(this.duplicationValidate(numbers)){
      throw new Error("[ERROR] 당첨 번호에 중복이 있습니다.");
    }
    numbers.map((number) => {
      this.rangeValidate(number);
    });
  }

  bonusValidate(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호가 당첨번호와 동일합니다.");
    }
    this.rangeValidate(bonusNumber);
  }

  getNumbers() {
    return this.#numbers;
  }

  rangeValidate(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  duplicationValidate(numbers){
    return numbers.some((number) => {
      return numbers.indexOf(number) !== numbers.lastIndexOf(number);
    })
  }
}

module.exports = Lotto;
