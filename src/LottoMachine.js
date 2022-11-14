const MissionUtils = require("@woowacourse/mission-utils");
const { CONSOLE_MESSAGE } = require("./constants");
const Lotto = require("./Lotto");

class LottoMachine {
  #lottoList;

  getLottoList() {
    return this.#lottoList; 
  }

  inputPurchaseMoney() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.INPUT_PURCHASE_MONEY,(inputMoney)=>{
      this.purchaseLotto(inputMoney);
    })
  }

  makeLotto() {
    const lotto = new Set();
    while(lotto.size < 6){
      lotto.add(MissionUtils.Random.pickNumberInRange(1, 45));
    }
    return [...lotto];
  }

  purchaseLotto(inputMoney) {
    const purchasedLottoNumber = parseInt(inputMoney / 1000);
    this.#lottoList = Array.from(Array(purchasedLottoNumber),() => new Lotto(this.makeLotto()));
    this.showPurchasedLotto();
  }

  showPurchasedLotto() {
    MissionUtils.Console.print(`\n${this.#lottoList.length}${CONSOLE_MESSAGE.SHOW_PURCHASED_MONEY}`);
    this.#lottoList.forEach((lotto)=>{
      MissionUtils.Console.print(lotto.getNumbers());
    });
  }
}

module.exports = LottoMachine;