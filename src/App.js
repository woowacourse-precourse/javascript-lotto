const MissionUtils = require("@woowacourse/mission-utils");
const Notice = require("./NoticeMessage.js")
const Error = require("./ErrorMessage.js")
const Lotto = require("./Lotto.js")
class App {
  constructor(){
    this.Lotto = new Lotto()
    this.Lottobuynumber = [];
    this.Winnumber = ''
  }
  play() {
    MissionUtils.Console.readLine(Notice.INPUT_MONEY,(money) => {
      this.inputMoneyValidate(money)
      this.makeRandomnumber(money)
      this.inputLottoNumber()
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
      MissionUtils.Console.print(`[${RandomNumber.join(',')}]`);
      this.Lotto.validate(RandomNumber);
      this.Lottobuynumber.push(`${RandomNumber}`)
    }
  }
  inputLottoNumber(){
    MissionUtils.Console.readLine(Notice.INPUT_LOTTO,(numbers) => {
      this.setWinNumber(numbers)
    });
  }
  setWinNumber(numbers){
    numbers = numbers.split(',')
    this.getInputMaxMin(numbers)
    this.Lotto.validate(numbers)
    this.Winnumber = numbers
  }
  getInputMaxMin(numbers){
    for (let i in numbers){
      numbers[i] = parseInt(numbers[i])
    }
    const max = Math.max(...numbers)
    const min = Math.min(...numbers)
    console.log(max,min)
    this.Lotto.validateInputRange(max,min)
  }
}

const app = new App();
app.play();
module.exports = App;
