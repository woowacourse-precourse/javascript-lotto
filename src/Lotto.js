class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.sort();
    this.result = {
      lotto: 0,
      bonus: false,
    };
  }

  validate(numbers) {
    if (numbers.length !== 6) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    const filter = numbers.filter((num) => 1 <= num && num <= 45);
    if (numbers.length !== filter.length) throw new Error("[ERROR] 1에서 45 사이의 숫자만 입력하세요.");
    const set = new Set(numbers);
    if (numbers.length !== set.size) throw new Error("[ERROR] 로또 번호는 중복이 불가능합니다.");
  }
  sort() {
    this.#numbers = this.#numbers.sort((a, b) => a - b);
  }
  getNumbers() {
    return this.#numbers;
  }

  print() {
    return `[${this.#numbers.join(', ')}]`;
  }

  setLottoResult(winningNum) {
    for (const num of this.#numbers) {
      if (winningNum.includes(num)) {
        this.result.lotto++;
      }
    }
  }

  setBonusResult(bonusNum) {
    if (this.#numbers.includes(bonusNum)) this.result.bonus = true;
  }

  getResult() {
    return this.result;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
