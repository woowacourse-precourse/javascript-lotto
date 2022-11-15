const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
    purchaseAmountArr = [];

    purchaseAmount() {
        MissionUtils.Console.readLine("", (purchaseAmount) => {
            if (!/^\d+$/.test(purchaseAmount))
                throw new Error("[ERROR] 문자를 입력할 수 없습니다.");
            const amount = parseInt(purchaseAmount);
            if (amount === 0)
                throw new Error("[ERROR] 구입금액이 입력되지 않았습니다.");
            if (amount % 1000 !== 0)
                throw new Error("[ERROR] 구입금액의 단위는 1000원입니다.");
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
