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

class Stats {
  constructor({ winningNumbers, bonusNumber, purchased }) {
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.purchased = purchased;
  }

  getScore(lotto) {
    const lottoNumbers = lotto.showNumbers();
    const correctCount = this.winningNumbers.filter((number) => lottoNumbers.includes(number)).length;
    const bonus = lottoNumbers.includes(this.bonusNumber);

    const score = scoreMap[correctCount](bonus);
    return score;
  }
}

module.exports = Stats;
