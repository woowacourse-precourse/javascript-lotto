const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constant/message");
const Generator = require("./module/Generator");
const Customer = require("./module/Customer");
const Lotto = require("./Lotto");
const Printer = require("./module/Printer");
const LottoBonus = require("./module/LottoBonus");

class App {
    amount;
    purchaseList;
    winningCount;
    lottoResult;
    revenue;

    constructor() {
        this.lotto;
        this.lottoBonus;
    }

    getInput(message, callback) {
        Console.readLine(message, callback);
    }

    inputMoney = (money) => {
        Printer.spaceLine();
        this.amount = new Customer().getPurchaseAmount(money);
        this.purchaseList = new Generator().getRandomLottos(this.amount);

        Printer.amountResult(this.amount);
        Printer.lottoList(this.purchaseList);
        Printer.spaceLine();

        this.getInput(MESSAGE.LOTTO_NUMBER, this.inputNumbers);
    };

    inputNumbers = (numbers) => {
        Printer.spaceLine();
        this.lotto = new Lotto(numbers);

        this.getInput(MESSAGE.BONUS_NUMBER, this.inputBonusNumber);
    };

    inputBonusNumber = (bonusNumber) => {
        Printer.spaceLine();
        this.lottoBonus = new LottoBonus(bonusNumber);
        this.winningCount = this.lotto.getWinningCount(this.lottoBonus.number, this.purchaseList);
        this.lottoResult = this.lotto.getLottoResult(this.winningCount);
        this.revenue = this.lotto.getRevenue(this.lottoResult, this.amount);

        Printer.lottoResult(this.lottoResult);
        Printer.revenue(this.revenue);
        Console.close();
    };

    play() {
        this.getInput(MESSAGE.PURCHASE, this.inputMoney);
    }
}

const app = new App();
app.play();

module.exports = App;
