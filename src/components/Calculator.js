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
            count[7]+=1;//  보너스볼 다시 계씬
        }
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
    return count;
    }
const calYield=()=>{
    let earnMoney=count[3]*5000+count[4]*50000+count[5]+1500000+count[7]*30000000+count[6]*2000000000;
    let yield=Math.round(earnMoney/inputAmountMoney()*100)*10;
    return yield;
}



module.exports=createLotto,calWinning,winningScore,calYield;