const MissionUtils = require("@woowacourse/mission-utils");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random];

class App {

  #totalMoney;
  #winningNums;
  #bonusNum;

  constructor(){}

  setMoney(money){
    this.#totalMoney = money;
  }
  getMoney(){
    return this.#totalMoney;
  }
  setWinNums(nums){
    this.#winningNums = nums;
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
      Console.close();
    })
  }
  
  buyLotto(){

  }

  play() {
    this.readMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
