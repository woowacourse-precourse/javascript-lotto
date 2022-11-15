const { LOTTO_NUMBER_LIMIT ,ERROR_MESSAGE, WINNINGS } = require("../constants/LottoConstants");

class Lotto {
  #numbers;

  constructor(numbers, bonusNumber) {
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
      throw new Error(ERROR_MESSAGE.NUMBERS_NOT_SIX_LENGTH);
    }
  }

  // TODO: 추가 기능 구현
  duplicate(numbers) {
    if ([...new Set(numbers)].length !== 6) {
      throw new Error(ERROR_MESSAGE.NUMBERS_IN_DUPLICATE);
    }
  }

  numberLimit(numbers) {
    numbers.forEach((number) => {
      if (number > LOTTO_NUMBER_LIMIT.LOTTO_NUMBER_MAX || 
          number < LOTTO_NUMBER_LIMIT.LOTTO_NUMBER_MIN) {
        throw new Error(ERROR_MESSAGE.NUMBERS_FIXED_NUMBER);
      }
    })
  }

  bonusDuplicate(bonuseNumber) {
    if (this.#numbers.includes(bonuseNumber)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_NO_SAME);
    }
  }

  bonusLimit(bonusNumber) {
    if (bonusNumber > LOTTO_NUMBER_LIMIT.LOTTO_NUMBER_MAX ||
        bonusNumber < LOTTO_NUMBER_LIMIT.LOTTO_NUMBER_MIN) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_FIXED_NUMBER);
    }
  }

  lottoCompare(lottoNumbers) {
    const sameNumber = lottoNumbers.filter(num => this.#numbers.includes(num));
    const matchNumber = sameNumber.length

    if (matchNumber === 5) {
      return this.bonusCompare(lottoNumbers);
    }
    return this.lottoWinning(matchNumber);
  }

  bonusCompare(lottoNumbers) {
    if (lottoNumbers.includes(this.bonusNumber)) {
      this.winningNumbers[3] += 1;
    } else {
      this.winningNumbers[2] += 1;
    }
    return this.winningNumbers;
  }

  lottoWinning(matchNumber) {
    if (matchNumber === 6) {
      this.winningNumbers[4] += 1;
    } else if (matchNumber === 4) {
      this.winningNumbers[1] += 1;
    } else if (matchNumber === 3) {
      this.winningNumbers[0] +=1;
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

    for (let i = 0; i < this.winningNumbers.length; i++) {
      revenue += this.winningNumbers[i] * WINNINGS[i];
    }
    return revenue;
  }

  caculationRevenueRate(revenue, amount) {
    let revenueRate = 0;

    revenueRate = revenue / (amount / 100);
    return revenueRate;
  }
}

module.exports = Lotto;
