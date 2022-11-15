const MissionUtils = require("@woowacourse/mission-utils");
const { THOUSAND, BUY_MESSAGE } = require('./constant/constant');
const sortedLottoNumbers = require('./random/lottoRandomNumber');

class User {
    constructor() {
        this.userBuyMoney = 0;
        this.lottoArray = [];
        this.bonusNumber = 0;
    }

    lottoBuy(money) {
        this.userBuyMoney = Number(money);
        this.makeLotto();
    }

    amountOfBuying() {
        const amount = this.userBuyMoney / THOUSAND;

        return amount;
    }

    makeLotto() {
        const amount = this.amountOfBuying();
        for (let i = 0; i < amount; i++) {
            const randomLottoNumber = sortedLottoNumbers();
            this.saveLotto(randomLottoNumber);
        }

        this.printRandomNumber(this.lottoArray, amount);
    }

    saveLotto(randomNumber) {
        this.lottoArray.push(randomNumber);
    }

    printRandomNumber(randomNumbers, amount) {
        MissionUtils.Console.print(BUY_MESSAGE(amount));
        randomNumbers.forEach((numbers) => {
            MissionUtils.Console.print(`[${numbers.join(', ')}]`);
        })
    }

    saveBonusNumber(bonusNumber) {
        this.bonusNumber = Number(bonusNumber);
    }
}

module.exports = User;