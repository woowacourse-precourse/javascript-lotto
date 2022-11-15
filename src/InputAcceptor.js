const MissionUtils = require("@woowacourse/mission-utils");
const PURCHASE_UNIT = 1000;

class InputAcceptor {

    static async askPurchaseAmountAsyncAwait() {
        const answer = await new Promise(resolve => {
            MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', resolve)
        });
        checkANumber(answer);
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
        const answerArray = answer.split(',');
        checkNumbers(answerArray);
        const winningLottoNumbers = this.stringToNumber(answerArray);
        return winningLottoNumbers;
    }

    static stringToNumber(string) {
        if (string.length === 1) return parseInt(string);
        let numberArray = [];
        string.forEach(element => numberArray.push(parseInt(element)));
        return numberArray;
    }

    static checkANumber(number) { //보너스 넘버
        if (!parseInt(number)) throw new Error('[ERROR] 숫자만 입력해주세요.');
        return true;
    }

    static checkNumbers(numberArray) {
        numberArray.forEach(numberElement => this.checkANumber(numberElement));
        return true;
    }

    static checkNumberValidRange(number) {
        if (number < 1 && number > 45) throw new Error('[ERROR] 1~45 사이의 숫자를 입력해주세요.');
    }
}

module.exports = InputAcceptor;