class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].length !== 6) {
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
      }
    }
  }

  calculateStats(winningNumber, bonusNumber) {
    let counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 }

    for (let i = 0; i < this.#numbers.length; i++) {
      const number = this.#numbers[i];
      let count = 0;
      number.map((v) => { if (winningNumber.includes(v)) count++; });

      if (count === 5 && number.includes(bonusNumber)) count = 5.5;
      counts[count]++;
    }

    return this.printStats(counts);
  }

  printStats(counts) {
    let stats = `\n당첨 통계\n---`;
    stats += `\n3개 일치 (5,000원) - ${counts[3]}개`;
    stats += `\n4개 일치 (50,000원) - ${counts[4]}개`;
    stats += `\n5개 일치 (1,500,000원) - ${counts[5]}개`;
    stats += `\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${counts[5.5]}개`;
    stats += `\n6개 일치 (2,000,000,000원) - ${counts[6]}개`;

    return stats;
  }
}

module.exports = Lotto;
