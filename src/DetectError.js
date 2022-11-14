const Message = require("./Message");

class DetectError {
    isBonusInPrize(prize, bonus) {

        if (bonus.length === 0) {
            throw new Error(`${Message.ERROR_MESSAGE.NUMBER}`);
        }

        if (prize.includes(bonus)) {
            throw new Error(`${Message.ERROR_MESSAGE.OVERLAP}`);
        }

        this.checkNumberHasString(bonus.toString());
    }

    checkPrizNumber(przNum) {
        let idx = 0;
        if (przNum.length !== 6) {
            throw new Error(`${Message.ERROR_MESSAGE.COMMA}`);
        }

        przNum.forEach(element => {
            this.checkNumberHasString(element);
        });

        przNum.forEach(element => {
            let prizeN = parseInt(element);
            if ((prizeN < 1 || prizeN > 45) || !prizeN) {
                throw new Error(`${Message.ERROR_MESSAGE.RANGE}`);
            }
        });
    }

    checkUserInput(userMoney) {
        const userInput = [...userMoney];
        

        if (userInput.length === 0) {
            throw new Error(`${Message.ERROR_MESSAGE.NUMBER}`);
        }
        
        this.checkNumberHasString(userInput);
    }

    checkNumberHasString(ele) {
        let idx = 0;
        ele = [...ele];
        
        ele.forEach(element => {
            if (element === '0' && idx === 0) {
                throw new Error(`${Message.ERROR_MESSAGE.NUMBER}`);
            }
            if (!(element >= '0' && element <= '9')) {
                throw new Error(`${Message.ERROR_MESSAGE.NUMBER}`);
            }
            idx++;
        });

    }


}




module.exports = DetectError;