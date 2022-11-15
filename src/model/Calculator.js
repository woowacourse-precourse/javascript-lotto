const Result = require("./Result");
const Ticket = require("./Ticket");

//싱글톤 패턴
class Calculator {
	#ticketList = [];
	#lottery;
	static #instance;
	constructor() {
		if (Calculator.#instance)
			return Calculator.#instance;
		Calculator.#instance = this;
	}

	#calcTotalPrice() {
		return this.#ticketList.length * Ticket.price();
	}

	#calcScores() {
		const answerNumbers = this.#lottery.getNumbers();
		const bonusNumber = this.#lottery.getBonus();
		return this.#ticketList.map((ticket) => 
			ticket.correctCount(answerNumbers) + (ticket.hasNumber(bonusNumber) ? 0.5 : 0));
	}

	appendTicket(ticket) {
		this.#ticketList.push(ticket);
	}

	setLottery(lottery) {
		this.#lottery = lottery;
	}

	emptyTicket() {
		this.#ticketList.splice(0, this.#ticketList.length);
	}

	calculate() {
		return new Result(this.#calcScores(), this.#calcTotalPrice());
	}
}

module.exports = Calculator;