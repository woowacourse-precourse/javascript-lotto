const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
class LottoMachine {
    static createLotto() {
        const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        this.sortNumbersAscending(lottoNumbers);
        return lottoNumbers;
    }

    static sortNumbersAscending(numberArray) {
        numberArray.sort(function (a, b) {
            if (a > b) return 1;
            if (a === b) return 0;
            if (a < b) return -1;
        });
        return numberArray;
    }

    static createLottos(purchaseAmount) {
        let lottoWallet = [];
        for (let count = 0; count < purchaseAmount; count++) {
            const lottoNumbers = this.createLotto();
            const lotto = new Lotto(lottoNumbers);
            lottoWallet.push(lotto);
        }
        return lottoWallet;
    }
}

module.exports = LottoMachine;