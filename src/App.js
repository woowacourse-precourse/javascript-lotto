const MissionUtils = require("@woowacourse/mission-utils");
const { changeLottoClass } = require("./Lotto.js");
const lotto = require("./Lotto.js");

class App {
  inputPurchaseAmount() {
    MissionUtils.Console.readLine(
      "구입 금액을 입력해주세요.\n",
      (inputMoney) => {
        return this.checkPurchaseAmount(inputMoney);
      }
    );
  }

  inputWinNumber() {
    MissionUtils.Console.readLine(
      "\n당첨 번호를 입력해주세요.\n",
      (winNumber) => {
        return this.winNumberArr(winNumber);
      }
    );
  }

  checkPurchaseAmount(inputMoney) {
    //금액 입력 예외 처리
    if (isNaN(inputMoney)) throw new Error("[ERROR] 숫자만 입력하세요.");

    const INPUT_MONEY = parseInt(inputMoney);
    if (INPUT_MONEY < 1000)
      throw new Error("[ERROR] 1000원 이상으로 입력하세요.");
    if (INPUT_MONEY % 1000 != 0)
      throw new Error("[ERROR] 1000 단위로 입력하세요.");

    this.printLottoNumber(INPUT_MONEY / 1000);
  }

  printLottoNumber(lottoCnt) {
    MissionUtils.Console.print(`\n${lottoCnt}개를 구매했습니다.`);
    this.pickRandomNumber(lottoCnt).forEach((lottoSixNum) =>
      MissionUtils.Console.print(lottoSixNum)
    );
    this.inputWinNumber();
  }
  pickRandomNumber(lottoCnt) {
    let pickNumberArray = [];
    for (let i = 0; i < lottoCnt; i++) {
      pickNumberArray.push(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      );
    }
    return pickNumberArray;
  }

  winNumberArr(winNumber) {
    const WIN_NUMBER_ARRAY = winNumber.split(",").map((x) => parseInt(x));
    changeLottoClass(WIN_NUMBER_ARRAY);
  }

  play() {
    this.inputPurchaseAmount();
  }
}

let app = new App();
app.play();

module.exports = App;
