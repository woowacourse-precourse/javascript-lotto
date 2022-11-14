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

  winningConfirm(lottoList, bonus){
    let winning =[0,0,0,0,0,0,0,0];
    MissionUtils.Console.print(this.#numbers);
    lottoList.map((lotto)=>{
      let collect = this.checkLotto(lotto);
      if(collect==3 && this.includeBonus(lotto, bonus)){
        collect+=2;
      }
      winning[collect]++;
    })
  }


}

module.exports = Lotto;
