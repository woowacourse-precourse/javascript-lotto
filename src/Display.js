const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('./utils/constant');
OUNT
const { ENTER_COST, ENTER_WINNING_NUMBERS, ENTER_BONUS_NUMBER, WINNING_STATISTICS } =
    OUTPUT_MESSAGE;

class Display {
    constructor(controller) {
        this.controller = controller;
    }

    static endGame() {
        Console.close();
    }

    inputCost() {
        Console.readLine(ENTER_COST, (answer) => {
            this.controller.amountInputValidate(answer);
        });
    }

    static printLottoList(lottos) {
        Console.print(`${lottos.length}개를 구매했습니다.`);
        lottos.forEach((lotto) => Console.print(`[${String(lotto.getNumber()).replace(/,/g, ', ')}]`));
    }

    inputWinningNumber() {
        Console.readLine(ENTER_WINNING_NUMBERS, (answer) => {
        });
    }

    inputBonusNumber() {
        Console.readLine(ENTER_BONUS_NUMBER, (answer) => {
        });
    }

    static printResult(result, earningRate) {
        const [fifthRank, forthRank, thirdRank, secondRank, firstRank] = result;

        Console.print(WINNING_STATISTICS);

        Console.print(
            `3개 일치 (5,000원) - ${fifthRank}개\n4개 일치 (50,000원) - ${forthRank}개\n5개 일치 (1,500,000원) - ${thirdRank}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${secondRank}개\n6개 일치 (2,000,000,000원) - ${firstRank}개`,
        );

        Console.print(`총 수익률은 ${earningRate}%입니다.`);
    }
}

module.exports = Display;