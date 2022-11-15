const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
    purchaseAmountArr = [];
    lotteryNumbersArr = [];
    lotteryWinningNumbersArr = [];
    lotteryBonusNumberArr = [];
    winningThreeArr = [];
    winningFourArr = [];
    winningFiveArr = [];
    winningFivePlusBonusArr = [];

    contrastFivePlusBonus() {
        let countFivePlusBonus = 0;
        for (let x of this.lotteryNumbersArr) {
            let intersection = x.getNumber().filter(y => this.lotteryWinningNumbersArr[0].getNumber().includes(y))
            if (intersection.length === 5 && x.getNumber().includes(this.lotteryBonusNumberArr[0])) {
                countFivePlusBonus++;
            }
        }
        this.winningFivePlusBonusArr.push(countFivePlusBonus);
    }

    contrastFive() {
        let countFive = 0;
        for (let x of this.lotteryNumbersArr) {
            let intersection = x.getNumber().filter(y => this.lotteryWinningNumbersArr[0].getNumber().includes(y))
            if (intersection.length === 5 && !x.getNumber().includes(this.lotteryBonusNumberArr[0])) {
                countFive++;
            }
        }
        this.winningFiveArr.push(countFive);
        this.contrastFivePlusBonus();
    }

    contrastFour() {
        let countFour = 0;
        for (let x of this.lotteryNumbersArr) {
            let intersection = x.getNumber().filter(y => this.lotteryWinningNumbersArr[0].getNumber().includes(y))
            if (intersection.length === 4) {
                countFour++;
            }
        }
        this.winningFourArr.push(countFour);
        this.contrastFive();
    }

    contrastThree() {
        let countThree = 0;

        for (let x of this.lotteryNumbersArr) {
            let intersection = x.getNumber().filter(y => this.lotteryWinningNumbersArr[0].getNumber().includes(y))
            if (intersection.length === 3) {
                countThree++;
            }
        }
        this.winningThreeArr.push(countThree);
        this.contrastFour();
    }

    lotteryBonusNumber() {
        MissionUtils.Console.print("\n보너스 번호를 입력해 주세요.");
        MissionUtils.Console.readLine("", (inputNumber) => {
            let lotteryBonusNumber = parseInt(inputNumber);
            this.lotteryBonusNumberArr.push(lotteryBonusNumber);
            this.contrastThree();
        });
    }

    lotteryWinningNumbers() {
        MissionUtils.Console.print("\n당첨 번호를 입력해 주세요.");
        MissionUtils.Console.readLine("", (inputNumbers) => {
            let lotteryWinningNumbers = inputNumbers.split(",").map(Number)
            this.lotteryWinningNumbersArr.push(new Lotto(lotteryWinningNumbers));
            this.lotteryBonusNumber();
        });
    }

    showLotteryNumbers() {
        this.lotteryNumbersArr.forEach((lotto) => {
            MissionUtils.Console.print(`[${String(lotto.getNumber()).split(',').join(', ')}]`);
        });
    }

    lotteryNumbers(numberOfPurchases) {
        let count = 0;
        while (count < numberOfPurchases) {
            let lotteryNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
            count++;
            this.lotteryNumbersArr.push(new Lotto(lotteryNumbers))
        }
        this.showLotteryNumbers()
        this.lotteryWinningNumbers()
    }

    purchaseAmount() {
        MissionUtils.Console.readLine("", (purchaseAmount) => {
            if (!/^\d+$/.test(purchaseAmount))
                throw new Error("[ERROR] 문자를 입력할 수 없습니다.");
            const amount = parseInt(purchaseAmount);
            if (amount === 0)
                throw new Error("[ERROR] 구입금액이 입력되지 않았습니다.");
            if (amount % 1000 !== 0)
                throw new Error("[ERROR] 구입금액의 단위는 1000원입니다.");
            let purchaseAmountString = purchaseAmount.toString();
            let numberOfPurchases = parseInt(purchaseAmountString.slice(0, -3))
            MissionUtils.Console.print("\n" + numberOfPurchases + "개를 구매했습니다.");
            this.purchaseAmountArr.push(purchaseAmount);
            this.lotteryNumbers(numberOfPurchases);
        });
    }

    play() {
        MissionUtils.Console.print("구입금액을 입력해 주세요.");
        this.purchaseAmount();
    }
}

module
    .exports = App;
