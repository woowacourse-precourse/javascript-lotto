const { Random } = require("@woowacourse/mission-utils");
const { GAME_RANGE } = require('./config');

const generateTicket = () => Random.pickUniqueNumbersInRange(
    GAME_RANGE.RANGE_MIN, GAME_RANGE.RANGE_MAX, GAME_RANGE.NUM_LENGTH
).sort((a, b) => a - b);