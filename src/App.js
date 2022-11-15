const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const Consolee = MissionUtils.Console;

class App {
  constructor(){
    this.purchase = 0;
    this.ranking = {};
    this.random = [];
    this.lottoNumber = [];
    this.winningNumber = [];
    this.bonusNumber = 0;
  }
  
  play() {
    this.inputPurchaseMoney();
  }
  inputPurchaseMoney(){
    Consolee.readLine("구입금액을 입력해 주세요.\n", (money) => {
      const purchase = this.validatePurchase(money);
      this.purchase = purchase; 
    });
    this.setWinningLottoNumber();
  }
  validatePurchase(money){
    money = parseInt(money);
    if(money % 1000 !== 0){
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해주세요.");
    }
    return money;
  }
  setWinningLottoNumber(){
    Consolee.readLine("당첨 번호를 입력해 주세요.\n", (winning) => {
      this.winningNumber = this.validateWinningNumber(winning);
    });
    this.setBonusLottoNumber();
  }
  validateWinningNumber(win){
    const winNum = win.split(",");
    if(winNum.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const winNumSet = new Set(winNum);
    if(winNumSet.size != 6){
      throw new Error("[ERROR] 중복된 숫자가 포함되어 있습니다.");
    }
    //1-45 사이의 문자인지 보기
    if(!(parseInt(winNum) >= 1 && parseInt(winNum) <= 45)){
      throw new Error("[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.");
    }

    return winNum.map((num) => parseInt(num));
  }
  setBonusLottoNumber(){
    Consolee.readLine("보너스 번호를 입력해 주세요.\n", (bonus) => {
      this.bonusNumber = this.validateBonusNumber(bonus);
    });
    this.setUserRandomLottoNumber();
  }
  validateBonusNumber(num){
    if(!(num >= 1 && num <= 45)){
      throw new Error("[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.");
    }
    if(Array.from(this.winningNumber).includes(num)){
      throw new Error("[ERROR] 중복된 숫자가 포함되어 있습니다.");
    }
    return num;
  }
  setUserRandomLottoNumber(){
    let num = this.purchase / 1000;
    this.setRandomNumber(num);
    Consolee.print(num + "개를 구매했습니다.");
    this.printUserLottoNumber();
  }
  setRandomNumber(num){
    while (num > 0) {
      num -= 1;
      this.random = this.computerRandom();
      this.lottoNumber.push(new Lotto(this.random));
    }
  }
  computerRandom(){
    const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return number;
  }
  printUserLottoNumber(){
    this.lottoNumber.forEach((lotto) => {
      Consolee.print(lotto.printRandom());
    });
    this.calculateLotto();
  }
  calculateLotto(){
    let i = 0;
    while(i < 6){
      this.ranking[i] = 0;
      i++;
    }
    const arr = this.lottoNumber.map((lotto) =>
      lotto.calculate(this.winningNumber, this.bonusNumber)
    );
    arr.forEach((num) => {
      this.ranking[num]++;
    });
    this.resultLotto();
  }
  resultLotto(){
    Consolee.print("당첨 통계\n---");
    Consolee.print(`3개 일치 (5,000원) - ${this.ranking[1]}개`);
    Consolee.print(`4개 일치 (50,000원) - ${this.ranking[2]}개`);
    Consolee.print(`5개 일치 (1,500,000원) - ${this.ranking[3]}개`);
    Consolee.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.ranking[5]}개`);
    Consolee.print(`6개 일치 (2,000,000,000원) - ${this.ranking[4]}개`);
    Consolee.print(`총 수익률은 ${this.resultRateOfReturn()}%입니다.`);

    Consolee.close();
  }
  resultRateOfReturn(){
    let sum = 0;
    sum += this.ranking[1]*5000;
    sum += this.ranking[2]*50000;
    sum += this.ranking[3]*1500000;
    sum += this.ranking[4]*2000000000;
    sum += this.ranking[5]*30000000;

    let rate = (sum / this.purchase) * 100;
    return rate.toFixed(1);
  }

}

module.exports = App;

// const app = new App();
// app.play();