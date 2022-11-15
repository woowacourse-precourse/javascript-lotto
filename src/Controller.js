const { Random } = require('@woowacourse/mission-utils');
const CheckWinning = require('./checkWinning');
const Lotto = require('./Lotto');
const Calculate = require('./Calculate');
const View = require('./view');
const WinningNumber = require('./winning-number');

const { NUMBERS_LIMIT, ERROR_MESSAGE } = require('./constant/constantOfLotto');
const { MIN_NUMBER, MAX_NUMBER, COUNT, UNIT_AMOUNT } = NUMBERS_LIMIT;
const { INCORRECT_AMOUNT_NUMBER_MESSAGE, INCORRECT_COST_MESSAGE } = ERROR_MESSAGE;

class Controller {
    constructor() {
        this.lottos = [];
        this.view = new View(this);
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

        View.printLottoList(this.lottos);
        this.view.inputWinningNumber();
    }

    setWinningNumber(answer) {
        this.winningNumber.setWinningNumber(answer);
        this.view.bonusNumberInput();
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
        View.printResult(winningCount, earningCount);
        View.endGame();
    }

    init() {
        this.view.inputCost();
    }
}

module.exports = Controller;