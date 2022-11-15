const MissionUtils = require("@woowacourse/mission-utils");
const PURCHASE_UNIT = 1000;

class InputAcceptor {

    static async askPurchaseAmountAsyncAwait() {
        const answer = await new Promise(resolve => {
            MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', resolve)
        });
        if (!parseInt(answer)) throw new Error('[ERROR] 숫자만 입력해주세요.');
        if (!Number.isInteger(answer / PURCHASE_UNIT)) throw new Error('[ERROR] 구입 금액은 1000원 단위로 입력해주세요.');
        return answer / PURCHASE_UNIT;
    }

    static askPurchaseAmount() {
        const answer = new Promise(resolve => {
            MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', resolve)
        });
        return answer;
    }

    static async askWinningLottoNumbers() {
        const answer = await new Promise(resolve => {
            MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', resolve)
        });
        const winningLottoNumbers = this.stringToNumber(answer.split(','));
        return winningLottoNumbers;
    }

    static stringToNumber(string) {
        if (string.length === 1) return parseInt(string);
        let numberArray = [];
        string.forEach(element => numberArray.push(parseInt(element)));
        return numberArray;
    }
}

module.exports = InputAcceptor;