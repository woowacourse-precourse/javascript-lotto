const { Console } = require('@woowacourse/mission-utils');

class OutputView {
  printInformationPurchasedLotto(userBuyHowManyLotto, LottoNumberArray) {
    Console.print(`${userBuyHowManyLotto}개를 구매했습니다.`);
    LottoNumberArray.forEach((lotto) => {
      Console.print(`[${lotto.getLottoNumber().join(', ')}]`);
    });
  }

  printLottoGameResult(lottoResultMap, calculateYield) {
    Console.print(`당첨 통계`);
    Console.print(`---`);
    Console.print(`3개 일치 (5,000원) - ${lottoResultMap['3개']}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoResultMap['4개']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoResultMap['5개']}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResultMap['5개+보너스']}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${lottoResultMap['6개']}개`);
    Console.print(`총 수익률은 ${calculateYield()}%입니다.`);
    Console.close();
  }
}

module.exports = OutputView;
