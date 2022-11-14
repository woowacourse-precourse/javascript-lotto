const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
    if(new Set(numbers).size !== 6){
      throw new Error("[ERROR] 당첨 번호는 중복이 없어야 합니다.");
    }
    numbers.map((it)=>{
      if(1 > Number(it) || Number(it)>45){
        throw new Error("[ERROR] 당첨 번호는 1 ~ 45 범위에 있어야 합니다.");
      }
      if(typeof Number(it) !== "number"){
          throw new Error("[ERROR] 당첨 번호는 숫자여야 합니다");
        }  
    })
  }

  validateBonus(bonus){
    if(typeof Number(bonus) !== "number"){
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다");
    }
    if(1 > Number(bonus) || Number(bonus)>45){
      throw new Error("[ERROR] 보너스 번호는 1 ~ 45 범위에 있어야 합니다.")
    }
    if(this.#numbers.includes(bonus)){
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복되면 안됩니다.")
    }
  }

  checkLotto(lotto){
    let cnt =0;
    this.#numbers.map((number)=>{
      if(lotto.includes(number)){
        cnt++;
      }
    })
    return cnt;
  }

  includeBonus(lotto, bonus){
    if(lotto.includs(bonus)){
      return true;
    }
    return false;
  }

  calTotal(winningArray){
    let winnings = 0;
    winnings += winningArray[3]*5000;
    winnings += winningArray[4]*50000;
    winnings += winningArray[5]*1500000;
    winnings += winningArray[6]*2000000000;
    winnings += winningArray[7]*30000000;
    return winnings;
  }

  calRevenue(winngarray, money){
    const TOTAL = this.calTotal(winngarray);
    const REVENUE = TOTAL/money*100;
    MissionUtils.Console.print(`총 수익률은 ${REVENUE}%입니다.`);
  }

  printResult(winningArray, money){
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${winningArray[3]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${winningArray[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winningArray[5]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningArray[7]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winningArray[6]}개`);
    this.calRevenue(winningArray, money);
  }

  winningConfirm(lottoList, bonus, money){
    let winning =[0,0,0,0,0,0,0,0];
    MissionUtils.Console.print(this.#numbers);
    lottoList.map((lotto)=>{
      let collect = this.checkLotto(lotto);
      if(collect==3 && this.includeBonus(lotto, bonus)){
        collect+=2;
      }
      winning[collect]++;
    })
    this.printResult(winning, money);
  }


}

module.exports = Lotto;
