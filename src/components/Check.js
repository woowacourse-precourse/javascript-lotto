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



}
module.exports = Check;
