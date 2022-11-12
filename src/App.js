const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
    LOTTO_LIST = [];
    CHECK_LIST = [0] * 46;

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
        let now = this.checkMoney(input);
        this.LOTTO_LIST = this.makeLotto(now);
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
        MissionUtils.Console.print(`${arr.length}개를 구매했습니다.`);
        for (let i in arr) arr.print();
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
            this.checkWinNumber(arr[i]);
        }
    }
    checkWinNumber(int) {
        if (isNaN(int)) throw new Error("[ERROR] 입력 금액은 숫자여야 합니다.");
        if (int < 1 || int > 45)
            throw new Error(
                "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."
            );
        if (this.CHECK_LIST[int] > 0)
            throw new Error("[ERROR] 중복되지 않는 수를 입력해야 합니다.");
        this.CHECK_LIST[int] += 2;
    }
}
const app = new App();
console.log(app.makeLotto(5));
module.exports = App;
