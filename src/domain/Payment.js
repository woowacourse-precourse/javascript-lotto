const { Random } = require("@woowacourse/mission-utils");
const { ERROR_MESSAGE, LOTTO_RANGE } = require("../constants");
const Lotto = require("./Lotto");

class Payment {
  constructor(payMoney) {
    this.payMoney = payMoney;
    this.validateInputMoney(this.payMoney);
  }

  validateInputMoney(payMoney) {
    if (payMoney % LOTTO_RANGE.pricePerLotto !== 0 || payMoney === "0") {
      throw new Error(ERROR_MESSAGE.inputPaymentAmountValidate);
    }
  }

  getLottoNumber(lottoTickets) {
    const totalLottoNumber = [];
    for (let i = 0; i < lottoTickets; i++) {
      const randomNumber = Random.pickUniqueNumbersInRange(
        LOTTO_RANGE.minimunNumberRange,
        LOTTO_RANGE.maximunNumberRange,
        LOTTO_RANGE.lottoCount
      );
      const lotto = new Lotto(randomNumber);
      totalLottoNumber.push(lotto.sortLotto(randomNumber));
    }
    return totalLottoNumber;
  }
}
module.exports = Payment;
