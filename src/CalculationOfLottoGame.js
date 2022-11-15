const { Random } = require("@woowacourse/mission-utils");

function checkOfBonusNumHave(usersLotto, bonusNum, { index }, winLotto) {
  if (usersLotto[index].includes(parseInt(bonusNum)) === true) {
    return winLotto.set("2등", winLotto.get("2등") + 1);
  }

  return winLotto.set("3등", winLotto.get("3등") + 1);
}

function ascendingArr(array) {
  return array.sort((a, b) => a - b);
}

class CalculationOfLottoGame {
  HowManyCanBuyLotto(money) {
    return money / 1000;
  }

  makeUsersLotto(numOfLotto) {
    let lottoNum = [];
    let i = 0;

    for (; i < numOfLotto; i++) {
      let randomNum = Random.pickUniqueNumbersInRange(1, 45, 6);

      lottoNum.push(ascendingArr(randomNum));
    }
    return lottoNum;
  }

  makeWinningOfLottoArr(usersLottos, winLotto) {
    let i = 0;
    let winningNumArr = [];

    for (; i < usersLottos.length; i++) {
      let howManyOverLap = usersLottos[i].filter((userLotto) =>
        winLotto.includes(String(userLotto))
      );

      winningNumArr.push(howManyOverLap.length);
    }

    return winningNumArr;
  }

  makeArrayOfArrayPlusNum(array, num) {
    return [...array, num];
  }

  resultOfLottoClass(winningNum, userHaveLotto, bonusNum) {
    let winLotto = new Map();

    winLotto.set("5등", 0);
    winLotto.set("4등", 0);
    winLotto.set("3등", 0);
    winLotto.set("2등", 0);
    winLotto.set("1등", 0);

    let i = 0;

    for (; i < winningNum.length; i++) {
      switch (winningNum[i]) {
        case 3:
          winLotto.set("5등", winLotto.get("5등") + 1);
          break;

        case 4:
          winLotto.set("4등", winLotto.get("4등") + 1);
          break;

        case 5:
          checkOfBonusNumHave(userHaveLotto, bonusNum, { index: i }, winLotto);
          break;

        case 6:
          winLotto.set("1등", winLotto.get("1등") + 1);
          break;
      }
    }
    return winLotto;
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
