const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
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

  setMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n",(num) => {
      if (!/^\d+$/.test(num))
        throw new Error("[ERROR] 구입금액에 문자가 포함되어 있습니다.");
      const money = parseInt(num);
      if(money % 1000 !== 0)
        throw new Error("[ERROR] 구입금액 오류");
        this.money = money;
        this.buy();
        this.Lottos();
        this.winningNum();
    });
  }
  buy() {
    let getMoney = this.money
    let count = parseInt(this.money / 1000);
    while (getMoney > 0) {
      getMoney -= 1000;
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      this.lotto.push(new Lotto(numbers));
    }
    Console.print("\n"+ count + "개를 구매했습니다.");
  }
  Lottos() {
    this.lotto.forEach((lottoArr) => {
      Console.print(lottoArr.toString());
    });
  }
 winningNum() {
  Console.readLine("\n당첨 번호를 입력해 주세요.\n",(num) => {
    if (!/^(\d{1,2}[,]){5}\d{1,2}$/.test(num))
      throw new Error("[ERROR] 입력형식이 올바르지 않습니다.");
    const numbers = num.split(",").map((number) => {
      if(number < 1 || number > 45)
      throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.");
      return parseInt(number);
    });
    const duplication =  new Set(numbers);
    if (duplication.size != 6)
      throw new Error("[ERROR] 중복번호가 포함되어 있습니다.");
      this.winNum = numbers;
      this.bonusNumber();
  })
 }
 bonusNumber() {
  Console.readLine("\n보너스 번호를 입력해 주세요.\n", (num) => {
    if (!/^\d+$/.test(num)) 
      throw new Error("[ERROR] 번호가 올바르지 않습니다.");
    const bonus = parseInt(num);
    if(bonus < 1 || bonus > 45)
      throw new Error("[ERROR] 보너스 번호는 1부터 45까지의 숫자입니다.");
    if(this.winNum.includes(num))
      throw new Error("[ERROR] 당첨번호에 포함되어 있는 번호입니다.");
      this.bonusNum = bonus;
      this.result();
  });
 }
 Ranksystem() {
  let rankSystem = {};
  for(let i=0; i<6; i++) {
    rankSystem[i] = 0;
  }
  return rankSystem;
 }
 countRank(rankSystem, winScore) {
  winScore.forEach((number) =>{
    rankSystem[number]++;
  });
 }
 result() {
  const rankObject = this.Ranksystem();
  const winScore = this.lotto.map((lotto) => lotto.rank(this.winNum, this.bonusNum));
  this.countRank(rankObject,winScore);
  Console.print("\n당첨 통계\n---");
  Console.print(`3개 일치 (5,000원) - ${rankObject[5]}개`);
  Console.print(`4개 일치 (50,000원) - ${rankObject[4]}개`);
  Console.print(`5개 일치 (1,500,000원) - ${rankObject[3]}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankObject[2]}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${rankObject[1]}개`);
  this.stats(rankObject);
 }
 stats(rankObject) {
  let useMoney = 0;
  for(let i =1; i<= 5; i++) {
    if(rankObject[i] != 0) useMoney += score[i] * rankObject[i];
  }
  Console.print(`총 수익률은 ${((useMoney / this.money) * 100).toFixed(1)}%입니다.`);
  Console.close();
 }

  play() {
    this.setMoney();
  }
}
const app = new App();
app.play();
module.exports = App;