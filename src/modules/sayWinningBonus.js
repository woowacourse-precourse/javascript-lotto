const MissionUtils = require("@woowacourse/mission-utils");


class sayWinningBonus {
    sayWinning() {
        MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (userInput) => {
            if (!/^(\d{1,2}[,]){5}\d{1,2}$/.test(userInput)) throw new Error("[ERROR] 입력형식이 올바르지 않습니다.");
            const numbers = userInput.split(',').map((number) => {
                if(number < 1 || number > 45) throw new Error("[ERROR] 1 ~ 45 사이의 숫자를 입력해야 합니다.")
                return parseInt(number)
            })
            const numberSet = new Set(numbers);
            if(numberSet.size !== numbers.length) throw new Error("[ERROR] 중복된 번호가 있습니다.")
        })
    }
}

module.exports = sayWinningBonus