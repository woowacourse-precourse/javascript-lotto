const MissionUtils = require("@woowacourse/mission-utils");

const inputAmountMoney= () =>{
    MissionUtils.Console.readline("구입금액을 입력해 주세요.",lottomoney=>{
        return lottomoney;
    });
} 
const inputMoneyCount=()=>{
    if(inputAmountMoney()%1000==0){
        count=inputAmountMoney()/1000;
        return count;
    }
    return new Error;
}
const inputLottoNumber=() => {
    MissionUtils.Console.readline("당첨 번호를 입력해 주세요.", winNumber=>{
        return winNumber;
    })

}
const inputBonusNumber=()=> {
    MissionUtils.Console.readline("보너스 번호를 입력해 주세요.", bonusNumber=>{
        return bonusNumber;
    })
}
const inputWinNumber= ()=>{
    let lottoNumber=new Set();
    while(lottoNumber.size<inputAmountMoney()){
        lottoNumber.add(MissionUtils.Random.pickUniqueNumbersInRange(1,45,6));
    }
    return lottoNumber;
}

module.exports = inputAmountMoney,inputMoneyCount, inputLottoNumber,inputBonusNumber, inputWinNumber;