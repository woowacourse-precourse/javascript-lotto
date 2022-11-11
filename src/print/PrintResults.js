const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require('../utils/Constants');

class PrintResults {

  printLotto(amount, lottoLists) {
    Console.print(`\n${amount}${MESSAGE.LOTTOARRAY}`)
    lottoLists.forEach(lotto => {
      Console.print(lotto)
    });
  }

}

module.exports = PrintResults;
