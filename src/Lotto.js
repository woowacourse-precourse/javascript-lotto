class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.map((number) => Number(number));
    //console.log(this.#numbers);
  }

  validate(numbers) {
    this.isSixNumber(numbers);
    this.isUniqueNumber(numbers);
    this.isOnlyNumbers(numbers);
    this.isInRange(numbers);
  }

  isSixNumber(numbers) {
    if (numbers.length !== 6) throw new Error("[ERROR] 입력 숫자가 6개가 아님");
  }

  isUniqueNumber(numbers) {
    if (new Set(numbers).size !== 6)
      throw new Error("[ERROR] 겹치는 숫자 존재");
  }

  isOnlyNumbers(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(Number(number)))
        throw new Error("[ERROR] 숫자 아닌거 포함");
    });
  }

  isInRange(numbers) {
    const range = (number) => Number(number) >= 1 && Number(number <= 45);
    if (!numbers.every(range)) throw new Error("[ERROR] 범위 밖의 숫자");
  }
  // TODO: 추가 기능 구현
  isUniqueBonus(bonus) {
    if (this.#numbers.includes(bonus)) throw new Error("[ERROR] 보너스 겹침");
  }

  calculate(ticket, lottoList, bonus) {
    const statistic = this.calculateStatistics(lottoList, bonus);
    const rank = this.calculateRank(statistic);
  }

  calculateStatistics(lottoList, bonusNumber) {
    const totalWinner = [...this.#numbers, bonusNumber];
    return lottoList.map((list) => {
      let total = { winning: 0, bonus: 0 };
      totalWinner.forEach((x) => {
        if (list.includes(x) && x === bonusNumber) total.bonus += 1;
        else if (list.includes(x)) total.winning += 1;
      });
      return total;
    });
  }

  calculateRank(arr) {
    let rank = { 3: 0, 4: 0, 5: 0, 6: 0, alpha: 0 };
    arr.forEach((number) => {
      if (number.bonus === 1 && number.winning + number.bonus >= 3) {
        if (number.winning === 4) rank["alpha"] += 1;
        else rank[number.winning + 1] += 1;
      } else if (number.bonus === 0 && number.winning >= 3) {
        rank[number.winning] += 1;
      }
    });
    return Object.values(rank);
  }
}

module.exports = Lotto;
