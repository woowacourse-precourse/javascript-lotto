const MissionUtils = require('@woowacourse/mission-utils');
const ONE_LOTTO_PRICE = 1000;

class App {
    play() {
        this.purchasePriceInput();
    }
    purchasePriceInput() {
        MissionUtils.Console.readLine(
            '구입금액을 입력해 주세요.\n',
            (price) => {
                this.validatePurchasePrice(price);
                console.log(price);
            }
        );
    }
    validatePurchasePrice(price) {
        if (price % ONE_LOTTO_PRICE !== 0 || price === String(0)) {
            throw '[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.';
        }
    }
}

let app = new App();
app.play();

module.exports = App;
