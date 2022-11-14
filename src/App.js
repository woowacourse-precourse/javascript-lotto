const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const Bonus = require("./Bonus.js");
const InsertMoney = require("./InsertMoney.js");
const GenerateUserLottoNumber = require("./GenerateUserLottoNumber.js");
const EnterPrizeNumber = require("./EnterPrizeNumber.js");
const EnterBonusNumber = require("./EnterBonusNumber.js");
const CompareLotto = require("./CompareLotto.js");
const CalcRateOfReturn = require("./CalcRateOfReturn.js");
class App {
  play() {
    const insertMoney = new InsertMoney();
    const LOTTO_COUNT = insertMoney.getInsertMoney() / 1000;
    const generateUserLottoNumber = new GenerateUserLottoNumber(LOTTO_COUNT);
    this.printLottoCount(LOTTO_COUNT);
    this.printGenerateUserLottoNumber(generateUserLottoNumber.getUserLottoNumberLists());
    const enterPrizeNumber = new EnterPrizeNumber();
    const lotto = new Lotto(enterPrizeNumber.getEnterPrizeNumber());
    const enterBonusNumber = new EnterBonusNumber();
    const bonus = new Bonus(lotto.getNumbers(), enterBonusNumber.getEnterBonusNumber());
    const compareLotto = new CompareLotto(generateUserLottoNumber.getUserLottoNumberLists(), lotto.getNumbers(), bonus.getNumbers());
    const calcRateOfReturn = new CalcRateOfReturn(insertMoney.getInsertMoney(), compareLotto.getUserWinningStatics());
    this.printUserWinningStatics(compareLotto.getUserWinningStatics());
    this.printRateOfRetrun(calcRateOfReturn.getRateOfReturn());
  }
  printLottoCount(LottoCount){
    MissionUtils.Console.print(`${LottoCount}개를 구매했습니다.`);
  }
  printGenerateUserLottoNumber(userLottoLists){
    userLottoLists.forEach((userLottoList)=>{
      let userLotto = '[';
      userLottoList.forEach((index)=>{
        userLotto+=index;
        userLotto+=',';
        userLotto+=' ';
      });
      userLotto = userLotto.slice(0,userLotto.length-2);
      userLotto+=']';
      MissionUtils.Console.print(userLotto);
    });
  }
  printUserWinningStatics(winningStatic){
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print("3개 일치 (5,000원) - "+winningStatic[4]+"개");
    MissionUtils.Console.print("4개 일치 (50,000원) - "+winningStatic[3]+"개");
    MissionUtils.Console.print("5개 일치 (1,500,000원) - "+winningStatic[2]+"개");
    MissionUtils.Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - "+winningStatic[1]+"개");
    MissionUtils.Console.print("6개 일치 (2,000,000,000원) - "+winningStatic[0]+"개");
  }
  printRateOfRetrun(RateOfReturn){
    MissionUtils.Console.print("총 수익률은 "+RateOfReturn+"%입니다.");
    MissionUtils.Console.close();
  }
}

module.exports = App;
