const { Console } = require("@woowacourse/mission-utils");
const { LOTTO } = require("./Constants/Constants");

class LottoGameOperator {
  countLottoTickets(purchaseAmount) {
    return purchaseAmount / LOTTO.PRICE;
  }

  showLottoQuantity(lottoQuantity) {
    Console.print(`${lottoQuantity}개를 구매했습니다.`);
  }
}

module.exports = LottoGameOperator;
