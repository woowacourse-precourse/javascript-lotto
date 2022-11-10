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
    return result;
}

const winningScore=(calWinning)=>{
    let count=[];
    for(let index=0;index<createLotto().size();index++){
        if(calWinning().result[i]==6){
            count[6]+=1;
        }
        if(calWinning().result[i]==5){
            count[5]+=1;
        }
        if(calWinning().result[i]==4){
            count[4]+=1;
        }
        if(calWinning().result[i]==3){
            count[3]+=1;
        }
    }
    }


module.exports=createLotto;