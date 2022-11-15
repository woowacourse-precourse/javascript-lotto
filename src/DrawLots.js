const MissionUtils = require("@woowacourse/mission-utils");

class DrawLots {
  #numbers

  constructor() {
    this.prize;
    this.result = {
        three: 0,
        four: 0,
        five: 0,
        fiveBonus: 0,
        six: 0,
      };
    this.profit;
  }

  compareValue(userNumbers) {
   let sameNumberCount = 0;
    
   userNumbers.map((userNumber) => {
    if (this.#numbers.includes(userNumber)) sameNumberCount += 1;
     });

    return sameNumberCount;
  }

  decidePrize(userNumbers, userBonusNumber) {
    const prizeList = ['three', 'four', 'five', 'fiveBonus', 'six'];

    if (this.compareNumber(userNumbers) === 3) this.prize = prizeList[0];
    if (this.compareNumber(userNumbers) === 4) this.prize = prizeList[1];
    if (this.compareNumber(userNumbers) === 5) {
      this.makeBonusNumber();
      if (userBonusNumber !== this.lottoBonusNumber) this.prize = prizeList[2];
      if (userBonusNumber === this.lottoBonusNumber) this.prize = prizeList[3];
    }
    if (this.compareNumber(userNumbers) === 6) this.prize = prizeList[4];

    return this.prize;
  }

  calculateProfit() {
    const [threeProfit, fourProfit, fiveProfit, fiveBonusProfit, sixProfit] = [
      5, 50, 1500, 30000, 2000000,
    ];

    this.countPrize();
    this.profit =
      threeProfit * this.result.three +
      fourProfit * this.result.four +
      fiveProfit * this.result.five +
      fiveBonusProfit * this.result.fiveBonus +
      sixProfit * this.result.six;
  }

  countPrize() {
    this.lottoList.forEach((lotto) => {
      const lottoPrize = lotto.decidePrize(
        this.winningLottoNumbers,
        this.winningLottoBonusNumber
      );
      this.result[lottoPrize] += 1;
    });
  }
}


module.exports = DrawLots;