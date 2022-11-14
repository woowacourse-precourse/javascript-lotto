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
    const generateUserLottoNumber = new GenerateUserLottoNumber(insertMoney.getLottoCount());
    const enterPrizeNumber = new EnterPrizeNumber();
    const lotto = new Lotto(enterPrizeNumber.getEnterPrizeNumber());
    const enterBonusNumber = new EnterBonusNumber();
    const bonus = new Bonus(lotto.getNumbers(), enterBonusNumber.getEnterBonusNumber());
    const compareLotto = new CompareLotto(generateUserLottoNumber.getUserLottoNumberLists(), lotto.getNumbers(), bonus.getNumbers());
    const calcRateOfReturn = new CalcRateOfReturn(insertMoney.getInsertMoney(), compareLotto.getUserWinningStatics());
    this.printRateOfRetrun(calcRateOfReturn.getRateOfReturn());
  }
  printRateOfRetrun(RateOfReturn){
    MissionUtils.Console.print("총 수익률은 "+RateOfReturn+"%입니다.");
    MissionUtils.Console.close();
  }
}

module.exports = App;
