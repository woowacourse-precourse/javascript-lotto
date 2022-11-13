const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require('../Lotto')
const isResult = require('./isResult')
const generateLottoNum = require('./generateLottoNum')


class sayWinningBonus {
    constructor() {
        this.winningNum = [];
        this.bonusNum = null;
        this.isResult = new isResult();

    }

    sayWinning() {
        MissionUtils.Console.print("");
        MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (userInput) => {
            const numbers = userInput.split(',').map((number) => {
                if(number < 1 || number > 45) throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
                return parseInt(number)
            })
            new Lotto(numbers)
            this.winningNum = numbers;
            this.sayBonus()
        })
    }
    sayBonus() {
        MissionUtils.Console.print("");
        MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (userInput) => {
            if (isNaN(userInput)) throw new Error('[ERROR] 보너스 번호의 형식이 올바르지 않습니다.')
            const number = parseInt(userInput)
            if(number < 1 || number > 45) throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
            if(this.winningNum.includes(number)) throw new Error("[ERROR] 보너스 번호가 입력한 당첨 번호에 있습니다.")
            this.bonusNum = number;
            this.isResult.resultProcess()
        })
    }
}

module.exports = sayWinningBonus