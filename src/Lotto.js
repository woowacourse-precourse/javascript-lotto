const Printer = require("./Printer");
const Generator = require("./Generator");
const Customer = require("./Customer");
const LottoBonus = require("./LottoBonus");
const Validation = require("./Validation");
const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, UNIT } = require("./constant/message");

class Lotto {
    #numbers;

    constructor(numbers) {
        this.printer = new Printer();
        this.amount = new Customer();
        this.lottos = new Generator();
        this.bonus;
        this.resultArray = [];
        this.revenue;
        this.validate(numbers);
        this.#numbers = numbers;
    }

    validate(numbers) {
        Validation.validateExpectNumbers(numbers);
    }
    validateDuplication(bonus) {
        Validation.checkBonusDuplicate(this.#numbers, bonus);
    }

    setAmount() {
        Console.readLine(MESSAGE.PURCHASE, (money) => {
            this.amount = this.amount.getPurchaseAmount(money);
            this.setLottos();
        });
    }

    setLottos() {
        Console.readLine(this.amount + MESSAGE.PURCHASE_RESULT, (money) => {
            this.lottos = this.lottos.getLottos(this.amount);
            this.lottos.forEach((lotto) => {
                Console.print(lotto);
            });
            this.getWinningCount();
        });
    }

    getWinningCount(bonus, lottos) {
        const winningCount = [];
        let BONUS_CHANCE = 10;
        const numbersArray = this.#numbers.split(",");
        numbersArray.push(bonus);

        for (let i = 0; i < lottos.length; i++) {
            let count = 0;
            for (let j = 0; j < numbersArray.length; j++) {
                if (lottos[i].includes(parseInt(numbersArray[j])) && j < numbersArray.length - 1) {
                    count++;
                }
                if (count == 5 && j == numbersArray.length - 1) {
                    count += BONUS_CHANCE;
                }
            }
            winningCount.push(count);
        }
        return winningCount;
    }

    getLottoResult(winningCount) {
        for (let i = 0; i < 5; i++) {
            this.resultArray.push(winningCount.filter((el) => el == i + 3).length);
        }
        this.resultArray[4] += winningCount.filter((el) => el > 10).length;
        [this.resultArray[3], this.resultArray[4]] = [this.resultArray[4], this.resultArray[3]];

        Printer.lottoResult(this.resultArray);

        return this.resultArray;
    }

    showRevenue(resultArray, amount) {
        Console.print(MESSAGE.YIELD + this.getRevenue(resultArray, amount) + "%" + MESSAGE.KOREAN_ENDING_WORD);
    }

    getRevenue(resultArray, amount) {
        let sum = 0;
        for (let i = 0; i < 5; i++) {
            sum += UNIT[i] * resultArray[i];
        }
        return ((sum / amount / UNIT.PRICE) * 100).toFixed(1);
    }
}

module.exports = Lotto;
