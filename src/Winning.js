class Winning {
  #lottoNumbers;
  #userNumbers;
  #bonusNumber;
  constructor(lottoNumbers, userNumber, bonusNumber) {
    this.rank = {
      '1st': 0,
      '2nd': 0,
      '3rd': 0,
      '4th': 0,
      '5th': 0,
    }
    this.reward = {
      '1st': 2000000000,
      '2nd': 30000000,
      '3rd': 1500000,
      '4th': 50000,
      '5th': 5000,
    }
    this.result = this.aroundAllLotto(lottoNumbers, userNumber);
    this.#lottoNumbers = lottoNumbers;
    this.#userNumbers = userNumber;
    this.#bonusNumber = bonusNumber;
  }

  aroundAllLotto(lottoNumbers, userNumber, bonusNumber) {
    lottoNumbers.forEach((lotto) => {
      this.setWinningStats(lotto, userNumber, bonusNumber);
    });
    return this.rank;
  }

  setWinningStats(lotto, userNumber, bonusNumber) {
    let count = lotto.filter(number => userNumber.includes(number)).length;
    if (count === 3) {
      this.rank['5th'] += 1;
    } else if (count === 4) {
      this.rank['4th'] += 1;
    } else if (count === 5) {
      this.rank['3rd'] += 1;
    } else if (count === 5 && lotto.includes(bonusNumber)) {
      this.rank['2nd'] += 1;
    } else if (count === 6) {
      this.rank['1st'] += 1;
    }
    return this.rank;
  }

  getTotalReward(winning) {
    return winning['1st'] * this.reward['1st'] +
      winning['2nd'] * this.reward['2nd'] +
      winning['3rd'] * this.reward['3rd'] +
      winning['4th'] * this.reward['4th'] +
      winning['5th'] * this.reward['5th'];
  }
}

module.exports = Winning;