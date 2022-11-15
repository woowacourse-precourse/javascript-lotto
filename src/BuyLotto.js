const { Console } = require("@woowacourse/mission-utils");
const Utils = require("./Utils");

class BuyLotto {
  constructor(numbersOfLotto) {
    this.lottoArray = [];
    this.utils = new Utils();
    this.buyLotto(numbersOfLotto);
  }

  buyLotto(numbersOfLotto) {
    Console.print(`\n${numbersOfLotto}개를 구매했습니다.`);
    this.#printLottoList(numbersOfLotto);
  }

  #printLottoList(numbersOfLotto) {
    for (let count = 0; count < numbersOfLotto; count++) {
      const oneTicketLotto = this.utils.randomSelectWithoutOverlap();
      Console.print(`[${oneTicketLotto.join(', ')}]`);
      this.lottoArray.push(oneTicketLotto);
    }
  }

  getLottoArray = () => this.lottoArray;
}

module.exports = BuyLotto;
