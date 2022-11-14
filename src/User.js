const MissionUtils = require("@woowacourse/mission-utils");

class User {
    #money;
    #numbers;
    #bonus;

    constructor() { }

    isValidMoney(answer){
        if(answer<0 || answer%1000!==0){
            throw new Error("[ERROR] 구입금액은 1,000원 단위로만 입력해야 합니다.");
        }
        return true;
    }

    isValidNumber(answer){
        if(answer<1 || answer>45) {
            throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
        }
        return true;
    }

    isValidNumbers(answer){
        answer.forEach((number)=>{
            this.isValidNumber(Number(number));
        });
        return true;
    }

    isValidLength(answer){
        if(answer.length!==6) {
            throw new Error("[ERROR] 로또 번호는 6자리로 쉼표(,)로 구분해 입력해야 합니다.");
        }
        return true;
    }

    getMoney(){
        MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
            const MONEY = Number(answer);
            if(this.isValidMoney(MONEY)) this.#money=MONEY;
        });
    }

    getNumbers(){
        MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (answer) => {
            const NUMBERS = answer.split(',').map((number)=>Number(number));
            if(this.isValidLength(NUMBERS) && this.isValidMoney(NUMBERS)) this.#numbers=NUMBERS;
        });
    }

    getBonus(){
        MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (answer) => {
            const BONUS = Number(answer);
            if(this.isValidNumber(BONUS)) this.#bonus=BONUS;
        });
    }
}

module.exports = User;
