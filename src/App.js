const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const ONE_LOTTO_PRICE = 1000;

class App {
    play() {
        this.lottoStart();
    }

    // 로또 시작
    lottoStart() {
        MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (price) => this.callBackOfPurchase(price));
    }

    // 구입 금액 입력 받는 함수의 callback
    callBackOfPurchase(price) {
        const numberOfLotto = price / ONE_LOTTO_PRICE;
        return MissionUtils.Console.print(`\n${numberOfLotto}개를 구매했습니다.`), this.validatePurchasePrice(price), this.showRandomLotto(numberOfLotto);
    }

    // 구입 금액 검증 함수
    validatePurchasePrice(price) {
        if (price % ONE_LOTTO_PRICE !== 0 || price === String(0)) {
            throw '[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.';
        }
    }

    // 구입금액에 해당하는 만큼의 로또를 보여주는 함수
    showRandomLotto(numbers) {
        for (let i = 0; i < numbers; i++) {
            this.printRandomLotto();
        }
        this.inputWinnigLotto();
    }

    // 로또들을 출력하는 함수
    printRandomLotto() {
        MissionUtils.Console.print(this.pickRandomLotto());
    }

    // 로또들의 숫자를 랜덤하게 뽑는 함수
    pickRandomLotto() {
        const pickLottoArray = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(function (a, b) {
            if (a > b) return 1;
            if (a === b) return 0;
            if (a < b) return -1;
        });
        const pickLottoString = pickLottoArray.join(', ');
        return `[${pickLottoString}]`;
    }

    // 당첨 번호를 입력받는 함수
    inputWinnigLotto() {
        MissionUtils.Console.readLine('\n당첨 번호를 입력해 주세요.\n', (input) => {
            const newInput = this.changeStringToArray(input);
            let lotto = new Lotto(newInput);
        });
    }

    // 문자열을 배열로 바꿔주는 함수
    changeStringToArray(string) {
        return string.split(',').map((array) => Number(array));
    }
}

let app = new App();
app.play();

module.exports = App;
