const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoCalculate {
  #winLotto;
  #boughtLottos;
  #bonusNum;

  constructor(lottos, win) {
    this.#boughtLottos = lottos;
    this.#winLotto = win.lotto;
    this.#bonusNum = win.bonus;
  }

  resultCaculator(lottos, win, bonus) {
    const resultArr = [];
    lottos.map((lotto) => {
      const result = this.compareLotto(lotto, win, bonus);
      if (result !== undefined) resultArr.push(result);
    });
    return resultArr;
  }

  compareLotto(my, win, bonus) {
    const result = my.filter((num) => win.includes(num));
    switch (result.length) {
      case 6:
        return 1;
      case 5:
        if (my.includes(bonus)) return 2;
        return 3;
      case 4:
        return 4;
      case 3:
        return 5;
    }
  }

  printWinResult(result) {}
  printGainPercent() {}
}

const a = new LottoCalculate(
  [
    [8, 21, 23, 41, 42, 43],
    [3, 5, 11, 16, 32, 38],
    [7, 11, 16, 35, 36, 44],
    [1, 8, 11, 31, 41, 42],
    [13, 14, 16, 38, 42, 45],
    [7, 11, 30, 40, 42, 43],
    [2, 13, 22, 32, 38, 45],
    [1, 3, 5, 14, 22, 45],
  ],
  { lotto: [1, 2, 3, 4, 5, 6], bonus: 7 }
);

console.log("1등", a.compareLotto([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 8));

console.log("2등", a.compareLotto([1, 2, 3, 4, 5, 8], [1, 2, 3, 4, 5, 6], 8));

console.log("3등", a.compareLotto([1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6], 8));

console.log("4등", a.compareLotto([1, 2, 3, 4, 9, 10], [1, 2, 3, 4, 5, 6], 8));

console.log("5등", a.compareLotto([1, 2, 3, 9, 10, 12], [1, 2, 3, 4, 5, 6], 8));

console.log(
  a.resultCaculator(
    [
      [1, 2, 3, 4, 5, 6],
      [1, 32, 2, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 32, 13, 24, 5, 6],
      [1, 22, 23, 44, 5, 6],
      [1, 12, 32, 24, 5, 6],
      [1, 22, 33, 4, 5, 6],
    ],
    [1, 2, 3, 4, 5, 6],
    7
  )
);

module.exports = LottoCalculate;
