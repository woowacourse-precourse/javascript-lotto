const { LOTTO_PRIZE } = require('../Resource');

const Console = require('./Console');

class OutputConsole {
  static lottoNumbers = (lottoPurchaseDtos) => {
    lottoPurchaseDtos.forEach((lottoPurchaseDto) => {
      Console.Output(lottoPurchaseDto.numbers);
    });
  };

  static lottoPurchaseNumber = (purchaseNumber) => {
    Console.Output(`${purchaseNumber}개를 구매했습니다.`);
  }

  static result = (lottoPrizeDto) => {
    const lottoPrizeReversed = lottoPrizeDto.prizeCount.reverse();
    [...LOTTO_PRIZE].reverse().forEach((prize, index) => {
      Console.Output(
        `${prize.MATCHED}개 일치, ${prize.BONUS ? '보너스 볼 일치' : ''} (${
          prize.MONEY
        }원) - ${lottoPrizeReversed[index]}개`,
      );
    });
  };
}

module.exports = OutputConsole;
