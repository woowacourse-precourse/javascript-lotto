const MissionUtils = require("@woowacourse/mission-utils");
const { ERROR_MESSAGE, LOTTO_RANGE } = require("./constant/Constant");

class LottoMachine {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.validate(Number(purchaseAmount));
    this.#purchaseAmount = purchaseAmount;
    this.lottoMachineOutput;
  }

  validate(purchaseAmount) {
    if (isNaN(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUMT.NOT_A_NUMBER);
    }
    if (purchaseAmount % 1000) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUMT.INVALID_UNIT);
    }
    if (purchaseAmount == 0) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUMT.INVALID_NUMBER);
    }

    this.printPurchaseQuantity(purchaseAmount);
  }
  printPurchaseQuantity(purchaseAmount) {
    let quantity = this.getPurchaseQuantity(purchaseAmount);

    MissionUtils.Console.print("");
    MissionUtils.Console.print(`${quantity}개를 구매했습니다.`);

    this.printMachineOutput(quantity);
  }
  getPurchaseQuantity(money) {
    return parseInt(money / LOTTO_RANGE.PRICE);
  }

  printMachineOutput(quantity) {
    let lottoMachineOutput = [];

    for (let sequence = 1; sequence <= quantity; sequence += 1) {
      let autoNumber = this.getAutoNumber();

      let stringAutoNumber = autoNumber.join(", ");
      MissionUtils.Console.print("[" + stringAutoNumber + "]");
      lottoMachineOutput.push(autoNumber);
    }
    this.lottoMachineOutput = lottoMachineOutput;
  }
  getAutoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_RANGE.START_NUMBER,
      LOTTO_RANGE.END_NUMBER,
      LOTTO_RANGE.LENGTH
    ).sort((compare1, compare2) => {
      return compare1 - compare2;
    });
  }
}

module.exports = LottoMachine;
