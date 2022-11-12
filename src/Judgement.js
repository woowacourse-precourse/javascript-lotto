const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = require("@woowacourse/mission-utils");

const makeWinLottoNumber = () => {
  // 로또 당첨번호 배열 생성
  Console.readLine("당첨 번호를 입력해 주세요.", (inputWinNumber) => {
    lottoWinNumber = inputWinNumber.split(",");
    console.log(lottoWinNumber);
  });
};

module.exports = { makeWinLottoNumber };
