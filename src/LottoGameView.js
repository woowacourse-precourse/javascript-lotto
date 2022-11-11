const { Console } = require("@woowacourse/mission-utils");

class LottoGameView {
  requestInput(question, callback) {
    Console.readLine(question, callback);
  }
  printLottoQuantity(quantity) {
    Console.print(`${quantity}개를 구매했습니다.`);
  }
  printEachLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers().join(", ");

      Console.print(`[${lottoNumbers}]`);
    });
  }
}

module.exports = LottoGameView;
