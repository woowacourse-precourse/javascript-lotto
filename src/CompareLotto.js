class CompareLotto{
    #userWinningStatics = [0,0,0,0,0];
    
    constructor(UserNumberLists, lottoNumber, bonusNumber){
      this.repeatUserNumberPerListsCount(UserNumberLists, lottoNumber, bonusNumber);
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
        if(count===6){
          this.#userWinningStatics[0] +=1;
        }else if(count === 5 && isBonus){
          this.#userWinningStatics[1] +=1;
        }else if(count === 5){
          this.#userWinningStatics[2] +=1;
        }else if(count === 4){
          this.#userWinningStatics[3] +=1;
        }else if(count === 3){
          this.#userWinningStatics[4] +=1;
        }
    }
    getUserWinningStatics(){
        return this.#userWinningStatics;
    }  
}
module.exports = CompareLotto;