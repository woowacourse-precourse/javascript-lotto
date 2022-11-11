const { Console } = require("@woowacourse/mission-utils");

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

  calculate(lottoList, bonus) {
    const statistic = this.calculateStatistics(lottoList, bonus);
    const rank = this.calculateRank(statistic);
    this.showMatchResult(rank);
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

  showMatchResult(result) {
    Console.print("당첨 통계\n---\n");
    Console.print(`3개 일치 (5,000원) - ${result[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${result[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[4]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result[3]}개`);
  }
}

module.exports = Lotto;
