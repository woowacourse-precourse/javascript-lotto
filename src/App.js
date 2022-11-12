const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = require("@woowacourse/mission-utils");

const { getLottoNumber, makeLottoArray } = require("./LottoGenerator");
const { makeWinLottoNumber } = require("./Judgement");

class App {
  constructor() {
    this.lottoArray = [];
    this.lottoWinNumber;
  }

  play() {
    // 로또 구입액 인풋
    // Console.readLine("구입금액을 입력해 주세요.", (userInputPrice) => {
    //   this.lottoArray = makeLottoArray(getLottoNumber(userInputPrice));
    //   console.log(this.lottoArray, "play");
    // });

    // 로또 당첨번호 배열 생성
    makeWinLottoNumber();
  }
}
const app = new App();
app.play();

module.exports = App;
