const MissionUtils = require("@woowacourse/mission-utils");
const generateLottoNum = require('./generateLottoNum')

class lottoStart {
    constructor() {
        this.generateLottoNum = new generateLottoNum();
    }
    createStart() {
        return MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (userCost) => {
            console.log(this.generateLottoNum.lottoDetail(userCost));
          })
    }
}

module.exports = lottoStart