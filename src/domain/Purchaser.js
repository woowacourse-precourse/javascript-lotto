const { PRIZE } = require('../constant/prize');
const Lotto = require('../Lotto/Lotto');
const NumberGenerator = require('../utils/NumberGenerator');

class Purchaser {
  #money;

  constructor(money) {
    this.#money = money;
  }

  buyLotto(number) {
    const tokens = this.createToken(number);
    const lottos = tokens.map((token) => new Lotto(token));
    return lottos;
  }

  createToken(number) {
    const numberGenerator = new NumberGenerator();
    const tokens = [];
    let count = 0;
    while (count < number) {
      tokens.push(numberGenerator.pickRandomNumbers().sort((a, b) => a - b));
      count += 1;
    }
    return tokens;
  }

  countMatchedNumber(lottos, winnerNumber, bonusNumber) {
    let matchedCountList = Array(8).fill(0);
    lottos.forEach((lotto) => {
      const { count, bonus } = this.compare(
        lotto.getNumbers(),
        winnerNumber,
        bonusNumber
      );
      matchedCountList = [
        ...this.computeMatchingNumber(count, bonus, matchedCountList),
      ];
    });
    return matchedCountList;
  }

  compare(lottoToken, winnerNumber, bonusNumber) {
    const count = winnerNumber.reduce(
      (acc, cur) => (acc += lottoToken.includes(cur) ? 1 : 0),
      0
    );
    const bonus = lottoToken.includes(bonusNumber) ? 1 : 0;

    return { count, bonus };
  }

  computeMatchingNumber(count, bonus, list) {
    const matchedCount = [...list];
    if (count === 5 && bonus === 1) matchedCount[count + bonus] += 1;
    else matchedCount[count] += 1;
    return matchedCount;
  }

  getInputMoney() {
    return this.#money;
  }

  getRevenue(matchedCountList) {
    return this.computeRevenue(matchedCountList);
  }

  computeRevenue(matchedCountList) {
    const revenue = matchedCountList.reduce(
      (acc, cur, idx) => (acc += PRIZE[idx] * cur),
      0
    );
    return revenue;
  }

  getReturnRate(money, revenue) {
    return +((revenue / money) * 100).toFixed(1);
  }
}

module.exports = Purchaser;
