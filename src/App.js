const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto.js");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];

class App {

  #totalMoney;
  #winningNums;
  #bonusNum;

  constructor(){
    this.#totalMoney = 0;
    this.#winningNums = [];
    this.#bonusNum = 0;
  }

  setMoney(money){
    this.#totalMoney = money;
  }
  getMoney(){
    return this.#totalMoney;
  }
  pushWinNums(nums){
    this.#winningNums.push(nums);
  }
  getWinNums(){
    return this.#winningNums;
  }
  setBonus(num){
    this.#bonusNum = num;
  }
  getBonus(){
    return this.#bonusNum;
  }
  
  readMoney(){
    Console.readLine("구입금액을 입력해주세요 : ", (money) =>{
      const priceNum = parseInt(money);
      if(priceNum %1000 !==0){
        throw new Error("[ERROR] price가 1000으로 나누어 떨어지지 않습니다.");
      }
      this.setMoney(priceNum);
      Console.print(this.#totalMoney);
      this.buyLotto();
    })
  }
  
  buyLotto(){
    const lottoCount = this.getMoney()/1000;
    Console.print(`${lottoCount}개를 구매했습니다.`)
    for(let i=1; i<=lottoCount; i++){
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      lotto.printLotto();
      this.pushWinNums(lotto);
    }

    Console.print(this.getWinNums());
  }

  play() {
    this.readMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
