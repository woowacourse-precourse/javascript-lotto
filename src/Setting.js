const { Console, Random } = require('@woowacourse/mission-utils');

class Setting {
    constructor() {
        this.money = null;
        this.count = null;
        this.lottoList = null;
        this.winningNum = null;
        this.bonusNum = null;
    }

    input() {
        Console.readLine("구입 금액을 입력해 주세요.", (answer) => {
            [...answer].forEach(char => {
                if (char > '9') throw "[ERROR] 금액을 잘못 입력하였습니다."
            })
            if (parseInt(answer) % 1000 !== 0) throw "[ERROR] 금액을 잘못 입력하였습니다.";

            this.money = parseInt(answer);
            this.count = parseInt(answer) / 1000;
        });
    }

    createLotto(count) {
        let lottos = [];
        Console.print(count + "개를 구매했습니다.");
        for (let i = 0; i < count; i++) {
            const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
            Console.print(this.createNewArr(numbers)[1])
            lottos.push(this.createNewArr(numbers)[0]);
        }
        this.lottoList = lottos;
    }

    createNewArr(array) {
        let arrStr = "[";
        let newArr = [];
        for (let i = 0; i < 6; i++) {
            if (i === 5) {
                arrStr += array[i] + "]";
                newArr.push(array[i]);
                break;
            }
            arrStr += array[i] + ", "
            newArr.push(array[i])

        }
        return [newArr, arrStr];
    }


    winningNumber() {
        Console.readLine("당첨 번호를 입력하세요.", (answer) => {
            this.winningNum = (answer.replace(" ","")).split(",").map(x => parseInt(x));
        });
        Console.readLine("보너스 번호를 입력하세요.", (answer) => {
            this.bonusNum = parseInt(answer);
        });
    }
}
module.exports = Setting;