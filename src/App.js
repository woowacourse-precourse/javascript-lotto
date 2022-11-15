const MissionUtils = require("@woowacourse/mission-utils");

class App {
  #inputMoney = 0;
  #purchaseLottoList = [];
  #winningNumbersList = [];
  #bonusNumber = 0;
  #matchingNumberCountObj = {};

  play() {}

  printPurchasedLottoList() {
    const purchaseLottoList = this.#purchaseLottoList;
    for (let lotto of purchaseLottoList) {
      MissionUtils.Console.print(this.returnListToStringList(lotto));
    }
    MissionUtils.Console.print("\n");
  }

  returnListToStringList(list) {
    let strList = list.join(", ");
    strList.trim();
    let output = "[" + strList + "]";
    return output;
  }

}

module.exports = App;
