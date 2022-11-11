const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require('../utils/Constants');

class PrintResults {
  printLotto(amount, lottoLists) {
    Console.print(`\n${amount}${MESSAGE.LOTTO_ARRAY}`)
    
    lottoLists.forEach(lotto => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  };
};

module.exports = PrintResults;
