const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = require("@woowacourse/mission-utils");
const { judgeEachLotto } = require("./LottoJudgement");

const { getLottoNumber, makeLottoArray } = require("./LottoGenerator");
class UiInputLogic {
  #userLottoArray;
  #winLottoNum;
  #BonusNum;

  constructor() {
    this.changePriceToCount();
  }

  changePriceToCount() {
    //구입액 >> 갯수에 맞춰 로또 생성

    Console.readLine("구입금액을 입력해 주세요.", (userInputPrice) => {
      let lottoArray = makeLottoArray(getLottoNumber(userInputPrice));
      this.printLottoArray(lottoArray);
      this.#userLottoArray = lottoArray;
      this.makeWinLottoNumber();
    });
  }

  makeWinLottoNumber() {
    // 로또 당첨번호 배열 생성
    Console.readLine("당첨 번호를 입력해 주세요.", (inputWinNumber) => {
      let lottoWinNumber = inputWinNumber.split(",");
      Console.readLine("보너스 번호를 입력해 주세요.", (inputBonusNumber) => {
        lottoWinNumber.push(inputBonusNumber);
        this.#BonusNum = inputBonusNumber;

        // console.log(lottoWinNumber);
        this.#winLottoNum = lottoWinNumber;

        judgeEachLotto(this.#userLottoArray, this.#winLottoNum, this.#BonusNum);
      });
    });
  }

  printLottoArray(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
      Console.print(inputArray[i]);
    }
  }
}

module.exports = UiInputLogic; //{  makeWinLottoNumber, changePriceToCount, test };
