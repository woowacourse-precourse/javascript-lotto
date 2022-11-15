const ErrorMessage = require('./constants/errorMessage');
const Reward = require('./constants/reward');

class Book {
	#invest;
	#earnings;

	setInvest(invest) {
		this.validateInvest(invest);
		this.#invest = invest;
	}

	getAffordableCnt() {
		return this.#invest / 1000;
	}

	validateInvest(invest) {
		this.isNotNumber(invest);
		this.isNotThousand(invest);
	}

	isNotNumber(invest) {
		if (isNaN(invest)) throw new Error(ErrorMessage.INVEST_NOT_NUMBER);
	}

	isNotThousand(invest) {
		if (invest % 1000) throw new Error(ErrorMessage.INVEST_NOT_THOUSAND);
	}

	setEarnings(score) {
		let earnings = 0;
		Object.keys(score).forEach((v) => {
			const cnt = score[v];
			const rewardPerCnt = Reward[v.toUpperCase()];
			earnings += cnt * rewardPerCnt;
		});
		this.#earnings = earnings;
	}

	getProfitRate() {
		const rate = (this.#earnings / this.#invest) * 100;
		const rounded = (Math.round(rate * 10) / 10).toFixed(1);
		return rounded + '%';
	}
}

module.exports = Book;
