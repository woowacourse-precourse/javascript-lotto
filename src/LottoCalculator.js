const { Console } = require("@woowacourse/mission-utils");
const { WINNING, PRINT, LOTTO_RESULT, LOTTO } = require("./lib/library");

class LottoCalculate {
  resultCaculator(lottos, { winLotto, bonus }) {
    Console.print(PRINT.RESULT);
    const resultArr = [];
    lottos.map((lotto) => {
      const result = this.compareLotto(
        lotto.getLottoArr(),
        winLotto.getLottoArr(),
        bonus
      );
      if (result !== undefined) resultArr.push(result);
    });
    return this.calculatorWiningResult([resultArr, lottos.length]);
  }

  compareLotto(lotto, win, bonus) {
    const result = lotto.filter((num) => win.includes(num));
    switch (result.length) {
      case 6:
        return 1;
      case 5:
        if (lotto.includes(bonus)) return 2;
        return 3;
      case 4:
        return 4;
      case 3:
        return 5;
    }
  }

  calculatorWiningResult(result) {
    const wining = { ...LOTTO_RESULT, count: result[1] };
    result[0].map((num) => {
      if (num === 1) wining.FIRST++;
      if (num === 2) wining.SECOND++;
      if (num === 3) wining.THIRD++;
      if (num === 4) wining.FOURTH++;
      if (num === 5) wining.FIFTH++;
    });
    return wining;
  }

  printWinResult(result) {
    const lottoResult = { ...LOTTO_RESULT };
    Object.keys(lottoResult).forEach((rank) => {
      Console.print(WINNING.MENT[rank](result[rank]));
    });

    return this;
  }

  gainPercent(lottoResult, count) {
    let allPrice = 0;
    const winPrice = WINNING.PRICE;
    const purchacePrice = count * LOTTO.PRICE;
    Object.keys(lottoResult).forEach((rank) => {
      allPrice += winPrice[rank] * lottoResult[rank];
    });
    return allPrice !== 0 ? ((allPrice / purchacePrice) * 100).toFixed(1) : 0.0;
  }

  printGainPercent(result) {
    const count = result.count;
    const lottoResult = { ...result };
    delete lottoResult.count;
    Console.print(PRINT.GAIN_PECENT(this.gainPercent(lottoResult, count)));
    return this;
  }
}

module.exports = LottoCalculate;
