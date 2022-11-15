const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].length !== 6) {
        throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
      }

      for (let j = 0; j < 6; j++) {
        if (numbers[i].slice(j+1).includes(numbers[i][j])) {
          throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다.');
        }

        if (typeof numbers[i][j] !== 'number') {
          throw new Error('[ERROR] 로또 번호는 숫자로 이루어져야 합니다.');
        }

        if (1 > numbers[i][j] || 45 < numbers[i][j]) {
          throw new Error('[ERROR] 로또 번호는 1에서 45사이의 숫자여야 합니다.');
        }
      }
    }
  }

  calculateStats(winningNumber, bonusNumber) {
    let counts = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 }

    for (let i = 0; i < this.#numbers.length; i++) {
      const number = this.#numbers[i];
      let count = 0;
      number.map((v) => { 
        if (winningNumber.includes(v)) count++; 
      });

      if (count === 5 && number.includes(bonusNumber)) count = 5.5;
      counts[count]++;
    }

    return counts;
  }

  printStats(counts) {
    let stats = `\n당첨 통계\n---`;
    stats += `\n3개 일치 (5,000원) - ${counts[3]}개`;
    stats += `\n4개 일치 (50,000원) - ${counts[4]}개`;
    stats += `\n5개 일치 (1,500,000원) - ${counts[5]}개`;
    stats += `\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${counts[5.5]}개`;
    stats += `\n6개 일치 (2,000,000,000원) - ${counts[6]}개`;

    Console.print(stats);
  }

  calculateRate(counts) {
    const winningAmounts = { 3: 5000, 4: 50000, 5: 1500000, 5.5: 30000000, 6: 2000000000 };
    const purchasingAmount = this.#numbers.length * 1000;
    let winningAmount = 0;

    for (let key in counts) {
      if (!['1', '2'].includes(key) && winningAmounts[key]) {
        winningAmount += winningAmounts[key] * counts[key];
      }
    }

    const rate = ((winningAmount / purchasingAmount) * 100).toFixed(1);
    return rate;
  }

  printRate(counts) {
    const rate = this.calculateRate(counts);

    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

module.exports = Lotto;
