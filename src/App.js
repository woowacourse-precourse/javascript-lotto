const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
    purchaseAmountArr = [];

    purchaseAmount() {
        MissionUtils.Console.readLine("", (purchaseAmount) => {
            let purchaseAmountString = purchaseAmount.toString();
        });
    }

    play() {
        MissionUtils.Console.print("구입금액을 입력해 주세요.");
        this.purchaseAmount();
    }
}

module
    .exports = App;
