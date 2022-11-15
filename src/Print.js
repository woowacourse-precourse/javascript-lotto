const { Console } = require('@woowacourse/mission-utils');
const { RANK_NOTICE, PRINT } = require('./constants/constants');

class Print {
  #reward;
  #results;
  #budget;

  constructor(reward, results, budget) {
    this.#reward = reward;
    this.#results = results;
    this.#budget = budget;
    this.printLottoResult();
  }

  printLottoResult() {
    Console.print(PRINT.WINNER_HEADER);
    this.#results.forEach((element, index) => {
      if (index === 0) return;
      Console.print(RANK_NOTICE[index] + element + '개');
    });
    this.printRateOfReturn();
  }

  printRateOfReturn() {
    const rateOfReturn = ((this.#reward / this.#budget) * 100).toFixed(1);
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
    this.finishLotto();
  }

  finishLotto() {
    Console.close();
  }
}

module.exports = Print;
