const PRICE_POLICY = Object.freeze({
	6: 2_000_000_000,
	5.5: 30_000_000,
	5: 1_500_000,
	4: 50_000,
	3: 5_000,
});

class Result {
	#scoreCounts;
	#totalPrice;
	constructor(scores, totalPrice) {
		this.#scoreCounts = Result.#calcScoresCount(scores);
		this.#totalPrice = totalPrice;
	}

	static #calcScoresCount(scores) {
		const scoreCounts = Object.fromEntries(Object
				.entries(PRICE_POLICY)
				.map((item) => [item[0], 0]));
		return scores.reduce((acc, score) => {
			if (score in scoreCounts) acc[score] += 1
			return acc;
		}, scoreCounts);
	}
	
	static #calcReward(scoreCounts) {
		return Object.entries(scoreCounts).reduce((acc, [score, count]) =>
			acc + PRICE_POLICY[score] * count, 0);
	}
	
	profitRate() {
		return (Result.#calcReward(this.#scoreCounts) * (100 / this.#totalPrice)).toFixed(1);
	}

	stringify() {
		return Object.entries(this.#scoreCounts).map(([score, count]) => {
			return {
				count,
				score: +score,
				price: PRICE_POLICY[score]
			}
		})
	}
}

module.exports = Result;