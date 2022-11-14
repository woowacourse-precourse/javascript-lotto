const MissionUtils = require("@woowacourse/mission-utils");
const PURCHASE_UNIT = 1000;

class InputAcceptor {

    static async askPurchaseAmountAsyncAwait() {
        const answer = await new Promise(resolve => {
            MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', resolve)
        });
        if (!Number.isInteger(answer / PURCHASE_UNIT)) throw new Error('[ERROR] 구입 금액은 1000원 단위로 입력해주세요.');
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