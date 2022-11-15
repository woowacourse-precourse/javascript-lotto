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
}

module.exports = Printer;
