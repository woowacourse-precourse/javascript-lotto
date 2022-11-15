class WinnerLotto {
    constructor(inputLotto) {
        this.inputLotto = inputLotto.split(",");
        this.lottoNumber = [];
        this.stringToNumber();
    }
    stringToNumber() {
        for (let i = 0; i < this.inputLotto.length; i++) {
            this.lottoNumber.push(Number(this.inputLotto[i]));
        }
    }
}
module.exports = WinnerLotto;
