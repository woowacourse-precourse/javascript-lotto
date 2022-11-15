const { Console } = require('@woowacourse/mission-utils');
const { PRINT_MESSAGE, LOTTO_RANKING_INFORMATION_MESSAGE, LOTTO_RANKING_REWARD } = require('../constants/index.js');

class OutputView {
  printInformationPurchasedLotto(userBuyHowManyLotto, LottoNumberArray) {
    Console.print(PRINT_MESSAGE(userBuyHowManyLotto).PRINT_INFORMATION_PURCHASED_LOTTO);
    LottoNumberArray.forEach((lotto) => {
      Console.print(PRINT_MESSAGE(lotto.getLottoNumber().join(', ')).RENDER_LOTTO_NUMBER);
    });
  }

  printLottoGameResult(lottoResult, profitRate) {
    Console.print(PRINT_MESSAGE().RESULT);
    Console.print(PRINT_MESSAGE().HORIZONTAL_DELIMITER);
    for (let ranking of Object.keys(lottoResult).reverse()) {
      Console.print(PRINT_MESSAGE(LOTTO_RANKING_INFORMATION_MESSAGE[ranking], lottoResult[ranking]).RANK_PRICE_COUNT);
    }
    Console.print(PRINT_MESSAGE(profitRate).PROFIT_RATE);
    Console.close();
  }
}

module.exports = OutputView;
