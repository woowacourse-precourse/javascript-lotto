const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
    LOTTO_LIST = [];
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
    getWinNumbers() {}
}
const app = new App();
console.log(app.makeLotto(5));
module.exports = App;
