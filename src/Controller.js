const console = require("@woowacourse/mission-utils").Console;
const InputView = require("./views/InputView");
const Calculator = require("./model/Calculator");
const Lottery = require("./model/Lottery");
const Buyer = require("./model/Buyer");
const PROMPT = require("./enum");

class Controller {
	#purchaseInput;
	#answerInput;
	#bonusAnswerInput;
	#calculator;
	#lotteryBuilder;
	constructor() {
		this.#purchaseInput = new InputView(PROMPT.PURCHASE, this.#purchase.bind(this));
		this.#answerInput = new InputView(PROMPT.ANSWER, this.#chargeAnswer.bind(this));
		this.#bonusAnswerInput = new InputView(PROMPT.BONUS, this.#chargeBonus.bind(this));
		this.#calculator = new Calculator();
		this.#lotteryBuilder = new Lottery.Builder();
	}

	#purchase(command) {
		const purchaseMoney = parseInt(command);

		const ticketList = Buyer.buy(purchaseMoney);
		ticketList.forEach((ticket) => this.#calculator.appendTicket(ticket));
		console.print(ticketList.map((ticket) => ticket.getNumbers()));
		this.#answerInput.render();
	}

	#chargeAnswer(command) {
		const answerNumbers = command
			.split(",")
			.map((number) => parseInt(number.trim()));
		this.#lotteryBuilder.setNumbers(answerNumbers);
		this.#bonusAnswerInput.render();
	}

	#chargeBonus(command) {
		const bonusNumber = parseInt(command);
		this.#lotteryBuilder.setBonus(bonusNumber);
		this.#compareAnswer();
	}
	
	#compareAnswer() {
		this.#calculator.chargeLottery(this.#lotteryBuilder.build());
		const result = this.#calculator.calculate();
		const profitRate = result.profitRate();
		console.print("당첨 통계\n---");
		const printResult = result.stringify().map(({count, price, bonus}, idx) =>
			`${idx + 3}개 일치 (${price}원) - ${count}개`);
		printResult.push(`총 수익률은 ${profitRate}%입니다.`);
		console.print(printResult.join("\n"));
	}

	run() {
		this.#purchaseInput.render();
	}
}

module.exports = Controller;