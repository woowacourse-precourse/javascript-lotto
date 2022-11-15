const Random = require("@woowacourse/mission-utils").Random;
const Ticket = require("./Ticket");

class Buyer {
	static #validate(money) {
		if (money % Ticket.price())
			throw new Error("[Error] 1000원 단위로 입력해주세요.");
	}
	static #createRandomNumbers() {
		return Random
			.pickUniqueNumbersInRange(1, 45, 6);
	}
	static buy(money) {
		Buyer.#validate(money);
		return Array
			.from({ length: money / Ticket.price()})
			.map(() => new Ticket(Buyer.#createRandomNumbers()));
	}
}

module.exports = Buyer;