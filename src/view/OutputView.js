const { print } = require('../utils/utils');
const {
  MESSAGE,
  FIFTH_PLACE,
  FIRST_PLACE,
  SECOND_PLACE,
  WINNING_RESULT,
} = require('../utils/constants');

class OutputView {
  printLottosQuantity(lottosQuantity) {
    print('');
    print(lottosQuantity + MESSAGE.PURCHASED_LOTTOS_QUANTITY);
  }

  printPurchasedLottos(purchasedLottos) {
    purchasedLottos.forEach((lotto) => {
      const LOTTO_NUMBERS = `[${lotto[0]}, ${lotto[1]}, ${lotto[2]}, ${lotto[3]}, ${lotto[4]}, ${lotto[5]}]`;
      print(LOTTO_NUMBERS);
    });
    print('');
  }

  printWinningResult(winningLottosQuantity) {
    print(MESSAGE.WINNING_HISTORY);

    for (let rank = FIFTH_PLACE.NUMBER; rank >= FIRST_PLACE.NUMBER; rank -= 1) {
      if (rank === SECOND_PLACE.NUMBER) {
        const RESULT = `${WINNING_RESULT[rank].LOTTO_COUNT}개 일치, 보너스 볼 일치 (${WINNING_RESULT[rank].PRIZE}) - ${winningLottosQuantity[rank]}개`;
        print(RESULT);
        continue;
      }
      const RESULT = `${WINNING_RESULT[rank].LOTTO_COUNT}개 일치 (${WINNING_RESULT[rank].PRIZE}) - ${winningLottosQuantity[rank]}개`;
      print(RESULT);
    }
  }

  printRateOfReturn(rateOfReturn) {
    const RATE_OF_RETURN = `총 수익률은 ${rateOfReturn}%입니다.`;
    print(RATE_OF_RETURN);
  }
}

module.exports = OutputView;
