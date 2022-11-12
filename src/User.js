const MissionUtils = require("@woowacourse/mission-utils");
const { BUY_LOTTO, THOUSAND, BUY_MESSAGE } = require('../constant/constant');
const errorBuyHandling = require('./error/userInputHandling');
const sortedLottoNumbers = require('./random/lottoRandomNumber');

class User {
    #userBuy;
    #lottoArray;

    constructor() {
        this.#userBuy = 0;
        this.#lottoArray = [];
    }

    lottoBuy() {
        MissionUtils.Console.readLine(BUY_LOTTO, (input) => {
            errorBuyHandling(input);
            this.#userBuy = Number(input);
            this.makeLotto();
        });
    }

    makeLotto() {
        const buyAmount = parseInt(Number(this.#userBuy)) / THOUSAND;
        MissionUtils.Console.print(BUY_MESSAGE(this.#lottoAmount));
        
        for (let i = 0; i < buyAmount; i++) {
            const randomLottoNumber = sortedLottoNumbers();
            saveLotto(randomLottoNumber);
        }

        this.printRandomNumber(this.#lottoArray);
    }

    saveLotto(randomNumber) {
        this.#lottoArray.push(randomNumber);
    }

    printRandomNumber(randomNumbers) {
        randomNumbers.forEach((numbers) => {
            MissionUtils.Console.print(numbers);
        })
    }
}

module.exports = User;