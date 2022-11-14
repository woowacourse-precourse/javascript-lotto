const MissionUtils = require("@woowacourse/mission-utils");

class MessagePrinter {
    static printPurchaseAmount(amount) {
        MissionUtils.Console.print(`${amount}개를 구매했습니다.`);
    }

    static printAllLottos(lottoWallet) {
        lottoWallet.forEach(lotto => MissionUtils.Console.print(lotto.numbers));
    }
}

module.exports = MessagePrinter;