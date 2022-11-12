const Lotto=require("../Lotto.js");
class Check{

    checkNumberRange(winningArr){
        for(let index=0;index<winningArr.length;index++){
            if(winningArr[index]>=1&&winningArr[index]<=45){
                return true;
            }
            return false;
        }
        
    }

    checkDivideMoney(money){
        if(!(money%1000==0)){
            throw new Error("[ERROR]");
        }
        return true;
    }

    checkWinNumVaildation(winningstr){; 
        let winningArr=winningstr.split(",").map(Number);
        let lotto=new Lotto(winningArr);
        if(!this.checkNumberRange(winningArr)){
            throw new Error("[ERROR]");
        }
        lotto.validate(winningArr);
        lotto.checkUniqueRange(winningArr);
        return true;
    }


}
module.exports = Check;
