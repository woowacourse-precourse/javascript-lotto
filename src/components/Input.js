const MissionUtils = require("@woowacourse/mission-utils");
const Check=require("./Check.js");
const Lotto= require("../Lotto.js");

class Input{

    inputAmountMoney(){
        let check= new Check();
        let lottomoney;
        MissionUtils.Console.readLine('구입금액을 입력해 주세요.',money=>{
            if(check.checkDivideMoney(money)){
                lottomoney=money;
            }
        });
        return lottomoney;
    } 
    inputMoneyCount(){
        let count=this.inputAmountMoney()/1000;
        return count;
    }
    inputWinNumber(){
        let check= new Check();
        let winNumber;
        MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", number=>{
            if(check.checkWinNumVaildation(number)==true){
                winNumber=number;
            }
        })
        return winNumber;
    }
    inputBonusNumber(){
        let bonusNumber;
        MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", number=>{
            bonusNumber=number;

        })
        MissionUtils.Console.close();
        return bonusNumber;
    }

}

module.exports = Input;