const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = require("@woowacourse/mission-utils");

const changePriceToCount = () => {
  Console.readLine("구입금액을 입력해 주세요.", (userInputPrice) => {
    this.lottoArray = makeLottoArray(getLottoNumber(userInputPrice));
    console.log(this.lottoArray, "play");
  });
};

const makeWinLottoNumber = () => {
  // 로또 당첨번호 배열 생성
  Console.readLine("당첨 번호를 입력해 주세요.", (inputWinNumber) => {
    lottoWinNumber = inputWinNumber.split(",");

    Console.readLine("보너스 번호를 입력해 주세요.", (inputBonusNumber) => {
      lottoWinNumber.push(inputBonusNumber);
      console.log(lottoWinNumber);
      return lottoWinNumber;
    });
  });
};

module.exports = { makeWinLottoNumber, changePriceToCount };
