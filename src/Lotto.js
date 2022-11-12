class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.duplicateCheck(numbers);
    this.numberRangeCheck(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  duplicateCheck(numbers) {
    let tempNumbers = new Set(numbers);
    tempNumbers = [...tempNumbers];

    if(tempNumbers.length < 6){
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
    }
  }

  numberRangeCheck(numbers) {
    for(let number of numbers){
      if(number < 1 || number > 45) throw new Error("[ERROR] 로또 번호는 1 이상 45 이하의 정수여야 합니다.");
    }
  }

  bonusCharacterCheck(bonus) {
    if (!Number(bonus)) {
      throw new Error("[ERROR] 보너스 점수는 정수로 입력해야 합니다.");
    }
  }

  bonusRangeCheck(bonus) {
    if(bonus < 1 || bonus > 45) {
      throw new Error("[ERROR] 보너스 점수는 1 이상 45 이하의 정수여야 합니다.");
    }
  }

  bonusDuplicateCheck(bonus) {
    console.log(this.#numbers);
    if(this.#numbers.includes(Number(bonus))) {
      throw new Error("[ERROR] 보너스 점수는 당첨 번호와 중복되면 안됩니다.");
    }
  }
}

module.exports = Lotto;
