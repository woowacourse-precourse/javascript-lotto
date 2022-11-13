const Printer = require("./Printer");
const Generator = require("./Generator");
const Customer = require("./Customer");
const LottoBonus = require("./LottoBonus");
const Validation = require("./Validation");
const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, UNIT } = require("./constant/message");

class Lotto {
    #numbers;

    constructor(numbers, bonusNumber) {
        // 입력받은 번호 유효성 검사
        this.printer = new Printer();
        this.amount = new Customer();
        this.lottos = new Generator();
        this.bonus = new LottoBonus(bonusNumber);
        this.resultArray = [];
        this.revenue;
        this.validate(numbers);
        this.#numbers = numbers;
    }

    validate(numbers) {
        Validation.checkInteger(numbers);
        Validation.checkNumbersLength(numbers);
        Validation.checkRange(numbers);
        Validation.checkNumbersDuplicate(numbers);
        Validation.checkBonusDuplicate(numbers, this.bonus.number);
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

    // printLottos(lottos) {
    //     this.lottos.forEach((lotto) => {
    //         Console.print(lotto);
    //     });
    // }

    getWinningCount() {
        const winningCount = [];
        let BONUS_CHANCE = 10;
        const numbersArray = this.#numbers.split(",");
        numbersArray.push(this.bonus.number);

        console.log(this.lottos);

        for (let i = 0; i < this.lottos.length; i++) {
            let count = 0;
            for (let j = 0; j < numbersArray.length; j++) {
                if (this.lottos[i].includes(parseInt(numbersArray[j])) && j < numbersArray.length - 1) {
                    count++;
                }
                if (count == 5 && j == numbersArray.length - 1) {
                    count += BONUS_CHANCE;
                }
            }
            winningCount.push(count);
        }
        console.log(winningCount);
        this.setResultArray(winningCount);
    }

    setResultArray(winningCount) {
        for (let i = 0; i < 5; i++) {
            this.resultArray.push(winningCount.filter((el) => el == i + 3).length);
        }
        this.resultArray[4] += winningCount.filter((el) => el > 10).length;
        [this.resultArray[3], this.resultArray[4]] = [this.resultArray[4], this.resultArray[3]];

        console.log(this.resultArray);
        Printer.lottoResult(this.resultArray);
        this.setRevenue(this.resultArray);
    }

    setRevenue(resultArray) {
        const sum = (resultArray) => {
            let sum = 0;
            for (let i = 0; i < 5; i++) {
                sum += UNIT[i] * resultArray[i];
            }
            return MESSAGE.YIELD + ((sum / this.amount / UNIT.PRICE) * 100).toFixed(1) + "%" + MESSAGE.KOREAN_ENDING_WORD;
        };
        console.log(sum(this.resultArray));
    }
}

module.exports = Lotto;

// const lt = new Lotto("1,2,3,4,5,6", "7");

// lt.setAmount();
