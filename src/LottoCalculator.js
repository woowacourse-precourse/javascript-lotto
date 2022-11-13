const { Console } = require("@woowacourse/mission-utils");
const { WINNING, PRINT, LOTTO_RESULT, LOTTO } = require("./lib/library");
const Lotto = require("./Lotto");

class LottoCalculate {
  resultCaculator(lottos, { winLotto, bonus }) {
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
    const MENT = { ...WINNING.MENT };
    Object.keys(MENT).forEach((win) => {
      Console.print(MENT[win](result[win]));
    });
    return this;
  }

  printGainPercent(result) {
    const count = result.count;
    const lottoResult = { ...result };
    const price = WINNING.PRICE;
    delete lottoResult.count;
    let allPrice = 0;
    Object.keys(lottoResult).forEach((rank) => {
      console.log(rank, price[rank], lottoResult[rank]);
      allPrice += price[rank] * lottoResult[rank];
    });
    const gainPercent = ((allPrice / (count * LOTTO.PRICE)) * 100).toFixed(2);
    Console.print(PRINT.GAIN_PECENT(gainPercent));
    return;
  }
}

// const a = new LottoCalculate();

// a.printWinResult(result);
// a.printGainPercent(result);

// a.printWinResult({ FIRST: 0, SECOND: 0, THIRD: 1, FOURTH: 2, FIFTH: 0 });

module.exports = LottoCalculate;
