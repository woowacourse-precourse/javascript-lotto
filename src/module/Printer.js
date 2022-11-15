const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constant/message");

class Printer {
    static spaceLine() {
        Console.print("");
    }

    static amountResult(amount) {
        Console.print(amount + MESSAGE.PURCHASE_RESULT);
    }

    static lottoList(lottos) {
        lottos.forEach((lotto) => {
            Console.print("[" + lotto.toString().replaceAll(",", ", ") + "]");
        });
    }

    static lottoResult(winnings) {
        for (let i = 0; i < winnings.length; i++) {
            Console.print(MESSAGE.WINNING[`${i}`] + winnings[i] + MESSAGE.KOREAN_AMOUNT_WORD);
        }
    }

    static revenue(revenue) {
        Console.print(MESSAGE.YIELD + " " + revenue + "%" + MESSAGE.KOREAN_ENDING_WORD);
    }
}

module.exports = Printer;
