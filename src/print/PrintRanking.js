const { Console } = require("@woowacourse/mission-utils");
const { RESULT } = require('../utils/Constants');

class PrintRanking {
  showRanking(ranking) {
    Console.print(RESULT.RESULT_START);
    
    for (let i = 0; i < 5; i++) {
      Console.print(`${RESULT.RANKING_LIST[i]}${ranking[i]}${RESULT.RANKING_LIST_FINISH}`);
    };
  };

  showPriz(prizePercent) {
    const commaPrizePercent = prizePercent.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    Console.print(`${RESULT.BENEFIT}${commaPrizePercent}${RESULT.BENEFIT_FINISH}`);
    Console.close();
  };

};

module.exports = PrintRanking;
