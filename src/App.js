const { Console } = require("@woowacourse/mission-utils");
const AutoGenerateLotto = require("./AutoGenerateLotto");
const Lotto = require("./Lotto");
const WinnerLotto = require("./WinnerLotto");
const CompareLotto = require("./CompareLotto");
class App {
    constructor() {
        this.temp = null;
        this.money = null;
        this.autoGenerateLotto = null;
    }
    play() {
        this.inputMoney();
    }
    inputMoney() {
        Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
            this.temp = Number(answer);
            this.autoGenerateLotto = new AutoGenerateLotto(this.temp);
            Console.print(`${this.autoGenerateLotto.papper}개를 구매했습니다.`);
            Console.print(this.arrayListViewer(this.autoGenerateLotto["lottoList"]));
            this.inputWinnerLotto();
        });
    }
    inputWinnerLotto() {
        Console.readLine("당첨 번호를 입력해 주세요.\n", (winnerLotto) => {
            this.winnerLotto = new WinnerLotto(winnerLotto);
            this.validateLotto = new Lotto(this.winnerLotto.inputLotto);
            this.inputBonusNumber();
        });
    }
    inputBonusNumber() {
        Console.readLine("보너스 점수를 입력해 주세요.\n", (bonus) => {
            const numBonus = Number(bonus);
            this.validateBonus(numBonus);
            this.result = new CompareLotto(this.autoGenerateLotto["lottoList"], this.winnerLotto.lottoNumber, numBonus);
            Console.print("당첨 통계");
            Console.print("---");
            this.rankViewer();
            this.rateViewer();
            Console.close();
        });
    }
    rateViewer() {
        Console.print(
            `총 수익률은 ${(
                (this.result.rankCount["5th"] * 5000 +
                    this.result.rankCount["4th"] * 50000 +
                    this.result.rankCount["3rd"] * 1500000 +
                    this.result.rankCount["2nd"] * 30000000 +
                    this.result.rankCount["1st"] * 2000000000) /
                this.temp
            ).toFixed(1)}%입니다.`
        );
    }
    rankViewer() {
        Console.print(`3개 일치 (5,000원) - ${this.result.rankCount["5th"]}개`);
        Console.print(`4개 일치 (50,000원) - ${this.result.rankCount["4th"]}개`);
        Console.print(`5개 일치 (1,500,000원) - ${this.result.rankCount["3rd"]}개`);
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result.rankCount["2nd"]}개`);
        Console.print(`6개 일치 (2,000,000,000원) - ${this.result.rankCount["1st"]}개`);
    }
    validateBonus(numBonus) {
        if (numBonus < 1 || numBonus > 45) {
            throw new Error("[ERROR] 보너스 번호는 1~45 여야 합니다.");
        }
        if (numBonus % 1 !== 0) {
            throw new Error("[ERROR] 보너스 번호는 정수여야 합니다.");
        }
        if (this.winnerLotto.lottoNumber.includes(numBonus)) {
            throw new Error("[ERROR] 보너스 번호와 선택된 로또번호 중 하나가 중복됩니다.");
        }
    }
    arrayListViewer(arrayList) {
        for (let i = 0; i < arrayList.length; i++) {
            Console.print(arrayList[i]);
        }
        return;
    }
}
const test = new App();
test.play();
module.exports = App;
