const Lotto = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');

class App {
    constructor() {
        this.lottoNumbers = []; // 생성한 로또 번호 객체를 저장하는 배열.
        this.winningNumbers = []; // 당첨 번호 집합.
        this.bonusNumber = 0; // 보너스 번호
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
            const genNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
                1,
                45,
                6
            );
            this.lottoNumbers.push(new Lotto(genNumbers));
        }
    }

    // 발행한 로또 번호의 개수와, 번호들을 오름차순으로 정렬해서 콘솔에 출력한다.
    getInfo() {
        const LOTTO_COUNT = this.lottoNumbers.length;
        MissionUtils.Console.print(`${LOTTO_COUNT}개를 구매했습니다.\n`);
        for (let lottoNumber of this.lottoNumbers) {
            MissionUtils.Console.print(lottoNumber.printNumbers());
        }
        MissionUtils.Console.print('');
    }

    // 당첨 번호를 입력받고 배열로 변환해서 저장한다.8
    getWinningNums() {
        MissionUtils.Console.readLine(
            '당첨 번호를 입력해 주세요.\n',
            (winningString) => {
                this.winningNumbers = winningString.split(',');
                MissionUtils.Console.print('');
                this.getbounsNum();
            }
        );
    }

    // 보너스 번호를 입력받는다.
    getbounsNum() {
        MissionUtils.Console.readLine(
            '보너스 번호를 입력해 주세요.\n',
            (numberString) => {
                this.bonusNumber = Number(numberString);
                MissionUtils.Console.print('');
                MissionUtils.Console.close();
            }
        );
    }
    play() {
        MissionUtils.Console.readLine(
            '구입금액을 입력해 주세요.\n',
            (amount) => {
                this.amountValidate(amount);
                this.generateLotto(amount);
                this.getInfo();
                this.getWinningNums();
            }
        );
    }
}

const app = new App();
app.play();

module.exports = App;
