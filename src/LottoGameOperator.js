const { Console } = require("@woowacourse/mission-utils");
const { LOTTO } = require("./Constants/Constants");
const Lotto = require("./Lotto");

class LottoGameOperator {
  countLottoTickets(purchaseAmount) {
    return purchaseAmount / LOTTO.PRICE;
  }

  showLottoQuantity(lottoQuantity) {
    Console.print(`${lottoQuantity}개를 구매했습니다.`);
  }

  createLottoNumbers(lottoQuantity) {
    this.lottoArray = new Array({ length: lottoQuantity }, () => {
      const lottoNumbers = Random.pickUniqueNumbersInRange(
        NUMBERS.MIN_RANGE,
        NUMBERS.MAX_RANGE,
        NUMBERS.LOTTO
      );
      const sortedLottoArray = lottoNumbers.sort((a, b) => a - b);

      return new Lotto(sortedLottoArray);
    });
    return this.lottoArray;
  }
}

module.exports = LottoGameOperator;
