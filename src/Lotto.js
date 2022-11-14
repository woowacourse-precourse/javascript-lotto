class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.isDuplicate(numbers);
    this.isRange(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  isDuplicate(numbers) {
    const setArr = new Set(numbers);
    if (setArr.size < numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
  }

  isRange(numbers) {
    for (let number of numbers) {
      if (number < 1 || number > 45) throw new Error('[ERROR] 로또 번호는 1 이상 45 이하의 정수여야 합니다.');
    }
  }

  isBonusDuplicate(bonus) {
    if (this.#numbers.includes(Number(bonus))) {
      throw new Error('[ERROR] 보너스 점수와 당첨 번호가 같습니다.');
    }
  }
}
module.exports = Lotto;
