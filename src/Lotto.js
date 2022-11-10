class Lotto {
  #numbers;

  constructor(numbers) {
    if (numbers) {
      this.validateNumbers(numbers);
      this.#numbers = numbers;
    }
  }

  checkDistinct(numbers) {
    let set = new Set(numbers);
    return numbers.length === set.size;
  }

  checkInRange(number) {
    const BEGIN = 1;
    const END = 45;

    return number >= BEGIN && number <= END;
  }

  validateNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (!this.checkDistinct(numbers)) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }
    numbers.forEach((number) => {
      if (!/^[0-9]{1,2}$/.test(number) || !this.checkInRange(Number(number))) {
        throw new Error('[ERROR] 로또 번호는 1부터 45까지의 정수여야 합니다.');
      }
    });
  }
}

module.exports = Lotto;
