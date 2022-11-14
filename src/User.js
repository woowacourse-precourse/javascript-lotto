const MissionUtils = require("@woowacourse/mission-utils");

class User {
    isValidMoney(money){
        if(money<=0 || money%1000!==0){
            throw new Error("[ERROR] 구입금액은 1,000원 단위로만 입력해야 합니다.");
        }
    }

    isValidNumber(number){
        if(number<1 || number>45) {
            throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
        }
    }

    isValidNumbers(numbers){
        numbers.forEach((number)=>{
            this.isValidNumber(Number(number));
        });
    }

    isValidLength(input){
        if(input.length!==6) {
            throw new Error("[ERROR] 로또 번호는 6자리로 쉼표(,)로 구분해 입력해야 합니다.");
        }
    }

    setMoney(){
        let money;
        MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
            const MONEY = Number(answer);
            this.isValidMoney(MONEY);
            money = MONEY;
        });
        return money;
    }

    setNumbers(){
        let numbers;
        MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (answer) => {
            const NUMBERS = answer.split(',').map((number)=>Number(number));
            this.isValidLength(NUMBERS);
            this.isValidNumbers(NUMBERS);
            numbers = NUMBERS;
        });
        return numbers;
    }

    setBonus(){
        let bonus;
        MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (answer) => {
            const BONUS = Number(answer);
            this.isValidNumber(BONUS)
            bonus = BONUS;
        });
        return bonus;
    }
}

module.exports = User;
