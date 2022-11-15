const { Random } = require("@woowacourse/mission-utils");

class WinLottoNumber {
	pickUniqueNumbers() {
		return Random.pickUniqueNumbersInRange(1, 45, 6);
	}
}

module.exports = WinLottoNumber;
