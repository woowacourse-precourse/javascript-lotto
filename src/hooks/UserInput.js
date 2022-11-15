const Lotto = require("../Lotto");
const ProduceLotto = require("./ProduceLotto");

class UserInput {
	payment;

	constructor(payment) {
		this.payment = payment;
	}

	buyLotto(numbers) {
		const userLotto = this.userLotto(numbers);
		const lotto = userLotto.map(token => new Lotto(token));

		return lotto;
	}

	userLotto(numbers) {
		const produceLotto = new ProduceLotto();
		const userLotto = [];

		let count = 0;
		while (count < numbers) {
			userLotto.push(produceLotto.uniqueRandomNumbers().sort((a, b) => a - b));
			count = count + 1;
		}

		return userLotto;
	}

	comparedNumber(userlotto, winNumbers, bonusNumbers) {
		let count = 0;
		const bonus = userlotto.includes(bonusNumbers) ? 1 : 0;
		count = winNumbers.reduce(
			(acc, cur) => (acc += userlotto.includes(cur) ? 1 : 0),
			0
		);

		return { count, bonus };
	}

	matchingNumber(count, bonus, list) {
		const matchingCount = [...list];

		if (count === 5 && bonus === 1) {
			matchingCount[count + bonus] += 1;
		} else {
			matchingCount[count] += 1;
		}

		return matchingCount;
	}

	countMatchingNumber(lotto, winNumbers, bonusNumbers) {
		let matchingCountList = [0, 0, 0, 0, 0, 0, 0, 0];

		lotto.forEach(lotto => {
			const { count, bonus } = this.comparedNumber(
				lotto.lottoNumbers(),
				winNumbers,
				bonusNumbers
			);

			matchingCountList = [
				...this.matchingNumber(count, bonus, matchingCountList),
			];
		});

		return matchingCountList;
	}

	calculateProceeds(countMatchingList) {
		const WinAmount = [0, 0, 0, 5000, 50000, 1500000, 30000000, 2000000000];

		const proceeds = countMatchingList.reduce(
			(acc, cur, index) => (acc += WinAmount[index] * cur),
			0
		);

		return proceeds;
	}

	rateOfReturn(payment, proceeds) {
		return ((proceeds / payment) * 100).toFixed(1);
	}
}

module.exports = UserInput;
