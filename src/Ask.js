const MissionUtils = require("@woowacourse/mission-utils");

class Ask{
    static money;
    static bonus;
    
    constructor(){
    }

    validateMoney(money){
        if(typeof money !== "number"){
        throw new Error("[ERROR] 숫자를 입력해야합니다.")}
        if(money%1000 != 0){
        throw new Error("[ERROR] 구입금액은 1000원 단위로 입력해야합니다.")
        }
        this.money = money;
    }

    money(){
        MissionUtils.Console.readLine("구입금액을 입력해 주세요.",(answer)=>{
            this.validateMoney(Number(answer));
        })
    }

    buyLotto(){
        MissionUtils.Console.print(`${parseInt(this.money/1000)}개를 구매했습니다.`)
    }

}

module.exports = Ask;