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
	}
}

module.exports = App;
