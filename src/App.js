const Lotto = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
    constructor() {
        // 생성한 로또 번호 객체를 저장하는 배열.
        this.lottoNumbers = [];
    }

    // 입력한 금액이 1,000으로 나누어 떨어지지 않으면 예외처리를 한다.
    amountValidate(amount) {
        if (amount % 1000 !== 0) {
            throw new Error(
                '[ERROR] 1,000으로 나누어 떨어지는 금액만 입력해야 합니다.'
            );
        }
    }

    // 금액을 1,000으로 나눈 횟수 만큼의 로또 번호를 생성하고 저장한다.
    generateLotto(amount) {
        const COUNT = parseInt(amount / 1000);
        for (let i = 0; i < COUNT; i++) {
            const genNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
            this.lottoNumbers.push(new Lotto(genNumbers));
        }
    }

    play() {
        MissionUtils.Console.readLine(
            '구입금액을 입력해 주세요.\n',
            (amount) => {
                this.amountValidate(amount);
                this.generateLotto(amount);
            }
        );
    }
}

const app = new App();
app.play();

module.exports = App;
