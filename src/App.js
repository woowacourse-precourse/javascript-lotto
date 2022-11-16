const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
    #lottoQuantity;
    #winningLotto;
    #lottoList = [];
    #isCorrect = [0, 0, 0, 0, 0];

    constructor() {}

    makeLottos = () => {
        for (let i = 0; i < this.#lottoQuantity; i++) {
            this.#lottoList.push(
                MissionUtils.Random.pickUniqueNumbersInRange(1, 46, 6)
            );
            this.#lottoList[i].sort((a, b) => a - b);
        }
        this.showLottoList();
    };

    showLottoList = () => {
        MissionUtils.Console.print(`${this.#lottoQuantity}개를 구매했습니다.`);
        this.#lottoList.forEach((lotto) => MissionUtils.Console.print(lotto));
    };

    getUserInput = () => {
        MissionUtils.Console.readLine(
            "구입금액을 입력해 주세요.\n",
            (money) => {
                if (Number(money) % 1000 !== 0) throw new Error("[ERROR]");
                this.#lottoQuantity = money / 1000;
                this.makeLottos();
                this.setWinningNumber();
            }
        );
    };

    setWinningNumber = () => {
        MissionUtils.Console.readLine(
            "\n당첨 번호를 입력해 주세요.\n",
            (input) => {
                let winninNumbers = input
                    .split(",")
                    .map((item) => Number(item));
                this.#winningLotto = new Lotto(winninNumbers);
                this.getBonusNumber(this.#winningLotto);
            }
        );
    };

    getBonusNumber = (winningLotto) => {
        MissionUtils.Console.readLine(
            "\n보너스 번호를 입력해 주세요.\n",
            (bonus) => {
                winningLotto.setBonusNumber(Number(bonus));
                MissionUtils.Console.close();
                this.getResult();
            }
        );
    };

    calculateWinning = (lotto) => {
        let count = 0;
        let isBonusCorreect = false;

        for (let i = 0; i < 7; i++) {
            lotto.forEach((number) => {
                if (this.#winningLotto.getNumbers()[i] === number)
                    i === 6 ? (isBonusCorreect = true) : count++;
            });
        }

        if (3 <= count) {
            isBonusCorreect
                ? count === 5 && this.#isCorrect[3]++
                : count === 6
                ? this.#isCorrect[4]++
                : this.#isCorrect[count - 3]++;
        }
    };

    getResult = () => {
        this.#lottoList.forEach((lotto) => {
            this.calculateWinning(lotto);
        });
        this.showResult();
    };

    showResult = () => {
        MissionUtils.Console.print("\n당첨 통계");
        MissionUtils.Console.print("---");
        MissionUtils.Console.print(
            `3개 일치 (5,000원) - ${this.#isCorrect[0]}개`
        );
        MissionUtils.Console.print(
            `4개 일치 (50,000원) - ${this.#isCorrect[1]}개`
        );
        MissionUtils.Console.print(
            `5개 일치 (1,500,000원) - ${this.#isCorrect[2]}개`
        );
        MissionUtils.Console.print(
            `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#isCorrect[3]}개`
        );
        MissionUtils.Console.print(
            `6개 일치 (2,000,000,000원) - ${this.#isCorrect[4]}개`
        );
        let earn =
            this.#isCorrect[0] * 5 +
            this.#isCorrect[1] * 50 +
            this.#isCorrect[2] * 1500 +
            this.#isCorrect[3] * 30000 +
            this.#isCorrect[4] * 2000000;
        MissionUtils.Console.print(
            `총 수익률은 ${((earn / this.#lottoQuantity) * 100).toFixed(
                1
            )}%입니다.`
        );
        MissionUtils.Console.close();
    };

    play() {
        this.getUserInput();
    }
}

const app = new App();
app.play();
module.exports = App;
