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
  };

  static result = (lottoPrizeDto) => {
    const lottoPrizeReversed = lottoPrizeDto.prizeCount.reverse();
    [...LOTTO_PRIZE].reverse().forEach((prize, index) => {
      Console.Output(
        `${prize.MATCHED}개 일치, ${
          prize.BONUS ? '보너스 볼 일치' : ''
        } (${prize.MONEY.toLocaleString('ko-KR')}원) - ${
          lottoPrizeReversed[index]
        }개`,
      );
    });
  };
  static sumMoney = (lottoPrizeDto, money) => {
    const returnRate = (lottoPrizeDto.sumMoney / money) * 100;
    Console.Output(`총 수익률은 ${returnRate.toLocaleString('ko-KR', {maximumFractionDigits: 2})}%입니다.`)
  }
}

module.exports = OutputConsole;
