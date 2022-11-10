class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.bonusNumber = 0;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  splitWinningNumbers(numbers) {
    return numbers.split(",").map((num) => parseInt(num));
  }

  divideBudget(budget) {
    return Math.floor(budget / 1000);
  }

  makeRandomLottoArray(count) {
    const randomLottoArray = [];

    while (randomLottoArray.length < count) {
      randomLottoArray.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    }

    return randomLottoArray;
  }
}

module.exports = Lotto;
