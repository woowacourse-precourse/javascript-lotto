
class Lotto {
  #numbers;

  constructor(numbers, bonusNumber) {
    this.lottoNumberMax = 45;
    this.lottoNumberMin = 1;
    this.winningNumbers = [0, 0, 0, 0, 0];
    this.validate(numbers);
    this.duplicate(numbers);
    this.numberLimit(numbers);
    this.#numbers = numbers;
    this.bonusDuplicate(bonusNumber);
    this.bonusLimit(bonusNumber);
    this.bonusNumber = bonusNumber;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  duplicate(numbers) {
    if ([...new Set(numbers)].length !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  numberLimit(numbers) {
    numbers.forEach((number) => {
      if (number > this.lottoNumberMax || number < this.lottoNumberMin) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    })
  }

  bonusDuplicate(bonuseNumber) {
    if (this.#numbers.includes(bonuseNumber)) {
      throw new Error("[ERROR] 보너스 번호는 로또 번호와 같을 수 없습니다.");
    }
  }

  bonusLimit(bonusNumber) {
    if (bonusNumber > this.lottoNumberMax || bonusNumber < this.lottoNumberMin) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  lottoCompare(lottoNumbers) {
    let sameNumber = lottoNumbers.filter(num => this.#numbers.includes(num));
    let matchNumber = sameNumber.length

    if (matchNumber === 5) {
      return this.bonusCompare(matchNumber, lottoNumbers);
    }
    return this.lottoWinning(matchNumber);
  }

  bonusCompare(matchNumber, lottoNumbers) {
    if (lottoNumbers.includes(this.bonusNumber)) {
      this.winningNumbers[4] += 1;
    } else {
      this.winningNumbers[matchNumber - 3] += 1;
    }
    return this.winningNumbers;
  }

  lottoWinning(matchNumber) {
    if (matchNumber >= 3) {
      this.winningNumbers[matchNumber - 3] += 1;
    }
    return this.winningNumbers;
  }

  lottoCompareRepeat(lottoList) {

    lottoList.forEach(lottoNumbers => {
      this.lottoCompare(lottoNumbers);
    })
  }

  getRevenue() {
    let revenue = 0; 
    let firstPlace = this.winningNumbers[3] * 20e8;
    let secondPlace = this.winningNumbers[4] * 30e6;
    let thirdPlace = this.winningNumbers[2] * 150e4;
    let fourthPlace = this.winningNumbers[1] * 50e3;
    let fifthPlace = this.winningNumbers[0] * 50e2;

    revenue = firstPlace + secondPlace + thirdPlace 
    + fourthPlace + fifthPlace;
    return revenue;
  }

  caculationRevenueRate(revenue, amount) {
    let revenueRate = 0;

    revenueRate = revenue / (amount / 100);
    return revenueRate;
  }
}

module.exports = Lotto;
