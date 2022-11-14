const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = require("@woowacourse/mission-utils");
const LottoJudgement = require("./LottoJudgement");
const Lotto = require("./Lotto");
const { InputUI, ErrorUI } = require("./Contants");

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
    Console.readLine(InputUI.inputPrice, (userInputPrice) => {
      let countLotto = getLottoNumber(userInputPrice);
      Console.print(`${countLotto}${InputUI.lottoNum}`);
      let lottoArray = makeLottoArray(getLottoNumber(userInputPrice));
      this.#inputMoney = userInputPrice;
      this.printLottoArray(lottoArray);
      this.#userLottoArray = lottoArray;
      this.makeWinLottoNumber();
    });
  }

  makeWinLottoNumber() {
    Console.readLine(InputUI.winNumInput, (inputWinNumber) => {
      let lottoWinNumber = inputWinNumber.split(",").map(Number);
      const lotto = new Lotto(lottoWinNumber);
      Console.readLine(InputUI.bonusNumInput, (inputBonusNumber) => {
        lotto.validateBonusNum(inputBonusNumber);
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
    Console.print(InputUI.winStatistic);
    for (let i = 0; i < InputUI.Statics.length; i++) {
      Console.print(`${InputUI.Statics[i]} ${scoreBoard[4 - i]}개`);
    }
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
