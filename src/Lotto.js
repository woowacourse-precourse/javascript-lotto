const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
const InputCheck = require('./InputCheck');
const { generateRandom } = require('../utils/Source.js');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.inputCheck = new InputCheck();
    this.inputCheck.validate(numbers);
    this.#numbers = numbers;
  }

  printLotto(lottos,amount){
    for(let i=0; i<amount; i++){
      let ans="[";
      for(let j=0; j<lottos[i].length-1; j++){
        ans+=lottos[i][j]+", ";
      }
      ans+=lottos[i][5]+"]";
      Console.print(ans);
    }
  }
  
  bonusNumber(price,lottos){
    Console.readLine('보너스 번호를 입력해 주세요.', (bonus) =>{
      this.inputCheck.bonusCheck(bonus);
      this.winningHistory(price,lottos,bonus);
    });
  }

  winningNumber(price,lottos){
    Console.readLine('당첨 번호를 입력해 주세요.', (input) => {
      let numbers = input.split(',');
      this.inputCheck.validate(numbers);
      this.#numbers = numbers;
      this.bonusNumber(price,lottos);
    });
  }

  generateLotto = (price,amount) => {
    const lottos = generateRandom(amount);
    this.printLotto(lottos,amount); 
    this.winningNumber(price,lottos);
  }

  buyLotto(){
    Console.readLine('구입금액을 입력해 주세요.', (price) => {
      this.inputCheck.priceCheck(price);
      this.amount = price/1000;
      Console.print(`${this.amount}개를 구매했습니다.`);
      this.generateLotto(price,this.amount);
    });
  }
}
module.exports = Lotto;
