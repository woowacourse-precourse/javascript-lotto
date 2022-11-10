const { Console, Random } = require("@woowacourse/mission-utils");

class LottoGame {
  lineBreak() {
    Console.print(``);
  }

  getUserMoney() {
    Console.readLine("구매금액을 입력해 주세요", (money) => {
      this.checkUserMoney(money);

      this.showlottoNumOfBuying(money);

      this.showLotto(money);

      this.getwinningNum();
    });
  }

  checkUserMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error(`[ERROR] 돈은 1000원 단위로 입력이 가능합니다.`);
    }
    if (money <= 0) {
      throw new Error(`[ERROR] 돈은 1000원부터 입력이 가능합니다.`);
    }
  }

  lottoNumOfBuying(money) {
    return money / 1000;
  }

  showlottoNumOfBuying(money) {
    Console.print(`${this.lottoNumOfBuying(money)}개를 구매했습니다.`);

    this.lineBreak();
  }

  makeLotto(money) {
    const buyingNum = this.lottoNumOfBuying(money);
    let lottoNum = [];
    let i = 0;

    for (; i < buyingNum; i++) {
      let randomNum = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNum.push(randomNum.sort((a, b) => a - b));
    }
    return lottoNum;
  }

  showLotto(money) {
    this.userLotto = this.makeLotto(money);

    let i = 0;

    for (; i < this.userLotto.length; i++) {
      Console.print(this.userLotto[i]);
    }

    this.lineBreak();
  }

  getwinningNum() {
    Console.readLine("당첨 번호를 입력해 주세요.", (winningNum) => {
      this.winningNum = winningNum.split(",");

      this.checkWinningNum(this.winningNum);

      this.lineBreak();

      this.getBonusNum();
    });
  }

  checkWinningNum(willCheckWinningNum) {
    if (this.checkRange(willCheckWinningNum) === false) {
      throw new Error(`[ERROR] 0은 입력이 불가능합니다.`);
    }

    if (this.checkComma(willCheckWinningNum) === false) {
      throw new Error(`[ERROR] ,이 연속으로 입력되었습니다.`);
    }

    if (this.checkNumLength(willCheckWinningNum) === false) {
      throw new Error(`[ERROR] 당첨 번호는 1~45 사이에 있습니다.`);
    }
    if (this.checkCount(willCheckWinningNum) === false) {
      throw new Error(`[ERROR] 당첨 번호는 6개만 입력이 가능합니다.`);
    }
  }

  checkRange(arr) {
    if (/^[0-9]*$/g.test(arr.join("")) === false) {
      return false;
    }
  }
  checkComma(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ``) {
        return false;
      }
    }
  }

  checkNumLength(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 45 || arr[i] < 1) {
        return false;
      }
    }
  }

  checkCount(arr) {
    if (arr.length !== 6) {
      return false;
    }
  }
  // willCheckWinningNum => ["1","2","3","4","5","6"]

  getBonusNum() {
    Console.readLine("보너스 번호를 입력해 주세요.", (bonusNum) => {
      this.bonusNum = bonusNum;
      this.checkBonusNum(this.bonusNum);

      this.totalWinningNum = [...this.winningNum, this.bonusNum];

      //만약 bonuseNum 이 있어? 그러면 따로 계산
      Console.print(this.userLotto);
      Console.print(this.totalWinningNum);

      const totalCorrect = this.findCorrectNum(); //총 맞춘갯수

      //여기서 5가있는지 확인하는게 빠르겠다.

      const secondOrThird = this.secondOfThird(totalCorrect);
      const classOfLotto = this.classOfLotto(totalCorrect);

      Console.print(secondOrThird);
      Console.print(classOfLotto);
      Console.print(
        [...secondOrThird, ...classOfLotto].sort((a, b) => a[0] - b[0])
      );
    });
  }

  secondOfThird(totalCorrect) {
    let lotto = new Map();

    lotto.set("2등", 0);
    lotto.set("3등", 0);

    for (let i = 0; i < totalCorrect.length; i++) {
      if (totalCorrect[i] === 5) {
        this.checkInBonusNum(i, lotto);
      }
    }
    return lotto;
  }

  checkInBonusNum(index, lotto) {
    if (this.userLotto[index].includes(this.bonusNum) === true) {
      lotto.set("2등", lotto.get("2등") + 1);
    }
    if (this.userLotto[index].includes(this.bonusNum) === false) {
      lotto.set("3등", lotto.get("3등") + 1);
    }
  }

  checkBonusNum(num) {
    if (num > 45 || num < 1) {
      throw new Error(`[ERROR] 1~45사이의 번호를 입력해주세요`);
    }
    if (num) {
      if (/^[0-9]*$/g.test(num) === false) {
        throw new Error(`[ERROR] 숫자만을 입력해주세요`);
      }
    }
    if (this.winningNum.includes(num) === true) {
      throw new Error(
        `[ERROR] 당첨번호에 입력한 숫자를 보너스 번호에 입력할 수 없습니다.`
      );
    }
  }

  findCorrectNum() {
    let i = 0;
    let correctArr = [];

    for (; i < this.userLotto.length; i++) {
      let find = this.userLotto[i].filter((lottoNum) =>
        this.totalWinningNum.includes(String(lottoNum))
      );

      correctArr.push(find.length);
    }

    return correctArr;
  }

  classOfLotto(correctArr) {
    let classOfLotto = new Map();
    classOfLotto.set("5등", 0);
    classOfLotto.set("4등", 0);
    classOfLotto.set("1등", 0);

    for (let i = 0; i < correctArr.length; i++) {
      switch (correctArr[i]) {
        case 3:
          classOfLotto.set("5등", classOfLotto.get("4등") + 1);
          break;
        case 4:
          classOfLotto.set("4등", classOfLotto.get("3등") + 1);
          break;
        case 6:
          classOfLotto.set("1등", classOfLotto.get("1등") + 1);
          break;
      }
    }
    return classOfLotto;
  }
}

module.exports = LottoGame;

// 출력할때 Case로 1,2,3,4,5 등 렌더링

// node src/index.js
