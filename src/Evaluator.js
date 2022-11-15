class Evaluator {
	#score;
	#cntToScore;

	constructor() {
		this.#score = {
			first: 0,
			second: 0,
			third: 0,
			fourth: 0,
			fifth: 0,
		};
		this.#cntToScore = {
			6: 'first',
			5: 'third',
			4: 'fourth',
			3: 'fifth',
		};
	}

	getScore(tickets, lotto, bonus) {
		return this.evaluateTickets(tickets, lotto, bonus);
	}

	evaluateTickets(tickets, lotto, bonus) {
		for (let i = 0; i < tickets.length; i++) {
			const matchedCnt = lotto.getMatchedCnt(tickets[i]);
			if (matchedCnt === 5) this.checkIfBonusMatched(tickets[i], bonus);
			else if (matchedCnt in this.#cntToScore) ++this.#score[this.#cntToScore[matchedCnt]];
		}
		return this.#score;
	}

	checkIfBonusMatched(ticket, bonus) {
		if (ticket.includes(bonus.getBonus())) ++this.#score.second;
	}
}

module.exports = Evaluator;
