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

  countWin(idx,lottos,bonus){
    let count=0;
    let includeBonus=false;
    for(let lotto=0; lotto<this.#numbers.length; lotto++){
      if(lottos[idx].includes(Number(this.#numbers[lotto]))){
        count+=1;
      }
      if(lottos[idx].includes(Number(bonus))){
        includeBonus=true;
      }
    }
    return [count,includeBonus];
  }

  printProfit(price,three,four,five,fiveBonus,six){
    let profit = three*5000+four*50000+five*1500000+fiveBonus*30000000+six*2000000000;
    let rateOfProfit = ((profit - price) / price)*100;
    if(rateOfProfit<0){
      rateOfProfit+=100;
    }
    Console.print(`총 수익률은 ${rateOfProfit.toFixed(1)}%입니다.`);
    Console.close();
  }

  printHistory(price,three,four,five,fiveBonus,six){
    Console.print(`3개 일치 (5,000원) - ${three}개`);
    Console.print(`4개 일치 (50,000원) - ${four}개`);
    Console.print(`5개 일치 (1,500,000원) - ${five}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveBonus}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${six}개`);
    this.printProfit(price,three,four,five,fiveBonus,six);
  }

  winningHistory(price,lottos,bonus){
    let three=0,four=0,five=0,fiveBonus=0,six=0;
    for(let idx=0; idx<lottos.length; idx++){
      const count=this.countWin(idx,lottos,bonus);
      switch(count[0]){
        case 3:
          three+=1;
          break;
        case 4:
          four+=1;
          break;
        case 5:
          if(count[1]){
            fiveBonus+=1;
          }else{
            five+=1;
          }
          break;
        case 6:
          six+=1;
          break;
      }
    }
    this.printHistory(price,three,four,five,fiveBonus,six);
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
