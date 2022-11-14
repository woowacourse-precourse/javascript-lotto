const { Console, Random } = require("@woowacourse/mission-utils");
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
    const lottoArray = Array.from({ length: lottoQuantity }, () => {
      const lottoNumbers = Random.pickUniqueNumbersInRange(
        LOTTO.MIN_RANGE,
        LOTTO.MAX_RANGE,
        LOTTO.NUMBER
      );
      const sortedLottoArray = lottoNumbers.sort((a, b) => a - b);
      return new Lotto(sortedLottoArray);
    });

    this.showLottoNumbers(lottoArray);
  }

  showLottoNumbers(lottoArray) {
    lottoArray.forEach((lotto) => {
      console.log("lotto", lotto);
      const lottoNumbers = lotto.getLottoNumbers().join(", ");

      Console.print(`[${lottoNumbers}]`);
    });
  }
}

module.exports = LottoGameOperator;
