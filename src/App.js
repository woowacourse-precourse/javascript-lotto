const MissionUtils = require("@woowacourse/mission-utils");
const Notice = require("./NoticeMessage.js")
const Error = require("./ErrorMessage.js")
const LottoSell = require("./LottoSell.js")
const Lotto = require("./Lotto.js")
const RaffleNumber = require("./RaffleNumber.js")
class App {
  constructor(){
    this.Lotto = new Lotto()
    this.LottoSell = new LottoSell()
    this.Lottobuynumber = [];
    this.bonusnumber = 0;
    this.Winnumber = ''
    this.correctList =[0,0,0,0,0]
    this.getMoney = [5000,50000,1500000,30000000,2000000000]
    this.ratio = 0
  }
  play() {
    MissionUtils.Console.readLine(Notice.INPUT_MONEY,(money) => {
      this.LottoSell.Inputmoney(money)
      this.RaffleNumber.inputLottoNumber()
      this.checkNumber()
    });
  }
  checkNumber(){
    for (let i=0; i<this.LottoSell.Lottobuynumber.length; i++){
      let correctNumber = this.LottoSell.Lottobuynumber[i].filter(x=> this.RaffleNumber.Winnumber.includes(x))
      let bonusNumberStatus = this.LottoSell.Lottobuynumber[i].includes(Number(this.RaffleNumber.bonusnumber))
      this.makeCorrectList(correctNumber,bonusNumberStatus)
    }
    this.calculateReturn()
    this.printResult()
  }
  makeCorrectList(list,status){
    if (list.length ==3){
      this.correctList[0] += 1;
    }
    else if (list.length == 4){
      this.correctList[1] += 1;
    }
    else if (list.length == 5 && status == true){
      this.correctList[3] += 1;
    }
    else if (list.length == 5) {
      this.correctList[2] += 1;
    }
    else if (list.length == 6){
      this.correctList[4] += 1;
    } 
  }
  printResult(){
    for (let i = 0; i<5; i++){
      MissionUtils.Console.print(Notice.RESULT_MESSAGE[i] + this.correctList[i] + "개")
    }
    MissionUtils.Console.print(`총 수익률은 ${this.ratio}%입니다.`)
    MissionUtils.Console.close()
  }
  calculateReturn(){
    let earn = 0
    const buy = 1000*(this.LottoSell.Lottobuynumber.length)
    for (let i = 0; i<5; i++){
      earn += this.correctList[i] * this.getMoney[i]
    }
    const earningratio = ((earn/buy)*100).toFixed(1)
    this.ratio = earningratio
  }
}

const app = new App();
app.play();
module.exports = App;
