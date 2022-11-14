const MissionUtils = require("@woowacourse/mission-utils");

class LottoWinningNumber{

  lottoWinningNumber() {
    let winningNumber = "";
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요", (winning) => {
      winningNumber = winning.split(",");
    });
    return winningNumber;
  } 

  lottoWinningNumberSort(numbers) {
		return numbers.sort((a, b) => a - b);
	}
}


module.exports = LottoWinningNumber;