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
  toString() {
    return `[${this.#numbers.join(", ")}]`;
  }
  
  NumberObject() {
    const numObject = {};
    for (let i = 1; i <= 45; i++) {
      numObject[i] = false;
    }
    return numObject;
  }
  countWinNum(winNumbers) {
    let winCount = 0;
    const numObject = this.NumberObject();
    this.#numbers.forEach((number) => {
      numObject[number] = true;
    });
    winNumbers.forEach((number) => {
      if (numObject[number]) winCount++;
    });
    return winCount;
  }
  rank(winNum, bonusNum) {
    const winCount = this.countWinNum(winNum);
    switch (winCount) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        return this.#numbers.includes(bonusNum) ? 2 : 3;
      case 6:
        return 1;
    }
  }
}

module.exports = Lotto;