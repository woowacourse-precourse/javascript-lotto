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

    this.duplicateNumber(numbers);
    this.checkRange(numbers);
  }

  checkRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  }

  duplicateNumber(numbers) {
    let notDuplicateArr = [];
    numbers.forEach((number) => {
      if (notDuplicateArr.indexOf(number) === -1) notDuplicateArr.push(number);
      else throw new Error("[ERROR] 로또 번호는 중복이 없어야 합니다.");
    });
  }

  // TODO: 추가 기능 구현
  compare(lottos, bonusNumber) {
    this.checkBonusNumber(bonusNumber);
    let totalRank = [];
    let idx = 0;
    while (lottos.length !== idx) {
      const correctCount = this.getCorrectCount(lottos[idx], this.#numbers);

      const rank = this.getRank(lottos[idx], bonusNumber, correctCount);
      totalRank.push(rank);
      idx += 1;
    }

    let totalRankCount = {};
    for (let number = 1; number <= 5; number++) {
      const reslut = totalRank.filter((rank) => rank === number).length;
      totalRankCount[number] = reslut;
    }

    const statistics = this.getStatistics(totalRankCount);
    return { totalRankCount, statistics };
  }
  checkBonusNumber(bonusNumber) {
    if (this.#numbers.indexOf(bonusNumber) !== -1)
      throw new Error(
        "[ERROR] 보너스 번호는 로또 번호와 중복이 없어야 합니다."
      );
  }
  getCorrectCount(lottoNumber, winningNumber) {
    const correctArr = winningNumber.filter(
      (number) => lottoNumber.indexOf(Number(number)) !== -1
    );

    return correctArr.length;
  }

  getRank(lottoNumber, bonusNumber, correctCount) {
    if (correctCount === 6) return 1;
    else if (lottoNumber.indexOf(bonusNumber) !== -1 && correctCount === 5)
      return 2;
    else if (correctCount === 5) return 3;
    else if (correctCount === 4) return 4;
    else if (correctCount === 3) return 5;
    return 6;
  }

  getStatistics(totalRankCount) {
    const winningsArr = {
      1: 2000000000,
      2: 30000000,
      3: 1500000,
      4: 50000,
      5: 5000,
    };

    let statistics = 0;
    for (const [rank, count] of Object.entries(totalRankCount)) {
      statistics += count * winningsArr[rank];
    }

    return statistics;
  }
}

module.exports = Lotto;
