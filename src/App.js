const IO = require('./utils/io');
const Prompter = require('./Prompter');
const Lotto = require('./Lotto');
const Book = require('./Book');
const Pick = require('./utils/pick');
const Evaluator = require('./Evaluator');
const Bonus = require('./Bonus');
class App {
	book;
	evaluator;
	tickets;
	lotto;
	bonus;

	constructor() {
		this.book = new Book();
		this.evaluator = new Evaluator();
	}

	play() {
		this.getInvest();
	}

	getInvest() {
		Prompter.promptInvest(this.handleInvest.bind(this));
	}

	handleInvest(invest) {
		this.book.setInvest(Number(invest));
		const boughtCnt = this.book.getAffordableCnt();
		Prompter.logBoughtCnt(boughtCnt);
		this.getRandomTickets(boughtCnt);
	}

	getRandomTickets(boughtCnt) {
		const tickets = Array(boughtCnt).fill(0);
		tickets.forEach((v, i, arr) => {
			const pick = Pick.getSixNums().sort((a, b) => a - b);
			arr[i] = pick;
			IO.output('[' + pick.join(', ') + ']');
		});
		this.tickets = tickets;
		this.getAnswer();
	}

	getAnswer() {
		Prompter.promptAnswer(this.handleAnswer.bind(this));
	}

	handleAnswer(answer) {
		this.lotto = new Lotto(answer.split(',').map((v) => Number(v)));
		this.getBonus();
	}

	getBonus() {
		Prompter.promptBonus(this.handleBonus.bind(this));
	}

	handleBonus(bonus) {
		this.bonus = new Bonus(Number(bonus), this.lotto);
	}
}

module.exports = App;
