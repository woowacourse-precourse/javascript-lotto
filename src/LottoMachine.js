const MissionUtils = require("@woowacourse/mission-utils");

class LottoMachine {
  #lottoList;

  getLottoList() {
    return this.#lottoList; 
  }

  inputPurchaseMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n",(inputMoney)=>{
      this.purchaseLotto(inputMoney);
    })
  }

  makeLotto() {
    const lotto = new Set();
    while(lotto.size < 6){
      lotto.add(MissionUtils.Random.pickNumberInRange(1, 45));
    }
    return [...lotto]
  }

  purchaseLotto(inputMoney) {
    const purchasedLottoNumber = parseInt(inputMoney / 1000);
    this.#lottoList = Array.from(Array(purchasedLottoNumber),() => this.makeLotto());
  }
}

module.exports = LottoMachine;