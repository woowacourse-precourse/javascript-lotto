const MissionUtils = require("@woowacourse/mission-utils");
class CompareLotto{
    #userWinningStatics = [0,0,0,0,0];
    
    constructor(UserNumberLists, lottoNumber, bonusNumber){
      this.repeatUserNumberPerListsCount(UserNumberLists, lottoNumber, bonusNumber);
      this.printUserWinningStatics(this.#userWinningStatics);
    }
    repeatUserNumberPerListsCount(UserNumberLists, lottoNumber, bonusNumber){
      UserNumberLists.forEach((OneList)=>{
        this.comparePrizeNumberAndUserNumber(lottoNumber, bonusNumber,OneList);
      });
    }
    comparePrizeNumberAndUserNumber(lottoNumbers, bonusNumber, userNumbers){
        let count = 0;
        userNumbers.forEach((userNumber)=>{
          lottoNumbers.forEach((lottoNumber)=>{
            if(userNumber === lottoNumber){
              count+=1;
            }
          })
        });
        const state = this.checkBonusNumber(bonusNumber, userNumbers);
        count += state[0];
        const isBonus = state[1];
        this.addWinningStatics(count,isBonus);
    }
    checkBonusNumber(bonusNumber, userNumbers){
      if(userNumbers.includes(...bonusNumber)){
        return [1,true];
      }else {
        return [0,false];
      }
    }
    addWinningStatics(count, isBonus){
      if(count===6){ return this.#userWinningStatics[0] +=1;}
      if(count === 5 && isBonus){ return this.#userWinningStatics[1] +=1;}
      if(count === 5){ return this.#userWinningStatics[2] +=1;}
      if(count === 4){ return this.#userWinningStatics[3] +=1;}
      if(count === 3){ return this.#userWinningStatics[4] +=1;}
    }
    printUserWinningStatics(winningStatic){
      MissionUtils.Console.print("당첨 통계");
      MissionUtils.Console.print("---");
      MissionUtils.Console.print("3개 일치 (5,000원) - "+winningStatic[4]+"개");
      MissionUtils.Console.print("4개 일치 (50,000원) - "+winningStatic[3]+"개");
      MissionUtils.Console.print("5개 일치 (1,500,000원) - "+winningStatic[2]+"개");
      MissionUtils.Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - "+winningStatic[1]+"개");
      MissionUtils.Console.print("6개 일치 (2,000,000,000원) - "+winningStatic[0]+"개");
    }
    getUserWinningStatics(){
      return this.#userWinningStatics;
    }  
}
module.exports = CompareLotto;