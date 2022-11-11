const { Console } = require("@woowacourse/mission-utils");
const { INPUT, LOTTO, EXCEPTION } = require("./lib/library");
const Lotto = require("./Lotto");

class LottoBuy {
  #Lottos;

  inputPurchasePrice() {
    Console.readline(INPUT.BUY, (price) => {});
  }

  validate(price) {
    if (price % LOTTO.PRICE !== 0)
      throw EXCEPTION("올바른 가격을 입력해 주세요.");
  }

  printLottos() {}
}
