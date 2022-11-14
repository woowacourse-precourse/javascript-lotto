const MissionUtils = require("@woowacourse/mission-utils");
class Ask{
    constructor(){
    }

    validateMoney(money){
        if(typeof money !== "number"){
        throw new Error("[Error] 숫자를 입력해야합니다.")}
        if(money%1000 != 0){
        throw new Error("[Error] 구입금액은 1000원 단위로 입력해야합니다.")
        }}

    money(){
        console.readLine("구입금액을 입력해 주세요.",(answer)=>{
            this.validateMoney(answer);
        })
    }
}

module.export = Ask;