const MissionUtils = require("@woowacourse/mission-utils");

class Ask{
    #money;
    
    constructor(){
    }

    validateMoney(money){
        if(typeof money !== "number"){
        throw new Error("[ERROR] 숫자를 입력해야합니다.")}
        if(money%1000 != 0){
        throw new Error("[ERROR] 구입금액은 1000원 단위로 입력해야합니다.")
        }}

    money(){
        MissionUtils.Console.readLine("구입금액을 입력해 주세요.",(answer)=>{
            this.validateMoney(Number(answer));
        })
    }
}

module.exports = Ask;