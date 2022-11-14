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
}

module.exports = LottoGameStart;
