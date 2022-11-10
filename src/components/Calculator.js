const { MissionUtils } = require("@woowacourse/mission-utils");
const {inputAmountMoney, inputWinNumber, inputBonusNumber} = require("./Input.js");


const createLotto =()=>{
    let lottoArray=[];
    while(count<inputAmountMoney()){
        lottoArray.push(inputWinNumber());
        MissionUtils.Console.print(inputWinNumber());
    }
    return lottoArray;
}
module.exports=createLotto;