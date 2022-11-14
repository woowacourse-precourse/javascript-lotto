class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }
  isReapted(arr) {
    const lottoVisited = Array.from({ length: 46 }, (_) => false);

    for (let idx = 0; idx < arr.length; idx++) {
      const elem = arr[idx];
      if (lottoVisited[elem]) return true;
      lottoVisited[elem] = true;
    }
    return false;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (this.isReapted(numbers)) {
      throw new Error("[ERROR] 중복된 번호가 존재합니다.");
    }
  }
  get numbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
