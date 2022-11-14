const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = require("@woowacourse/mission-utils");
const LottoJudgement = require("./LottoJudgement");

const {
  getLottoNumber,
  makeLottoArray,
  calculateProfit,
  estimateProfit,
} = require("./LottoGenerator");

class LottoGameStart {
  #userLottoArray;
  #winLottoNum;
  #BonusNum;
  #inputMoney;

  constructor() {
    this.changePriceToCount();
  }

  changePriceToCount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (userInputPrice) => {
      let countLotto = getLottoNumber(userInputPrice);
      Console.print(`${countLotto}개를 구매했습니다.`);
      let lottoArray = makeLottoArray(getLottoNumber(userInputPrice));
      this.#inputMoney = userInputPrice;
      this.printLottoArray(lottoArray);
      this.#userLottoArray = lottoArray;
      this.makeWinLottoNumber();
    });
  }

  makeWinLottoNumber() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (inputWinNumber) => {
      let lottoWinNumber = inputWinNumber.split(",").map(Number);
      Console.readLine("보너스 번호를 입력해 주세요.\n", (inputBonusNumber) => {
        this.#winLottoNum = lottoWinNumber;
        this.#BonusNum = Number(inputBonusNumber);
        const lottoJudgement = new LottoJudgement(
          this.#userLottoArray,
          this.#winLottoNum,
          this.#BonusNum
        );
        lottoJudgement.judgeStart();
        this.printResultStatic(lottoJudgement.getScoreBoard());
      });
    });
  }

  printResultStatic(scoreBoard) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${scoreBoard[4]}개`);
    Console.print(`4개 일치 (50,000원) - ${scoreBoard[3]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${scoreBoard[2]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${scoreBoard[1]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${scoreBoard[0]}개`);
    Console.print(
      `총 수익률은 ${estimateProfit(scoreBoard, this.#inputMoney)}%입니다.`
    );
    Console.close();
  }

  printLottoArray(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
      inputArray[i].sort(function (a, b) {
        return a - b;
      });
      let convertString = inputArray[i].join(", ");
      MissionUtils.Console.print(`[${convertString}]`);
    }
  }
}

module.exports = LottoGameStart;
