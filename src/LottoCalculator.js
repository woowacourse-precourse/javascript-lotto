const { Console } = require("@woowacourse/mission-utils");
const { WINNING, PRINT, LOTTO_RESULT, LOTTO } = require("./lib/library");
const Lotto = require("./Lotto");

class LottoCalculate {
  resultCaculator(lottos, { winLotto, bonus }) {
    console.log(winLotto, bonus);
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

const a = new LottoCalculate();

const result = a.resultCaculator(
  [
    new Lotto([1, 2, 3, 4, 5, 6]),
    new Lotto([1, 32, 2, 4, 5, 6]),
    new Lotto([1, 2, 3, 4, 5, 6]),
  ],
  { winLotto: new Lotto([1, 2, 3, 4, 5, 6]), bonus: 7 }
);

a.printWinResult(result);
a.printGainPercent(result);

// console.log("1등", a.compareLotto([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 8));

// console.log("2등", a.compareLotto([1, 2, 3, 4, 5, 8], [1, 2, 3, 4, 5, 6], 8));

// console.log("3등", a.compareLotto([1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6], 8));

// console.log("4등", a.compareLotto([1, 2, 3, 4, 9, 10], [1, 2, 3, 4, 5, 6], 8));

// console.log("5등", a.compareLotto([1, 2, 3, 9, 10, 12], [1, 2, 3, 4, 5, 6], 8));

// console.log(
//   a.resultCaculator(
//     [
//       [1, 2, 3, 4, 5, 6],
//       [1, 32, 2, 4, 5, 6],
//       [1, 2, 3, 4, 5, 6],
//       [1, 32, 13, 24, 5, 6],
//       [1, 22, 23, 44, 5, 6],
//       [1, 12, 32, 24, 5, 6],
//       [1, 22, 33, 4, 5, 6],
//     ],
//     [1, 2, 3, 4, 5, 6],
//     7
//   )
// );
// a.printWinResult({ FIRST: 0, SECOND: 0, THIRD: 1, FOURTH: 2, FIFTH: 0 });

module.exports = LottoCalculate;
