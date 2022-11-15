const { Console } = require("@woowacourse/mission-utils");
const { WINNING, PRINT, LOTTO_RESULT, LOTTO } = require("./lib/library");

class LottoCalculate {
  //순위와 카운트가 같이 있는 객체
  #result;
  #count;
  #gainPercent;
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
    this.#count = lottos.length;
    this.#result = this.calculatorWiningResult(resultArr);
    return this;
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

  calculatorWiningResult(resultArr) {
    const wining = { ...LOTTO_RESULT };
    resultArr.map((num) => {
      if (num === 1) wining.FIRST++;
      if (num === 2) wining.SECOND++;
      if (num === 3) wining.THIRD++;
      if (num === 4) wining.FOURTH++;
      if (num === 5) wining.FIFTH++;
    });
    return wining;
  }

  gainPercent() {
    let allPrice = 0;
    const winPrice = WINNING.PRICE;
    const purchacePrice = this.#count * LOTTO.PRICE;
    Object.keys(this.#result).forEach((rank) => {
      allPrice += winPrice[rank] * this.#result[rank];
    });
    this.#gainPercent =
      allPrice !== 0 ? ((allPrice / purchacePrice) * 100).toFixed(1) : 0.0;
    return this;
  }

  getLottoResult() {
    return [this.#result, this.#gainPercent];
  }
}

module.exports = LottoCalculate;
