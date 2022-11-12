const { Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoCalculate {
  #winLotto;
  #boughtLottos;
  #bonusNum;

  constructor(win, lottos, bonus) {
    this.#winLotto = win;
    this.#boughtLottos = lottos;
    this.#bonusNum = bonus;
  }

  resultCaculator(lottos, win) {}

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

  printWinResult() {}
  printGainPercent() {}
}

const a = new LottoCalculate();
console.log("1등", a.compareLotto([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 8));

console.log("2등", a.compareLotto([1, 2, 3, 4, 5, 8], [1, 2, 3, 4, 5, 6], 8));

console.log("3등", a.compareLotto([1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6], 8));

console.log("4등", a.compareLotto([1, 2, 3, 4, 9, 10], [1, 2, 3, 4, 5, 6], 8));

console.log("5등", a.compareLotto([1, 2, 3, 9, 10, 12], [1, 2, 3, 4, 5, 6], 8));

module.exports = LottoCalculate;
