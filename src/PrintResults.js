const { Console } = require("@woowacourse/mission-utils");

class PrintResults {

  printLotto(price, lottoLists) {
    Console.print(`${price}개를 구매했습니다.`)
    lottoLists.forEach(lotto => {
      Console.print(lotto)
    });
  }

}

module.exports = PrintResults;