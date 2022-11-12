const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
    LOTTO_LIST = [];
    CHECK_LIST = Array(46).fill(0);
    WIN_LIST = Array(6).fill(0);
    BUY = 0;

    play() {
        this.start();
    }
    start() {
        MissionUtils.Console.readLine(
            "구입금액을 입력해 주세요.\n",
            (answer) => {
                this.getMoney(answer);
            }
        );
    }
    getMoney(input) {
        this.BUY = this.checkMoney(input);
        this.LOTTO_LIST = this.makeLotto(this.BUY);
        this.printLotto(this.LOTTO_LIST);
    }
    checkMoney(input) {
        if (isNaN(input))
            throw new Error("[ERROR] 입력 금액은 숫자여야 합니다.");
        if (Number(input) % 1000 !== 0)
            throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");
        return Number(input) / 1000;
    }
    makeLotto(int) {
        let res = [];
        for (let i = 0; i < int; i++)
            res.push(
                new Lotto(
                    MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
                )
            );
        return res;
    }
    printLotto(arr) {
        let str = `${arr.length}개를 구매했습니다.`;
        for (let i in arr) str += "\n" + arr[i].print();
        MissionUtils.Console.print(str);
        this.getWinNumbers();
    }
    getWinNumbers() {
        MissionUtils.Console.readLine(
            "\n당첨 번호를 입력해 주세요.\n",
            (answer) => {
                this.checkWinNumbers(answer);
            }
        );
    }
    checkWinNumbers(str) {
        let arr = str.split(",").map(Number);
        if (arr.length !== 6)
            throw new Error("[ERROR] 당첩 번호는 6개여야 합니다.");
        for (let i in arr) {
            this.checkWinNumber(arr[i], 2);
        }
        this.getBonusNumber();
    }
    checkWinNumber(int, value) {
        if (isNaN(int)) throw new Error("[ERROR] 입력 금액은 숫자여야 합니다.");
        if (int < 1 || int > 45)
            throw new Error(
                "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."
            );
        if (this.CHECK_LIST[int] > 0)
            throw new Error("[ERROR] 중복되지 않는 수를 입력해야 합니다.");
        this.CHECK_LIST[int] += value;
    }
    getBonusNumber() {
        MissionUtils.Console.readLine(
            "\n보너스 번호를 입력해 주세요.\n",
            (answer) => {
                this.checkWinNumber(Number(answer), 1);
                this.calculate();
            }
        );
    }
    calculate() {
        for (let i in this.LOTTO_LIST) {
            let now = this.LOTTO_LIST[i].check(this.CHECK_LIST);
            this.WIN_LIST[now]++;
        }
        this.printResult();
    }
    printResult() {
        MissionUtils.Console.print(
            `3개 일치 (5,000원) - ${this.WIN_LIST[1]}개
4개 일치 (50,000원) - ${this.WIN_LIST[2]}개
5개 일치 (1,500,000원) - ${this.WIN_LIST[3]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.WIN_LIST[4]}개
6개 일치 (2,000,000,000원) - ${this.WIN_LIST[5]}개`
        );
        MissionUtils.Console.print(
            `총 수익률은 ${this.calculateProfitPercent()}%입니다.`
        );
    }
    calculateProfitPercent() {
        let result = [0n, 5n, 500n, 1500n, 30000n, 2000000n];
        let sum = 0n;
        for (let i in this.WIN_LIST)
            sum += result[i] * BigInt(this.WIN_LIST[i]);
        return Number((1000n * sum) / BigInt(this.BUY)) / 10;
    }
}
module.exports = App;
