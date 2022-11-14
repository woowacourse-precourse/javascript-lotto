const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const { Lotto, createLotto } = require("./Lotto");

class App {
  myPayment;
  myLottoNumber;
  allLottos = [];
  bonusNumber;

  play() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.buyLotto(money);
      this.inputMyNumber();
    });
  }

  // 로또 구입 금액만큼 새로운 로또번호를 발급하는 기능
  buyLotto(money) {
    this.checkErrorBuyingLotto(money);

    this.myPayment = Number(money);
    let quantity = money / 1_000;

    Console.print(`\n${quantity}개를 구매했습니다.`);

    while (quantity > 0) {
      const lotto = createLotto().getNumbers();
      this.allLottos.push(lotto);
      Console.print(`[${lotto.join(", ")}]`);
      quantity--;
    }
  }

  // 사용자가 올바른 금액을 입력했는지 확인하는 기능
  checkErrorBuyingLotto(money) {
    if (isNaN(money)) {
      throw new Error("[ERROR] 숫자만 입력해 주세요.");
    }

    if (money % 1_000) {
      throw new Error("[ERROR] 로또는 1,000원 단위로 구매 가능합니다.");
    }
  }

  // 사용자가 당첨 번호를 입력하는 기능
  inputMyNumber() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (myLottoNumber) => {
      myLottoNumber = this.convertToArr(myLottoNumber);
      this.myLottoNumber = new Lotto(myLottoNumber).getNumbers();
      this.inputBonusNumber();
    });
  }

  // 입력한 당첨 번호를 유효한 로또 번호로 변환하는 기능
  convertToArr(str) {
    let arr = [];
    let left = 0;

    for (let i = 1; i < str.length; i++) {
      if (str[i] === ",") {
        arr.push(Number(str.slice(left, i)));
        left = i + 1;
      }
    }

    arr.push(Number(str.slice(left)));

    return arr;
  }

  // 사용자가 보너스 번호를 입력하는 기능
  inputBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해주세요.\n", (bonusNumber) => {
      if (this.checkBonusNumber(bonusNumber)) {
        this.bonusNumber = Number(bonusNumber);
      }
      this.outputStatus();
    });
  }

  // 보너스 번호가 유효한 번호인지 검증하는 기능
  checkBonusNumber(number) {
    number = Number(number);
    if (number > 45 || number < 1 || isNaN(number)) {
      throw new Error("[ERROR] 1 ~ 45 사이의 숫자만 입력해주세요.");
    }

    if (this.myLottoNumber.includes(number)) {
      throw new Error(
        "[ERROR] 입력하신 로또번호와 중복되지 않는 번호를 입력해주세요."
      );
    }

    return true;
  }

  // 로또 번호를 확인하여 당첨 내역을 확인하는 기능
  outputStatus() {
    let result = [];

    for (let lotto of this.allLottos) {
      result.push(
        this.checkLottoWin(lotto, this.myLottoNumber, this.bonusNumber)
      );
    }

    this.calculateOutput(result);
  }

  // 로또 한 판의 당첨 여부를 확인하는 기능
  checkLottoWin(lotto, myLottoNumber, bonusNumber) {
    let counter = 0;

    for (let number of myLottoNumber) {
      if (lotto.includes(number)) {
        counter++;
      }
    }

    if (counter === 3) return [5, 5_000];
    if (counter === 4) return [4, 50_000];
    if (counter === 5 && !lotto.includes(bonusNumber)) return [3, 1_500_000];
    if (counter === 5 && lotto.includes(bonusNumber)) return [2, 30_000_000];
    if (counter === 6) return [1, 2_000_000_000];
    return [6, 0];
  }

  // 당첨 내역을 계산하는 기능
  calculateOutput(result) {
    let winStatus = {
      6: 0,
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    };
    let sumOfMoney = 0;

    for (let el of result) {
      winStatus[el[0]]++;
      sumOfMoney += el[1];
    }

    this.myResult(winStatus, sumOfMoney);
  }

  // 당첨 내역을 출력하고, 게임을 종료하는 기능
  myResult(winStatus, sumOfMoney) {
    Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${winStatus["5"]}개
4개 일치 (50,000원) - ${winStatus["4"]}개
5개 일치 (1,500,000원) - ${winStatus["3"]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${winStatus["2"]}개
6개 일치 (2,000,000,000원) - ${winStatus["1"]}개
총 수익률은 ${(
      Math.round((sumOfMoney / this.myPayment) * 100 * 10) / 10
    ).toLocaleString("ko-KR")}%입니다.`);
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
