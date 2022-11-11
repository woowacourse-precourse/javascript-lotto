const MissionUtils = require("@woowacourse/mission-utils");
const Notice = require("./NoticeMessage.js")
const Error = require("./ErrorMessage.js")
const Lotto = require("./Lotto.js")
class App {
  constructor(){
    this.Lotto = new Lotto()
    this.Lottobuynumber = [];
  }
  play() {
    MissionUtils.Console.readLine(Notice.INPUT_MONEY,(money) => {
      this.inputMoneyValidate(money)
      this.makeRandomnumber(money)
    });
  }
  inputMoneyValidate(money){
    if (money % 1000 != 0) {
      throw Error.UNIT_ERROR;
    }
  }
  makeRandomnumber(money){
    const LottoCount = money / 1000;
    MissionUtils.Console.print(LottoCount + Notice.BUY_LOTTO)
    for (let i = 0; i<LottoCount; i++){
      let RandomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      MissionUtils.Console.print(`[${RandomNumber.join(', ')}]`);
      this.Lotto.validate(RandomNumber);
      this.Lottobuynumber.push(`${RandomNumber}`)
    }
  }
}

const app = new App();
app.play();
module.exports = App;
