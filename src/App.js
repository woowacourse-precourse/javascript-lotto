const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
    play() {
        this.InputPurchaseAmount();
        const lotto = new Lotto();
    }

    // 구입금액 입력받기
    InputPurchaseAmount() {
        MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (purchase) => {
            this.ValidateInputPurchaseAmount(purchase);
        });
    }

    // 구입금액 1000원 단위인지 검증하기
    ValidateInputPurchaseAmount(purchase) {
        if (!(purchase % 1000 == 0)) {
            throw new Error("[ERROR] 로또 1장당 가격은 1000원 입니다.");
        }
        this.printLottoCount(purchase);
    }

    // 로또를 몇개 구매했는지 출력하기
    printLottoCount(purchase) {
        const lottoCount = parseInt(purchase / 1000);
        MissionUtils.Console.print(`\n${lottoCount}개를 구매했습니다.`);
        this.purchasedLottoNumberPick(lottoCount);
    }

    // 구매한 로또번호 뽑아내기
    purchasedLottoNumberPick(lottoCount) {
        const phaseList = [];

        for (let lottoNum = 0; lottoNum < lottoCount; lottoNum++) {
            var numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
            MissionUtils.Console.print(numbers);
            phaseList.push(numbers);
        }
        // MissionUtils.Console.print("\n");
        this.InputWinLottoNumber(phaseList, lottoCount);
    }

    // 당첨번호 6개 입력받기
    InputWinLottoNumber(phaseList, lottoCount) {
        var WinSixList = [];
        MissionUtils.Console.readLine("\n당첨 번호를 입력해 주세요.\n", (WinSix) => {
            WinSixList = [WinSix.split(",")];
            lotto.validate(WinSixList);
            this.InputBonusLottoNumber(WinSixList, phaseList, lottoCount);
        });
    }

    // 보너스번호 1개 입력받기
    InputBonusLottoNumber(WinLists, phaseList, lottoCount) {
        MissionUtils.Console.readLine("\n보너스 번호를 입력해 주세요.\n", (Bonus) => {
            this.WinCheck(WinLists.push(Bonus), phaseList, this.WinMoney(), lottoCount);
        });
    }

    // 당첨 금액
    WinMoney() {
        const result = {
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
        };
        return result;
    }

    // 당첨 통계내기
    WinCheck(Check, phaseList, result, lottoCount) {
        var count = 0;
        for (let phase of phaseList) {
            for (let i = 0; i < 6; i++) {
                if (phase.includes(Check[i])) {
                    count++;
                }
            }
            if (count == 3) {
                result[3] += 1;
            } else if (count == 4) {
                result[4] += 1;
            } else if (count == 5) {
                if (phase.includes(Check[6])) {
                    result[7] += 1;
                } else {
                    result[5] += 1;
                }
            } else if (count == 6) {
                result[6] += 1;
            }
            count = 0;
        }
        this.printWinCheck(result, lottoCount);
    }

    // 당첨 통계 출력하기
    printWinCheck(result, lottoCount) {
        MissionUtils.Console.print(`\n3개 일치 (5,000원) - ${result[3]}개`);
        MissionUtils.Console.print(`4개 일치 (50,000원) - ${result[4]}개`);
        MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result[5]}개`);
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[7]}개`);
        MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${result[6]}개`);
        this.printReturnValue(result, lottoCount);
    }

    // 수익율 내기
    printReturnValue(result, lottoCount) {
        const value = 5000 * result[3] + 50000 * result[4] + 1500000 * result[5] + 30000000 * result[7] + 2000000000 * result[6];
        MissionUtils.Console.print(`총 수익률은 ${(value / lottoCount).toFixed(1)}%입니다.`);
        MissionUtils.Console.close();
    }
}

const app = new App();
app.play();

module.exports = App;
