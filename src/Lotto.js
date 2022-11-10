class Lotto {
  #numbers;

  constructor(numbers) {
    this.lottoOverlap = new Map();
    this.setLottoOverlap(numbers, this.lottoOverlap);
    this.validate(numbers, this.lottoOverlap);
    this.#numbers = numbers;
  }

  setLottoOverlap(numbers, lottoOverlap) {
    for (let i = 0; i < numbers.length; i++) {
      if (!lottoOverlap.has(numbers[i])) {
        lottoOverlap.set(numbers[i], 1);
      }
      else {
        lottoOverlap.set(numbers[i], lottoOverlap.get(numbers[1]) + 1);
      }
    }
  }

  validate(numbers, lottoOverlap) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for(let i = 0; i < numbers.length; i++) {
      if (lottoOverlap.get(numbers[i]) > 1) {
        throw new Error("[ERROR] 로또 번호는 중복되는 숫자가 없어야 합니다.")
      }
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
