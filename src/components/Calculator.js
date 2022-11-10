const { MissionUtils } = require("@woowacourse/mission-utils");
const {inputAmountMoney, inputWinNumber, inputLottoNumber} = require("./Input.js");


const createLotto =()=>{
    let lottoArray=[];
    while(count<inputAmountMoney()){
        lottoArray.push(inputWinNumber());
        MissionUtils.Console.print(inputWinNumber());
    }
    return lottoArray;
}
const calWinning= ()=> {
    let result=[];
    for(let count=0;count<lottoArray.size();count++){
        result.push(JSON.stringify(lottoArray)===JSON.stringify(inputLottoNumber));
    }
}
module.exports=createLotto;