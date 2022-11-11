const MissionUtils = require("@woowacourse/mission-utils");

class LottoWinningNumber{

  lottoWinningNumber() {
    let winningNumber = "";
    MISSION.Console.readLine("당첨 번호를 입력해주세요", () => {
      winningNumber = winningNumber.split(",");
    });
    return winningNumber;
  } 

  lottoWinningNumberSort(numbers) {
		return numbers.sort((a, b) => a - b);
	}
}


module.exports = LottoWinningNumber;