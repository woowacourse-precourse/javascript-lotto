const MissionUtils = require('@woowacourse/mission-utils');

class App {
    play() {
        this.purchasePriceInput();
    }
    purchasePriceInput() {
        MissionUtils.Console.readLine(
            '구입금액을 입력해 주세요.\n',
            (price) => {
                console.log(price);
            }
        );
    }
}

let app = new App();
app.play();

module.exports = App;
