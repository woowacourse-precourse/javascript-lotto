class Lotto {
  #numbers;
  
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  
    validate(numbers) {
      this.isNum(numbers);
      this.isSixNumbers(numbers);
      this.isNumbersInRange(numbers);
      this.isDuplicated(numbers);
    }
  
  isNum(numbers) {
    const validNums = /[^0-9]/;
    numbers.forEach((num) => {
      if (validNums.test(num)) {
        throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
      }
    })
  }

  isSixNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  isNumbersInRange(numbers) {
    numbers.forEach((num) => {
      if (parseInt(num) < 1 || parseInt(num) > 45) {
        throw new Error('[ERROR] 로또 번호 6개는 (1 ~ 45) 범위 내의 숫자여야 합니다.');
      }
    })
  }

  isDuplicated(numbers) {
    const duplicateCheck = new Set(numbers);
    if (duplicateCheck.size !== 6) {
      throw new Error('[ERROR] 로또 번호 6개는 중복되지 않아야 합니다.');
    }
  }
  
  getLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
