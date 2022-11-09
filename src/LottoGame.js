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
    if (/^[1-9]*$/g.test(arr.join("")) === false) {
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
      if (arr[i] > 45) {
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
      Console.print(bonusNum);
    });
  }
}
module.exports = LottoGame;

// node src/index.js
