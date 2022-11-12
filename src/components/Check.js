const Lotto=require("../Lotto.js");
class Check{

    checkDivideMoney(money){
        if(!(money%1000==0)){
            throw new Error("[ERROR]");
        }
        return true;
    }

    checkWinNumVaildation(winningstr){; 
        let winningArr=winningstr.split(",").map(Number);
        let lotto=new Lotto(winningArr);
        // if(!lotto.checkNumberRange(winningArr)){
        //     throw new Error("[ERROR]");
        // }
        lotto.checkNumberRange(winningArr);
        lotto.validate(winningArr);
        lotto.checkUniqueRange(winningArr);
        return true;
    }


}
module.exports = Check;
