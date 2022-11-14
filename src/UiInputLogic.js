const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = require("@woowacourse/mission-utils");

const { getLottoNumber, makeLottoArray } = require("./LottoGenerator");

const changePriceToCount = () => {
  //구입액 >> 갯수에 맞춰 로또 생성

  Console.readLine("구입금액을 입력해 주세요.", (userInputPrice) => {
    let lottoArray = makeLottoArray(getLottoNumber(userInputPrice));
    printLottoArray(lottoArray);
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

const printLottoArray = (inputArray) => {
  for (let i = 0; i < inputArray.length; i++) {
    Console.print(inputArray[i]);
  }
};

module.exports = { makeWinLottoNumber, changePriceToCount };
