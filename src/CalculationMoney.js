const { Random } = require("@woowacourse/mission-utils");

class CalculationOfLottoGame {
  HowManyCanBuyLotto(money) {
    return money / 1000;
  }

  makeUsersLotto(numOfLotto) {
    let lottoNum = [];
    let i = 0;

    for (; i < numOfLotto; i++) {
      let randomNum = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNum.push(randomNum.sort((a, b) => a - b));
    }
    return lottoNum;
  }

  makeWinningOfLottoArr(usersLotto, winLotto) {
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
  checkOfBonusNumHave(usersLotto, bonusNum, { index }) {
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
            this.checkOfBonusNumHave(userHaveLotto, bonusNum, { index: i }) ===
            false
          ) {
            classOfLotto.set("3등", classOfLotto.get("3등") + 1);
            break;
          }

          if (
            this.checkOfBonusNumHave(userHaveLotto, bonusNum, { index: i }) ===
            true
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

  makeAmountOfWinningMoney(result) {
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
const calculationOfLottoGame = new CalculationOfLottoGame();

module.exports = calculationOfLottoGame;
