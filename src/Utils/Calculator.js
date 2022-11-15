class Calculator {
  constructor(matchingResult, bonusNumber, spendMoney) {
    this.totalWinningMoney = 0;
    this.totalLottoResult = {
      "1등": 0,
      "2등": 0,
      "3등": 0,
      "4등": 0,
      "5등": 0,
    };

    this.calculateWinningMoney(matchingResult, bonusNumber);
    this.rateOfReturn = this.calculateRateOfReturn(spendMoney);
  }

  calculateWinningMoney(matchingResult, bonusNumber) {
    const needToCheckBonus = "5";
    this.matchCase = {
      3: this.calculatePrizeMoney,
      4: this.calculatePrizeMoney,
      5: this.calculateBonusMoney,
      6: this.calculatePrizeMoney,
    };

    for (const matchCount in matchingResult) {
      if (matchCount === needToCheckBonus) {
        this.totalBonus(matchCount, matchingResult, bonusNumber);
        continue;
      }

      this.totalPrize(matchCount, matchingResult);
    }
  }

  totalPrize(matchCount, matchingResult) {
    const matchAward = {
      3: "5등",
      4: "4등",
      6: "1등",
    };

    this.totalWinningMoney += this.matchCase[matchCount](matchCount, matchingResult);
    this.totalLottoResult[matchAward[matchCount]] += matchingResult[matchCount];
  }

  totalBonus(matchCount, matchingResult, bonusNumber) {
    if (matchingResult[matchCount] === 0) {
      return 0;
    }
    const bonusCase = this.matchCase[matchCount](matchingResult[matchCount], bonusNumber);
    this.totalWinningMoney += bonusCase[0];
    this.totalLottoResult[bonusCase[1]] += 1;
  }

  calculatePrizeMoney(matchCount, matchingResult) {
    const prizeMoney = {
      3: 5000,
      4: 50000,
      6: 2000000000,
    };
    const result = prizeMoney[matchCount] * Number(matchingResult[matchCount]);
    return result;
  }

  calculateBonusMoney(matchingResult, bonusNumber) {
    const prizeMoney = {
      "2등": 30000000,
      "3등": 1500000,
    };

    if (matchingResult.includes(Number(bonusNumber))) {
      return [prizeMoney["2등"], "2등"];
    }
    if (typeof matchingResult === "object") {
      return [prizeMoney["3등"], "3등"];
    }
  }

  calculateRateOfReturn(spendMoney) {
    if (this.totalWinningMoney !== 0) {
      const rateOfReturn = (this.totalWinningMoney / spendMoney) * 100;
      return this.decimalAdjust(rateOfReturn, -1);
    }
    return 0;
  }

  decimalAdjust(value, exp) {
    value = +value;
    value = value.toString().split("e");
    value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
  }
}

module.exports = Calculator;
