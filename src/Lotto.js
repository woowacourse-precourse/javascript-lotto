const Validation = require("./module/Validation");
const { UNIT, OPTION, BONUS_OPTION } = require("./constant/message");
const LottoBonus = require("./module/LottoBonus");

class Lotto {
    #numbers;

    constructor(numbers) {
        this.resultArray = [];
        this.bonus;
        this.validate(numbers);
        this.#numbers = numbers;
    }

    validate(numbers) {
        Validation.validateExpectNumbers(numbers);
    }

    getWinningCount(bonus, lottoList) {
        this.bonus = new LottoBonus(bonus).number;
        Validation.checkBonusDuplicate(this.#numbers, bonus);
        const winningCountList = [];
        const winningNumbers = this.#numbers.split(",");

        lottoList.forEach((lotto) => {
            let winningCount = this.findWinningCount(lotto, winningNumbers);
            winningCountList.push(winningCount);
        });

        return winningCountList;
    }
    findWinningCount(lotto, winningNumbers) {
        let count = 0;
        for (let j = 0; j < winningNumbers.length; j++) {
            if (lotto.includes(parseInt(winningNumbers[j])) && j < winningNumbers.length) {
                count++;
            }
        }
        // 보너스 번호로 당첨되는 2등의 경우에는 별도의 표시 남기기 ex) 5개일치(5) + 보너스번호일치(10) = 15
        if (count == 5 && lotto.includes(Number(this.bonus))) {
            count += BONUS_OPTION.CHANCE;
        }
        return count;
    }

    getLottoResult(winningCount) {
        for (let i = 0; i < 5; i++) {
            this.resultArray.push(winningCount.filter((el) => el == i + 3).length);
        }
        this.sortBonusPlace(this.resultArray, winningCount);
        return this.resultArray;
    }
    sortBonusPlace(resultArray, winningCount) {
        // 5, 4, 3, 1, 2 순서로 담긴 등수를 5, 4, 3, 2, 1 순서로 바꿔주기
        resultArray[4] += winningCount.filter((el) => el > BONUS_OPTION.CHANCE).length;
        [resultArray[3], resultArray[4]] = [resultArray[4], resultArray[3]];
    }

    getRevenue(resultArray, amount) {
        let sum = 0;
        for (let i = 0; i < 5; i++) {
            sum += UNIT[i] * resultArray[i];
        }
        return ((sum / amount / OPTION.PRICE) * 100).toFixed(1);
    }
}

module.exports = Lotto;
