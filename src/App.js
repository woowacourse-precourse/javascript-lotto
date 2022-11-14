const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor(){
    this.purchase = 0;
    this.lottoNumber = [];
    this.winningNumber = [];
    this.bonusNumber = 0;
  }

  play() {
    this.inputPurchaseMoney();
  }
  inputPurchaseMoney(){
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      const purchase = this.validatePurchase(money);
      this.purchase = purchase; 
    });
    this.winningLottoNumber();
  }
  validatePurchase(money){
    money = parseInt(money);
    if(money % 1000 !== 0){
      throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해주세요.");
    }
    return money;
  }
  winningLottoNumber(){
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (winning) => {
      this.winningNumber = this.validateWinning(winning);
    });
    this.bonusLottoNumber();
  }
  validateWinning(win){
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
  bonusLottoNumber(){
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (bonus) => {
      this.bonusNumber = this.validateBonus(bonus);
    });
    this.randomPurchaseLotto();
  }
  validateBonus(num){
    if(!(num >= 1 && num <= 45)){
      throw new Error("[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.");
    }
    if(Array.from(this.winningNumber).includes(num)){
      throw new Error("[ERROR] 중복된 숫자가 포함되어 있습니다.");
    }
    return num;
  }
  randomPurchaseLotto(){
    let moneyCount = this.purchase;
    moneyCount = parseInt(moneyCount/1000);
    MissionUtils.Console.print(`${moneyCount}개를 구매했습니다.`);
    for(let lotto = 0; lotto < moneyCount; lotto++){
      const randomLotto = this.setRandomNumberLotto();
      this.lottoNumber.push(new Lotto(randomLotto));
    }
    this.printLottoNumber();
    this.calculateLotto();
  }
  setRandomNumberLotto(){
    let lottoNum = new Set();
    while (lottoNum.size < 6) {
      lottoNum.add(MissionUtils.Random.pickNumberInRange(1, 45));
    }
    const result = Array.from(lottoNum).sort((a, b) => a - b);
    return result;
  }
  printLottoNumber(){
    this.lottoNumber.forEach((lotto) => {
      MissionUtils.Console.print(lotto.printRandom());
    });
  }
  calculateLotto(){
    let ranking = {};
    for (let i = 0; i < 6; i++) {
      ranking[i] = 0;
    }
    const winArr = this.lottoNumber.map((lotte) =>
      lotte.calculate(this.winningNumber, this.bonusNumber)
    );
    winArr.forEach((num) => {
      ranking[num]++;
    });
    this.resultLotto(ranking);
  }


}

module.exports = App;
