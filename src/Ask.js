const MissionUtils = require("@woowacourse/mission-utils");

class Ask{
    static money;
    static bonus;
    lottoCnt;
    lottoList=[];

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
        this.lottoCnt = parseInt(this.money/1000);
        MissionUtils.Console.print(`${this.lottoCnt}개를 구매했습니다.`)
        this.makeLotto();
    }

    makeLotto(){
        for(let count = 0; count < this.lottoCnt; count++){
            this.lottoList.push(String(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)).split(",").join(", "));
        }
    }

    showLottoList(){
        for(let index = 0; index<this.lottoCnt; index++){
            MissionUtils.Console.print("["+this.lottoList[index]+"]");
        }
    }

    winningNumber(){
        let numbers;
        MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (answer) => {
            numbers = answer.split(",");
          });
        return numbers;
    }
}

module.exports = Ask;