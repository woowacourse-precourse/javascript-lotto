const MissionUtils = require("@woowacourse/mission-utils");
const { THOUSAND, BUY_MESSAGE } = require('../constant/constant');
const sortedLottoNumbers = require('./random/lottoRandomNumber');

class User {
    #userBuyMoney;
    #lottoAmount;
    #lottoArray;

    constructor(money) {
        this.#userBuyMoney = money;
        this.#lottoAmount = 0;
        this.#lottoArray = [];
    }

    lottoBuy() {
        this.amountOfBuying();
        this.makeLotto(this.#lottoAmount);
    }

    amountOfBuying() {
        this.#lottoAmount = parseInt(Number(this.#userBuyMoney)) / THOUSAND;
    }

    makeLotto(buyAmount) {
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
        MissionUtils.Console.print(BUY_MESSAGE(randomNumbers.length));
        randomNumbers.forEach((numbers) => {
            MissionUtils.Console.print(numbers);
        })
    }
}

module.exports = User;