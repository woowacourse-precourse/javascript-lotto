const MissionUtils = require("@woowacourse/mission-utils");
const {
  ERROR_MESSAGE,
  OUTPUT_PHRASE,
  LOTTO_RANGE,
} = require("./constant/Constant");

class LottoMachine {
  constructor(purchaseAmount) {
    this.purchaseAmount = purchaseAmount;
    this.lottoMachineOutput;
    this.validate(purchaseAmount);
  }

  validate(purchaseAmount) {
    if (isNaN(purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUMT.NOT_A_NUMBER);
    }
    if (purchaseAmount % 1000) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUMT.INVALID_UNIT);
    }
    if (purchaseAmount < 1000) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUMT.INVALID_NUMBER);
    }

    this.printPurchaseQuantity();
    this.printMachineOutput();
  }
  printPurchaseQuantity() {
    MissionUtils.Console.print("");
    MissionUtils.Console.print(
      this.getPurchaseQuantity(this.purchaseAmount) +
        OUTPUT_PHRASE.PURCHASE_QUANTITY
    );
  }
  getPurchaseQuantity() {
    return parseInt(this.purchaseAmount / 1000);
  }

  printMachineOutput() {
    let lottoMachineOutput = [];

    for (
      let sequence = 1;
      sequence <= this.getPurchaseQuantity(this.purchaseAmount);
      sequence++
    ) {
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
