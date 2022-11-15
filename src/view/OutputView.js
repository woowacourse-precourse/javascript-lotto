const { Console } = require('@woowacourse/mission-utils');

class OutputView {
  printInformationPurchasedLotto(userBuyHowManyLotto, LottoNumberArray) {
    Console.print(`${userBuyHowManyLotto}개를 구매했습니다.`);
    LottoNumberArray.forEach((lotto) => {
      Console.print(`[${lotto.getLottoNumber().join(', ')}]`);
    });
  }

  printLottoGameResult(lottoResult, profitRate) {
    Console.print(`당첨 통계`);
    Console.print(`---`);
    Console.print(`3개 일치 (5,000원) - ${lottoResult['5등']}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoResult['4등']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoResult['3등']}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult['2등']}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${lottoResult['1등']}개`);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
    Console.close();
  }
}

module.exports = OutputView;
