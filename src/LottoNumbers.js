const MissionUtils = require("@woowacourse/mission-utils");

class LottoNumbers{
    #NUMBERS;
    #BONUS_NUMBER

    constructor() {
        this.inputUserNumber();
        this.inputBonusNumber();
    }

    inputUserNumber() {
        MissionUtils.Console.readLine("당첨번호를 입력해주세요", (input) => {
            this.#NUMBERS = this.sliceNumber(input);
            this.validate(this.#NUMBERS);
        })
    }

    inputBonusNumber() {
        MissionUtils.Console.readLine("보너스 번호를 입력해주세요", (input) => {
            this.#BONUS_NUMBER = input;
            this.errorHandler(this.#BONUS_NUMBER);
        })
    }

    sliceNumber(input) {
        return input.split(',').map((item) => {
            return parseInt(item);
          })
    }

    validate(NUMBERS) {
        const lottoSet = new Set(NUMBERS);
        if (lottoSet.size != NUMBERS.length) {
          throw new Error("[ERROR] 중복된 숫자를 입력할 수 없습니다.");
        }
    
        for (let item of lottoSet.values()) {
          if (item < 1 | item > 45) {
            throw new Error("[ERROR] 1 ~ 45까지의 숫자만 입력할 수 있습니다.")
          }
        }
    }

    errorHandler(numbers, BONUS_NUMBER) {
        if (BONUS_NUMBER < 1 | BONUS_NUMBER > 45) {
            throw new Error("[ERROR] 1 ~ 45까지의 숫자만 입력할 수 있습니다.");
          }

        if (numbers.includes(BONUS_NUMBER)) {
            throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
          }
    }

    getNumbers() {
        return this.#NUMBERS;
    }

    getBonusNumber() {
        return this.#BONUS_NUMBER;
    }
}

module.exports = LottoNumbers;