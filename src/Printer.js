const BetterConsole = require('./lib/BetterConsole');

class Printer {
  static printPurchaseMessage(purchasedLottos) {
    const stringifiedLottos = purchasedLottos
      .map((currentLotto) => `[${currentLotto.join(', ')}]`)
      .join('\n');
    const lottoCount = purchasedLottos.length;

    BetterConsole.printTemplate(`
      ${lottoCount}개를 구매했습니다.
      ${stringifiedLottos}`);
  }

  static printDrawResultMessage(drawResult) {
    BetterConsole.printTemplate(`
    
      당첨 통계
      ---
      3개 일치 (5,000원) - ${drawResult.threeSame}개
      4개 일치 (50,000원) - ${drawResult.fourSame}개
      5개 일치 (1,500,000원) - ${drawResult.fiveSame}개
      5개 일치, 보너스 볼 일치 (30,000,000원) - ${drawResult.fiveSameWithBonus}개
      6개 일치 (2,000,000,000원) - ${drawResult.allSame}개
      총 수익률은 ${drawResult.profitRate}%입니다.`);
  }
}

module.exports = Printer;
