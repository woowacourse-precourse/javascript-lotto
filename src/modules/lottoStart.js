const MissionUtils = require("@woowacourse/mission-utils");
const generateLottoNum = require("./generateLottoNum");
const lottoProcess = require("./lottoProcess");

class lottoStart {
  constructor() {
    this.generateLottoNum = new generateLottoNum();
    this.lottoProcess = new lottoProcess();
  }
  createStart() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (userCost) => {
      if (isNaN(userCost)) throw new Error('[ERROR] 올바른 숫자를 입력해 주세요.')
      const money = parseInt(userCost);
      if (money % 1000 !== 0 || money === 0)
        throw new Error("[ERROR] 1,000원 단위로 구매해야 합니다.");
      this.lottoProcess.lottoBuy(userCost);
    });
  }
}

module.exports = lottoStart;
