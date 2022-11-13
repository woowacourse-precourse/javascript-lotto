const Message = require("./Message");

class DetectError {
    isBonusInPrize(prize, bonus) {
        if (prize.includes(bonus)) {
            throw new Error(`${Message.ERROR_MESSAGE.OVERLAP}`);
        }
    }
}




module.exports = DetectError;