const {View, printPurchase, printResult} = require("./View");
const Calculator = require("./model/Calculator");
const Lottery = require("./model/Lottery");
const Buyer = require("./model/Buyer");
const { isNumber } = require("./validator");
const PROMPT = require("./enum");

class Controller {
	#purchaseInput;
	#answerInput;
	#bonusAnswerInput;
	#calculator;
	#lotteryBuilder;
	constructor() {
		this.#purchaseInput = new View(PROMPT.PURCHASE, this.#purchase.bind(this));
		this.#answerInput = new View(PROMPT.ANSWER, this.#chargeAnswer.bind(this));
		this.#bonusAnswerInput = new View(PROMPT.BONUS, this.#chargeBonus.bind(this));
		this.#calculator = new Calculator();
		this.#lotteryBuilder = new Lottery.Builder();
	}

	#validate(numbers) {
		if (numbers.some((number) => !isNumber(number)))
			throw new Error("[ERROR] 숫자를 입력하세요.");
	}

	#purchase(command) {
		this.#validate([command]);
		const purchaseMoney = parseInt(command);
		const ticketList = Buyer.buy(purchaseMoney);
		ticketList.forEach((ticket) => this.#calculator.appendTicket(ticket));
		printPurchase(ticketList.map((item) => item.getNumbers()));
		this.#answerInput.render();
	}

	#chargeAnswer(command) {
		const numbers = command.split(",").map((number) => number.trim());
		this.#validate(numbers);
		this.#lotteryBuilder.setLotto(numbers.map(Number));
		this.#bonusAnswerInput.render();
	}

	#chargeBonus(command) {
		this.#validate([command]);
		const bonusNumber = parseInt(command);
		this.#lotteryBuilder.setBonus(bonusNumber);
		this.#calculator.setLottery(this.#lotteryBuilder.build());
		const result = this.#calculator.calculate();
		printResult(result.stringify(), result.profitRate());
		View.close();
	}

	run() {
		this.#purchaseInput.render();
		this.#calculator.emptyTicket();
	}
}

module.exports = Controller;