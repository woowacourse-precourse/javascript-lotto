const { PRIZE } = require('../constant/prize');
const Lotto = require('../Lotto');
const NumberGenerator = require('../NumberGenerator');

class Purchaser {
  #money;

  constructor(money) {
    this.#money = money;
  }

  buyLotto(number) {
    console.log('buyLotoo');
    const tokens = this.createToken(number);
    const lottos = tokens.map((token) => new Lotto(token));
    return lottos;
  }

  createToken(number) {
    let count = 0;
    const tokens = [];
    const numberGenerator = new NumberGenerator();
    while (count < number) {
      tokens.push(numberGenerator.pickRandomNumbers().sort((a, b) => a - b));
      count += 1;
    }
    return tokens;
  }

  // 로또 번호와 당첨 번호 및 보너스 번호를 비교하여 몇개나 일치하는지 리턴하는 함수
  compare(lottoToken, numbers, bonusNumber) {
    let count = 0;
    let bonus = 0;
    bonus = lottoToken.includes(bonusNumber) ? 1 : 0;
    numbers.forEach((number) => {
      if (lottoToken.includes(number)) count += 1;
    });

    return { count, bonus };
  }

  countMatchedNumber(lottos, winnerNumber, bonusNumber) {
    console.log('countMatchedNumber', lottos);
    let matchedCountList = [0, 0, 0, 0, 0, 0, 0, 0];
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
    console.log('getRevenu', matchedCountList);
    let revenue = 0;
    matchedCountList.forEach((num, idx) => {
      revenue += PRIZE[idx] * num;
    });
    console.log(revenue);
    return revenue;
  }

  getReturnRate(money, revenue) {
    console.log(
      'getReturnrate',
      revenue,
      money,
      +((revenue / money) * 100).toFixed(1)
    );
    return +((revenue / money) * 100).toFixed(1);
  }
}

module.exports = Purchaser;
