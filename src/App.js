const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const ONE_LOTTO_PRICE = 1000;

class App {
    play() {
        this.purchasePriceInput();
    }

    // 구입 금액 입력 받는 함수
    purchasePriceInput() {
        MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (price) =>
            this.callBackOfPurchase(price)
        );
    }

    // 구입 금액 입력 받는 함수의 callback
    callBackOfPurchase(price) {
        const numberOfLotto = price / ONE_LOTTO_PRICE;
        let lotto = new Lotto();
        return (
            MissionUtils.Console.print(`\n${numberOfLotto}개를 구매했습니다.`),
            this.validatePurchasePrice(price),
            lotto.showLotto(numberOfLotto)
        );
    }

    // 구입 금액 검증 함수
    validatePurchasePrice(price) {
        if (price % ONE_LOTTO_PRICE !== 0 || price === String(0)) {
            throw '[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.';
        }
    }
}

let app = new App();
app.play();

module.exports = App;
