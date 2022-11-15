const MissionUtils = require("@woowacourse/mission-utils");
const MyLotto = require("./MyLotto");
const Lotto = require("./Lotto");


class Statistics {
  constructor() {
      this.WIN_STATISTICS = {
        "3개 일치 (5,000원)": 0,
        "4개 일치 (50,000원)": 0,
        "5개 일치 (1,500,000원)": 0,
        "5개 일치, 보너스 볼 일치 (30,000,000원)": 0,
        "6개 일치 (2,000,000,000원)": 0,
      };
    }

  compareLottoNum() {
      let EQUAL_NUM = {
        EQUAL_WINNING_NUM: 0,
        EQUAL_BONUS_NUM: 0,
      };

      for (let num of this.MY_LOTTO_NUM) {
        if (this.LOTTO_WINNING_NUM.includes(num)) {
          EQUAL_NUM.EQUAL_WINNING_NUM += 1;
        }
        if (this.LOTTO_BONUS_NUM === num) {
          EQUAL_NUM.EQUAL_BONUS_NUM += 1;
        }
      }
      return EQUAL_NUM;
    }

  winCost(EQUAL_WINNING_NUM, EQUAL_BONUS_NUM) {

    if (EQUAL_WINNING_NUM + EQUAL_BONUS_NUM === 3) {
        this.WIN_STATISTICS["3개 일치 (5,000원)"] += 1;
      }
    else if (EQUAL_WINNING_NUM + EQUAL_BONUS_NUM === 4) {
        this.WIN_STATISTICS["4개 일치 (50,000원)"] += 1;
      }
    else if (EQUAL_WINNING_NUM + EQUAL_BONUS_NUM === 5) {
        this.WIN_STATISTICS["5개 일치 (1,500,000원)"] += 1;
      }
    else if (EQUAL_WINNING_NUM === 5 && EQUAL_BONUS_NUM === 1) {
        this.WIN_STATISTICS["5개 일치, 보너스 볼 일치 (30,000,000원)"] += 1;
      }
    else if (EQUAL_WINNING_NUM === 6) {
        this.WIN_STATISTICS["6개 일치 (2,000,000,000원)"] += 1;
      }

    MissionUtils.Console.print(this.WIN_STATISTICS);
    }

  getEarnings() {
    let EARNINGS = 0;
    
    for (let LOTTO_RESULT in this.WIN_STATISTICS) {
      if (LOTTO_RESULT === "3개 일치 (5,000원)") {
        EARNINGS += this.WIN_STATISTICS[LOTTO_RESULT] * 5000;
      }
      if (LOTTO_RESULT === "4개 일치 (50,000원)") {
        EARNINGS += this.WIN_STATISTICS[LOTTO_RESULT] * 50000;
      }
      if (LOTTO_RESULT === "5개 일치 (1,500,000원)") {
        EARNINGS += this.WIN_STATISTICS[LOTTO_RESULT] * 1500000;
      }
      if (LOTTO_RESULT === "5개 일치, 보너스 볼 일치 (30,000,000원)") {
        EARNINGS += this.WIN_STATISTICS[LOTTO_RESULT] * 30000000;
      }
      if (LOTTO_RESULT === "6개 일치 (2,000,000,000원)") {
        EARNINGS += this.WIN_STATISTICS[LOTTO_RESULT] * 2000000000;
      }
    }
    
    return EARNINGS;
  }
    
  getEarningsRate(EARNINGS) {
    const EARNINGS_RATE = (EARNINGS / this.#money) * 100;
    return EARNINGS_RATE.toFixed(1);
  }

  printWinContent() {
    MissionUtils.Console.print("당첨 통계");
    MissionUtils.Console.print("---");

    for (let LOTTO_RESULT in this.WIN_STATISTICS) {
      MissionUtils.Console.print(`${LOTTO_RESULT} - ${this.WIN_STATISTICS[LOTTO_RESULT]} + 개`);
    }

    MissionUtils.Console.print(
      `총 수익률은 ${this.getEarningsRate(EARNINGS)}%입니다.`
    );
  }
}