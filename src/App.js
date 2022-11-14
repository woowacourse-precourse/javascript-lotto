const MissionUtils = require("@woowacourse/mission-utils");
const Notice = require("./NoticeMessage.js")
const Error = require("./ErrorMessage.js")
const LottoSell = require("./LottoSell.js")
const Lotto = require("./Lotto.js")
const CaculateLotto = require("./CaclulateLotto.js")
class App {
  constructor(){
    this.Lotto = new Lotto()
    this.LottoSell = new LottoSell()
    this.CaculateLotto = new CaculateLotto()
    this.bonusnumber = 0;
    this.Winnumber = ''
  }
  play() {
    MissionUtils.Console.readLine(Notice.INPUT_MONEY,(money) => {
      this.LottoSell.Inputmoney(money)
      this.inputLottoNumber()
    });
  }
  inputLottoNumber(){
    MissionUtils.Console.readLine(Notice.INPUT_LOTTO,(numbers) => {
      this.setWinNumber(numbers)
    });
  }
  inputBonusNumber(){
    MissionUtils.Console.readLine(Notice.INPUT_BONUS,(numbers) => {
      this.Lotto.validateBonusnumber(numbers)
      this.bonusnumber = numbers
      this.CaculateLotto.checkNumber(this.LottoSell.Lottobuynumber,this.Winnumber,this.bonusnumber)
    });
  }
  setWinNumber(numbers){
    numbers = numbers.split(',')
    this.getInputMaxMin(numbers)
    this.Lotto.validate(numbers)
    this.Winnumber = numbers
    this.inputBonusNumber()
  }
  getInputMaxMin(numbers){
    for (let i in numbers){
      numbers[i] = parseInt(numbers[i])
    }
    const max = Math.max(...numbers)
    const min = Math.min(...numbers)
    this.Lotto.validateInputRange(max,min)
  }
}

const app = new App();
app.play();
module.exports = App;
