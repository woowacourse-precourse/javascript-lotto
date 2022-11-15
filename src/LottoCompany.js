const MissionUtils = require("@woowacourse/mission-utils");
const LottoStore = require("./LottoStore");

class LottoCompany {
  drawLottoNumber(lottos) {
    MissionUtils.Console.readLine("\n당첨 번호를 입력해주세요.\n", (input) => {
      this.drawLottoBonusNumber(lottos, input);
    });
  }

  drawLottoBonusNumber(lottos, winningNumbersWithoutBonus) {
    MissionUtils.Console.readLine(
      "\n보너스 번호를 입력해주세요. \n",
      (input) => {
        const winningNumbersString = `${winningNumbersWithoutBonus},${input}`;
        const winningNumbers = this.transferNumberArray(winningNumbersString);
        const lottoStore = new LottoStore();
        lottoStore.analyzeLotto(lottos, winningNumbers);
      }
    );
  }

  transferNumberArray(winningNumbersString) {
    const winningNumberArray = winningNumbersString
      .split(",")
      .map((element) => {
        const winningNumber = parseInt(element);
        this.isNumberValidate(winningNumber);
        return winningNumber;
      });

    return winningNumberArray;
  }

  isNumberValidate(element) {
    if (isNaN(element)) throw new Error("[ERROR] 입력된 값이 숫자가 아닙니다.");
  }
}

module.exports = LottoCompany;
