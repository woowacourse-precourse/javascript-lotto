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

  makeWinningNumArr(usersLotto, winLotto) {
    let i = 0;
    let winningNumArr = [];

    for (; i < usersLotto.length; i++) {
      let find = usersLotto[i].filter((lottoNum) =>
        winLotto.includes(String(lottoNum))
      );

      winningNumArr.push(find.length);
    }

    return winningNumArr; // 맞춘 로또 몇개인지 배열!
  }
  checkInBonus(usersLotto, bonusNum, { index }) {
    if (usersLotto[index].includes(parseInt(bonusNum)) === true) {
      return true;
    }
    if (usersLotto[index].includes(bonusNum) === false) {
      return false;
    }
  }

  resultOfLottoClass(winningNumArr, userHaveLotto, bonusNum) {
    let classOfLotto = new Map();
    classOfLotto.set("5등", 0);
    classOfLotto.set("4등", 0);
    classOfLotto.set("3등", 0);
    classOfLotto.set("2등", 0);
    classOfLotto.set("1등", 0);
    for (let i = 0; i < winningNumArr.length; i++) {
      switch (winningNumArr[i]) {
        case 3:
          classOfLotto.set("5등", classOfLotto.get("5등") + 1);
          break;

        case 4:
          classOfLotto.set("4등", classOfLotto.get("4등") + 1);
          break;

        case 5:
          if (
            this.checkInBonus(userHaveLotto, bonusNum, { index: i }) === false
          ) {
            classOfLotto.set("3등", classOfLotto.get("3등") + 1);
            break;
          }

          if (
            this.checkInBonus(userHaveLotto, bonusNum, { index: i }) === true
          ) {
            classOfLotto.set("2등", classOfLotto.get("2등") + 1);
            break;
          }

        case 6:
          classOfLotto.set("1등", classOfLotto.get("1등") + 1);
          break;
      }
    }
    return classOfLotto;
  }

  makeWinningAmount(result) {
    let winningAmount = 0;
    for (let i = 0; i < result.length; i++) {
      switch (result[i][0]) {
        case "5등":
          winningAmount = winningAmount + 5000 * result[i][1];
          break;
        case "4등":
          winningAmount = winningAmount + 50000 * result[i][1];
          break;
        case "3등":
          winningAmount = winningAmount + 1500000 * result[i][1];
          break;
        case "2등":
          winningAmount = winningAmount + 30000000 * result[i][1];
          break;
        case "1등":
          winningAmount = winningAmount + 2000000000 * result[i][1];
          break;
      }
    }
    return winningAmount;
  }
}
module.exports = CalculationMoney;
