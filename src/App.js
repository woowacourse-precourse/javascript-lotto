const MissionUtils = require("@woowacourse/mission-utils");

class LottoMachine {
  #lottoList;

  inputPurchaseMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n",(inputMoney)=>{
    })
  }

  makeLotto() {
    const lotto = new Set();
    while(lotto.size < 6){
      lotto.add(MissionUtils.Random.pickNumberInRange(1, 45));
    }
    return [...lotto]
  }
}

class App {
  constructor() {
    this.lottomanage = new LottoManage();
  }

  play() {
    this.lottomanage.inputPurchaseMoney();
  }
}

module.exports = App;
