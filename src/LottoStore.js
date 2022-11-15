const MissionUtils = require("@woowacourse/mission-utils");

class LottoStore {
  #console = MissionUtils.Console;
  
  constructor() {
    this.payment = 0;
  }

  sellLottos() {
    this.#console.readLine('구입금액을 입력해 주세요. \n', (payment) => {
      this.validatePayment(payment);
      this.#console.print(payment);
    });
    this.#console.close();
    return this.payment / 1000;
  }

  validatePayment(payment) {
    if (payment.match(/[^0-9]/g)) {
      throw new Error('[ERROR] 구입금액은 숫자만 입력 가능합니다.');
    }
    if (payment%1000 > 0) {
      throw new Error('[ERROR] 구입금액은 1000원 단위로만 입력이 가능합니다.');
    }
  }
}

module.exports = LottoStore;
