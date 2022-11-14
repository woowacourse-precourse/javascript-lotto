const Message = require("./Message");

class DetectError {
    isBonusInPrize(prize, bonus) {
        if (prize.includes(bonus)) {
            throw new Error(`${Message.ERROR_MESSAGE.OVERLAP}`);
        }
    }

    checkPrizNumber(przNum) {
        if (przNum.length !== 6) {
            throw new Error(`${Message.ERROR_MESSAGE.COMMA}`);
        }

        przNum.forEach(element => {
            let prizeN = parseInt(element);
            if ((prizeN < 1 || prizeN > 45) || !prizeN) {
                throw new Error(`${Message.ERROR_MESSAGE.RANGE}`);
            }
        });
    }

    checkUserInput(userMoney) {
        const userInput = [...userMoney];
        userInput.forEach(element => {
            if (!(element >= '0' && element <= '9')) {
                throw new Error(`${Message.ERROR_MESSAGE.NUMBER}`);
            }
        });
    }


}




module.exports = DetectError;