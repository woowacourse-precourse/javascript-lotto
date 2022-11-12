const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
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
    }
    checkMoney(input) {
        if (isNaN(input))
            throw new Error("[ERROR] 입력 금액은 숫자여야 합니다.");
        if (Number(input) % 1000 !== 0)
            throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");
        return Number(input) / 1000;
    }
}
module.exports = App;
