const MissionUtils = require("@woowacourse/mission-utils");
const PurchaseLotto = require("./PurchaseLotto");
const Lotto = require("./Lotto");
const { Helper } = require("./lib/Helper");
const { LOTTO_REWARD } = require("./static/Constants");
const { Message } = require("./static/Message");

class App {
  #inputMoney = 0;
  #purchaseLottoList = [];
  #winningNumbersList = [];
  #bonusNumber = 0;
  #matchingNumberCountObj = {};

  play() {
    this.startLotto();
  }

  startLotto() {
    MissionUtils.Console.readLine(
      Message.REQUEST.PRICE + "\n",
      (inputMoney) => {
        const purchaseLotto = new PurchaseLotto(inputMoney);
        this.#inputMoney = inputMoney;
        this.#purchaseLottoList = purchaseLotto.returnPurchasedLottoNumbersList();
        purchaseLotto.printLottoCount();
        this.printPurchasedLottoList();
        this.inputLottoWinningNumbers();
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
        Helper.checkRangedNumber(this.#winningNumbersList);
        this.inputBounsNumber();
      }
    );
  }

  inputBounsNumber() {
    MissionUtils.Console.readLine(
      Message.REQUEST.BONUS_NUMBER+"\n",
      (bonusNumber) => {
        Helper.checkDuplicatedNumber([this.#winningNumbersList, bonusNumber]);
        Helper.checkRangedNumber([bonusNumber]);
        this.#bonusNumber = bonusNumber;
        this.matchLottoGame();
      }
    );
  }

  matchLottoGame() {
    const lotto = new Lotto(this.#winningNumbersList.map((number) => +number));
    const winningPrizeList = [];
    for (let purchaseLotto of this.#purchaseLottoList) {
      winningPrizeList.push(
        lotto.returnSameNumberCount(purchaseLotto, this.#bonusNumber)
      );
    }
    this.#matchingNumberCountObj = lotto.returnMatchingNumberObj(winningPrizeList);
    this.printCalculation();
    this.printRateOfReturn();
  }

  printCalculation() {
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(`3개 일치 (${LOTTO_REWARD.FIFTH.toLocaleString()}원) - ${this.#matchingNumberCountObj[3]}개`);
    MissionUtils.Console.print(`4개 일치 (${LOTTO_REWARD.FOURTH.toLocaleString()}원) - ${this.#matchingNumberCountObj[4]}개`);
    MissionUtils.Console.print(`5개 일치 (${LOTTO_REWARD.THIRD.toLocaleString()}원) - ${this.#matchingNumberCountObj[5]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (${LOTTO_REWARD.SECOND.toLocaleString()}원) - ${this.#matchingNumberCountObj["Bonus"]}개`);
    MissionUtils.Console.print(`6개 일치 (${LOTTO_REWARD.FIRST.toLocaleString()}원) - ${this.#matchingNumberCountObj[6]}개`);
  }
  
  printRateOfReturn() {
    let hap = 0;
    hap += this.#matchingNumberCountObj[3] * LOTTO_REWARD.FIFTH;
    hap += this.#matchingNumberCountObj[4] * LOTTO_REWARD.FOURTH;
    hap += this.#matchingNumberCountObj[5] * LOTTO_REWARD.THIRD;
    hap += this.#matchingNumberCountObj["Bonus"] * LOTTO_REWARD.SECOND;
    hap += this.#matchingNumberCountObj[6] * LOTTO_REWARD.FIRST;
    const ratio = ((hap / this.#inputMoney) * 100).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${ratio}%입니다.`);
    MissionUtils.Console.close();
  }
}

module.exports = App;
