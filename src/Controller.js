const { Random } = require('@woowacourse/mission-utils');
const CheckWinning = require('./checkWinning');
const Lotto = require('./Lotto');
const Calculate = require('./Calculate');
const Display = require('./Display');
const WinningNumber = require('./WinningNumber');

const { NUMBERS_LIMIT, ERROR_MESSAGE } = require('./constant/constantOfLotto');
const { MIN_NUMBER, MAX_NUMBER, COUNT, UNIT_AMOUNT } = NUMBERS_LIMIT;
const { INCORRECT_AMOUNT_NUMBER_MESSAGE, INCORRECT_COST_MESSAGE } = ERROR_MESSAGE;

class Controller {
    constructor() {
        this.lottos = [];
        this.display = new Display(this);
        this.winningNumber = new WinningNumber();
        this.checkWinning = new CheckWinning(this);
        this.calculate = new Calculate(this);
    }

    costValidate(input) {
        if (input[0] === '0') throw new Error(INCORRECT_COST_MESSAGE);

        if (Number(input) / UNIT_AMOUNT < 1) throw new Error(INCORRECT_COST_MESSAGE);

        input.split('').forEach((number) => {
            if (Number(number) >= 0 && Number(number) <= 9) return;

            throw new Error(INCORRECT_AMOUNT_NUMBER_MESSAGE);
        });
        this.issueLotto(input);
    }

    issueLotto(answer) {
        const count = Math.trunc(answer / UNIT_AMOUNT);
        this.totalAmount = count * UNIT_AMOUNT;

        for (let index = 0; index < count; index += 1) {
            this.lottos.push(
                new Lotto(Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, COUNT)),
            );
        }

        Display.printLottoList(this.lottos);
        this.display.inputWinningNumber();
    }

    setWinningNumber(answer) {
        this.winningNumber.setWinningNumber(answer);
        this.display.inputBonusNumber();
    }

    setBonusNumber(answer) {
        this.winningNumber.setBonusNumber(answer);
        this.compareLotto();
    }

    compareLotto() {
        this.checkWinning.checkLotto();
        this.endGame();
    }

    endGame() {
        const winningCount = this.checkWinning.getCountWinning();
        const earningCount = this.calculate.getYield(winningCount);
        Display.printResult(winningCount, earningCount);
        Display.endGame();
    }

    init() {
        this.display.inputCost();
    }
}

module.exports = Controller;