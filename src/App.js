const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto.js');
const score = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
}; 
class App {

  constructor() {
    this.money = null;
    this.lotto = []; 
    this.winNum = [];
    this.bonusNum = null;
  }   

  inputmoney() {
    const numberReg = /^[0-9]+$/;
    Console.readLine('구입금액을 입력해 주세요.\n', (num) => {
      if(!numberReg.test(num)) throw new Error('[ERROR] 숫자만 입력 가능합니다.');
      const money = parseInt(num);
      if(!(money % 1000 === 0) || money === 0) throw new Error("[ERROR] 구입 금액이 올바르지 않습니다.");
      this.money = money;
      this.buyLotto();
    });
  }

  buyLotto() {
    let getMoney = this.money
    let count = parseInt(this.money / 1000);
    while(getMoney > 0) {
      getMoney -= 1000;
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      this.lotto.push(new Lotto(numbers));
    }
    Console.print(`${count}개를 구매했습니다.`);
    this.showLottoNum();
  }

  showLottoNum() {
    this.lotto.forEach((lottoArr) => {
      Console.print(lottoArr.toString());
    })
    this.inputLottoNumber();
  }

  inputLottoNumber(){
    Console.readLine('당첨 번호를 입력해 주세요.\n', (num) => {
      if (!/^(\d{1,2}[,]){5}\d{1,2}$/.test(num))
        throw new Error("[ERROR] 입력형식이 올바르지 않습니다.");
     const inputSixNumber = num.split(",").map((str) => {
      Number(str)
      return parseInt(str);
     });
     const checkArr = new Set(inputSixNumber);
     if(checkArr.size != 6) throw new Error("[ERROR] 중복번호가 포함되어 있습니다.");
      this.winNum = inputSixNumber;
      this.inputBonusLotto();
    });
  }

  inputBonusLotto(){
    Console.readLine('보너스 번호를 입력해 주세요.\n', (num) => {
     const inputBonusNumber = parseInt(num);
     this.bonusNum = inputBonusNumber;
     this.result();
   });
 }

 getScore() {
  let getScore = {};
  for(let i=0; i<6; i++) {
    getScore[i] = 0;
  }
  return getScore;
 }
 countRank(getScore, winScore) {
  winScore.forEach((number) =>{
    getScore[number]++;
  });
 }
 result() {
  const rank = this.getScore();
  const winScore = this.lotto.map((lotto) => lotto.rank(this.winNum, this.bonusNum));
  this.countRank(rank,winScore);
  Console.print("\n당첨 통계\n---");
  Console.print(`3개 일치 (5,000원) - ${rank[5]}개`);
  Console.print(`4개 일치 (50,000원) - ${rank[4]}개`);
  Console.print(`5개 일치 (1,500,000원) - ${rank[3]}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank[2]}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${rank[1]}개`);
  this.end(rank);
 }
 end(rank) {
  let money = 0;
  for(let i = 1; i <= 5; i++) {
    if(rank[i] != 0) money += score[i] * rank[i];
  }
  Console.print(`총 수익률은 ${((money / this.money) * 100).toFixed(1)}%입니다.`);
  Console.close();
 }

play() {
    this.inputmoney();
  }
}

 const app = new App();
 app.play();

module.exports = App;