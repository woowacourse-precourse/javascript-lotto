const underThree = (bonus) => "underThree";
const three = (bonus) => "three";
const four = (bonus) => "four";
const five = (bonus) => (bonus ? "fivePlusBonus" : "five");
const six = (bonus) => "six";

const scoreMap = {
  0: underThree,
  1: underThree,
  2: underThree,
  3: three,
  4: four,
  5: five,
  6: six,
};

const dataForm = {
  underThree: 0,
  three: 0,
  four: 0,
  five: 0,
  fivePlusBonus: 0,
  six: 0,
};

class Stats {
  constructor({ winningNumbers, bonusNumber, purchased }) {
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.purchased = purchased;
    this.data = this.gather();
  }

  getScore(lotto) {
    const lottoNumbers = lotto.showNumbers();
    const correctCount = this.winningNumbers.filter((number) => lottoNumbers.includes(number)).length;
    const bonus = lottoNumbers.includes(this.bonusNumber);

    const score = scoreMap[correctCount](bonus);
    return score;
  }

  gather() {
    const data = Object.assign({}, dataForm);

    this.purchased.lottoArray.forEach((lotto) => {
      const score = this.getScore(lotto);
      data[score]++;
    });

    return data;
  }
}

module.exports = Stats;
