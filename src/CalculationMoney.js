const { Console, Random } = require("@woowacourse/mission-utils");

class CalculationMoney {
  canBuyLotto(money) {
    return money / 1000;
  }

  makeLotto(parchaedLottoNum) {
    let lottoNum = [];
    let i = 0;

    for (; i < parchaedLottoNum; i++) {
      let randomNum = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNum.push(randomNum.sort((a, b) => a - b));
    }
    return lottoNum;
  }

  makeWinningNumArr(userLotto, winLotto) {
    let i = 0;
    let winningNumArr = [];

    for (; i < userLotto.length; i++) {
      let find = userLotto[i].filter((lottoNum) =>
        winLotto.includes(String(lottoNum))
      );

      winningNumArr.push(find.length);
    }

    return winningNumArr;
  }

  resultOfSecondOrThirdClass(madeLotto, bonuseNum, winningNumArr) {
    let lotto = new Map();
    lotto.set("2등", 0);
    lotto.set("3등", 0);
    for (let i = 0; i < madeLotto.length; i++) {
      if (winningNumArr[i] === 5 && madeLotto[i].includes(bonuseNum) === true) {
        lotto.set("2등", lotto.get("2등") + 1);
      }
      if (
        winningNumArr[i] === 5 &&
        madeLotto[i].includes(bonuseNum) === false
      ) {
        lotto.set("3등", lotto.get("3등") + 1);
      }
    }
    return lotto;
  }
  resultOfLottoClass(winningNumArr) {
    let classOfLotto = new Map();
    classOfLotto.set("5등", 0);
    classOfLotto.set("4등", 0);
    classOfLotto.set("1등", 0);

    for (let i = 0; i < winningNumArr.length; i++) {
      switch (winningNumArr[i]) {
        case 3:
          classOfLotto.set("5등", classOfLotto.get("5등") + 1);
          break;
        case 4:
          classOfLotto.set("4등", classOfLotto.get("4등") + 1);
          break;
        case 6:
          classOfLotto.set("1등", classOfLotto.get("1등") + 1);
          break;
      }
    }
    return classOfLotto;
  }
}
module.exports = CalculationMoney;
