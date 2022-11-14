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
}

module.exports = LottoGameStart;
