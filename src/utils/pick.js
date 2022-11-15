const MissionUtils = require('@woowacourse/mission-utils');
const Random = MissionUtils.Random;

class Pick {
	static getSixNums() {
		return Random.pickUniqueNumbersInRange(1, 45, 6);
	}
}

module.exports = Pick;
