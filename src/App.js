const MissionUtils = require("@woowacourse/mission-utils");
const Notice = require("./NoticeMessage.js")
const Error = require("./ErrorMessage.js")
const Lotto = require("./Lotto.js")
class App {
  constructor(){
    this.Lotto = new Lotto()
    this.Lottobuynumber = [];
    this.Winnumber = ''
    this.correctList =[0,0,0,0,0]
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
      this.Lottobuynumber.push(RandomNumber)
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
    this.checkNumber()
  }
  getInputMaxMin(numbers){
    for (let i in numbers){
      numbers[i] = parseInt(numbers[i])
    }
    const max = Math.max(...numbers)
    const min = Math.min(...numbers)
    this.Lotto.validateInputRange(max,min)
  }
  checkNumber(){
    console.log(this.Lottobuynumber)
    for (let i=0; i<this.Lottobuynumber.length; i++){
      let correctNumber = this.Lottobuynumber[i].filter(x=> this.Winnumber.includes(x))
      this.makeCorrectList(correctNumber)
    }
  }
  makeCorrectList(list){
    if (list.length ==3){
      this.correctList[0] += 1;
    }
    else if (list.length == 4){
      this.correctList[1] += 1;
    }
    else if (list.length == 5){
      this.correctList[2] += 1;
    }
    else if (list.length == 6){
      this.correctList[4] += 1;
    } 

  }
}

const app = new App();
app.play();
module.exports = App;
