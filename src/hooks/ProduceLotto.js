const { Random } = require("@woowacourse/mission-utils");

class ProduceLotto {
	uniqueRandomNumbers() {
		return Random.pickUniqueNumbersInRange(1, 45, 6);
	}
}

module.exports = ProduceLotto;
