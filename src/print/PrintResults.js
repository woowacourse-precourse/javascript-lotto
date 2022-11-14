const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, RESULT } = require('../utils/Constants');

class PrintResults {
  printLotto(amount, lottoLists) {
    Console.print(`\n${amount}${MESSAGE.LOTTO_ARRAY}`);
    
    lottoLists.forEach(lotto => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  };

  printRanking(ranking) {
    Console.print(RESULT.RESULT_START);
    
    for (let i = 0; i < 5; i++) {
      Console.print(`${RESULT.RANKING_LIST[i]}${ranking[i]}${RESULT.RANKING_LIST_FINISH}`);
    };
  };

  printPriz(prizePercent) {
    const commaPrizePercent = prizePercent.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    Console.print(`${RESULT.BENEFIT}${commaPrizePercent}${RESULT.BENEFIT_FINISH}`);
    Console.close();
  };
};

module.exports = PrintResults;
