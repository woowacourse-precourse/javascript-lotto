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
    Console.print(usersLotto[index]); // 이건 당첨번호
    Console.print(bonusNum);
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
}
module.exports = CalculationMoney;

/*
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
  }*/
