const MissionUtils = require("@woowacourse/mission-utils");

class InputAcceptor {
    static async askPurchaseAmountAsyncAwait() {
        const answer = await new Promise(resolve => {
            MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', resolve)
        });
        return answer;
    }

    static askPurchaseAmount() {
        const answer = new Promise(resolve => {
            MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', resolve)
        });
        return answer;
    }
}

module.exports = InputAcceptor;