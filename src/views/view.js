const MissionUtils = require('@woowacourse/mission-utils')
const {
    PURCHASE_LOTTO,
    WINNING_STATICS,
    THREE_MATCHED,
    FOUR_MATCHED,
    FIVE_MATCHED,
    FIVE_WITH_BONUS_MATCHED,
    SIX_MATCHED,
    TOTAL_PROFIT,
    PROFIC_PERCENT,
    THE_NUMBER_OF,
} = require('../utils/constants')
class View {
    constructor() {}

    lottoCountPrint(number) {
        MissionUtils.Console.print(number + PURCHASE_LOTTO)
    }

    lottoNumberPrint(numbers) {
        MissionUtils.Console.print('[' + numbers.join(', ') + ']')
    }

    winningStatistics(rank, rateOfReturn) {
        MissionUtils.Console.print(WINNING_STATICS)
        MissionUtils.Console.print(THREE_MATCHED + rank[3] + THE_NUMBER_OF)
        MissionUtils.Console.print(FOUR_MATCHED + rank[2] + THE_NUMBER_OF)
        MissionUtils.Console.print(FIVE_MATCHED + rank[1] + THE_NUMBER_OF)
        MissionUtils.Console.print(
            FIVE_WITH_BONUS_MATCHED + rank[4] + THE_NUMBER_OF
        )
        MissionUtils.Console.print(SIX_MATCHED + rank[0] + THE_NUMBER_OF)
        MissionUtils.Console.print(TOTAL_PROFIT + rateOfReturn + PROFIC_PERCENT)
    }
}

module.exports = View
