const { Console } = require("@woowacourse/mission-utils");
const { RANK_MESSAGE } = require('../constants/constants');

class Result {
    #reward;
    #results;
    #budget;
  
    constructor(reward, results, budget) {
      this.#reward = reward
      this.#results = results
      this.#budget = budget
      this.printLottoResult();
    }
  
    printLottoResult() {
      Console.print('당첨 통계');
      Console.print('---');
      this.#results.forEach((element, index) => {
        if(index === 0) return;
        Console.print(RANK_MESSAGE[index]+element+'개');
      });
      this.printRateOfReturn()
    }
  
    printRateOfReturn() {
      const rateOfReturn = (this.#reward/this.#budget*100).toFixed(1);
      Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
      this.finishLotto();
    }
  
    finishLotto() {
      Console.close();
    }
  }

  module.exports = Result;