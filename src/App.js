const MissionUtils = require("@woowacourse/mission-utils");
const PurchaseLotto = require("./PurchaseLotto");

class App {
  #inputMoney = 0;
  #purchaseLottoList = [];
  #winningNumbersList = [];
  #bonusNumber = 0;
  #matchingNumberCountObj = {};

  play() {}

  startLotto() {
    MissionUtils.Console.readLine(
      Message.REQUEST.PRICE + "\n",
      (inputMoney) => {
        const purchaseLotto = new PurchaseLotto(inputMoney);
        this.#inputMoney = inputMoney;
        this.#purchaseLottoList = purchaseLotto.returnPurchasedLottoNumbersList();
        purchaseLotto.printLottoCount();
        this.printPurchasedLottoList();
      }
    );
  }

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

  inputLottoWinningNumbers() {
    MissionUtils.Console.readLine(
      Message.REQUEST.WINNING_NUMBER+"\n",
      (winningNumbers) => {
        this.#winningNumbersList = winningNumbers.split(',');
        Helper.checkValidLength(this.#winningNumbersList);
        Helper.checkDuplicatedNumber(this.#winningNumbersList);
        Helper.checkIsRangedNumber(this.#winningNumbersList);
      }
    );
  }

}

module.exports = App;
