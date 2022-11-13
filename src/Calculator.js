class Calculator {
  constructor(matchingResult, bonusNumber, spendMoney) {
    this.prizeMoney = {
      "1등": 2000000000,
      "2등": 30000000,
      "3등": 1500000,
      "4등": 50000,
      "5등": 5000,
    };

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
    for (const matchCount in matchingResult) {
      switch (matchCount) {
        case "3": {
          this.calculateRanking("5등", matchingResult, matchCount);
          continue;
        }
        case "4": {
          this.calculateRanking("4등", matchingResult, matchCount);
          continue;
        }
        case "5": {
          this.calculateBonusMoney(matchingResult[matchCount], Number(bonusNumber));
          continue;
        }
        case "6": {
          this.calculateRanking("1등", matchingResult, matchCount);
          continue;
        }
      }
    }
  }

  calculateRanking(ranking, matchingResult, matchCount) {
    this.totalWinningMoney += this.prizeMoney[ranking] * Number(matchingResult[matchCount]);
    this.totalLottoResult[ranking] += Number(matchingResult[matchCount]);
  }

  calculateBonusMoney(matchingResult, bonusNumber) {
    if (matchingResult !== 0 && matchingResult.includes(bonusNumber)) {
      this.totalWinningMoney += this.prizeMoney["2등"];
      this.totalLottoResult["2등"] += 1;
      return;
    }
    if (typeof matchingResult === "object") {
      this.totalWinningMoney += this.prizeMoney["3등"];
      this.totalLottoResult["3등"] += 1;
      return;
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
