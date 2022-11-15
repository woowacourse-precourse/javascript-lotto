const MissionUtils = require("@woowacourse/mission-utils");
const PRIZE_INDEX = require('./constants').PRIZE_INDEX;

class MessagePrinter {
    static printPurchaseAmount(amount) {
        MissionUtils.Console.print(`\n${amount}개를 구매했습니다.`);
    }

    static printAllLottos(lottoWallet) {
        lottoWallet.forEach(lotto => MissionUtils.Console.print(lotto.numbers));
    }

    static printResultStatistics(result) {
        MissionUtils.Console.print(`\n당첨 통계
---
3개 일치 (5,000원) - ${result[PRIZE_INDEX.FIFTH]}개
4개 일치 (50,000원) - ${result[PRIZE_INDEX.FOURTH]}개
5개 일치 (1,500,000원) - ${result[PRIZE_INDEX.THIRD]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[PRIZE_INDEX.SECOND]}개
6개 일치 (2,000,000,000원) - ${result[PRIZE_INDEX.FIRST]}개`
        );
    }

    static printReturn(lottoReturn) {
        MissionUtils.Console.print(`총 수익률은 ${lottoReturn}%입니다.`);
        MissionUtils.Console.close();
    }
}

module.exports = MessagePrinter;