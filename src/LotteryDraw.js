const MissionUtils = require("@woowacourse/mission-utils");
const Struct = require('./Struct');
const MoneyExceptionHandling = require('./MoneyExceptionHandling');
const WinningExceptionHandling = require('./WinningExceptionHandling');
const BonusExceptionHandling = require('./BonusExceptionHandling');
class LotteryDraw extends Struct{ 
    moneyInput() {
        MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
            money = Number(money);
            new MoneyExceptionHandling(money);
            this.money = money / 1000;
        });
    };
    randomLotto() {
        for (let index = 0; index < this.money; index++) {
            this.lottoBox.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
        };
    };
    randomLottoPrint() {
        for (let index = 0; index < this.money; index++) {
            MissionUtils.Console.print(`[${String(this.lottoBox[index].sort(
                (first, second) => {
                    return first - second;
                }
            )).split(',').join(', ')}]`);
        };
    };
    buy() {
        MissionUtils.Console.print(`${this.money}개를 구매했습니다.`);
        this.randomLotto();
        this.randomLottoPrint();
    };
    winningNumber() {
        MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (winning) => {
            this.winning = winning.split(',').map((number) =>
                Number(number)
            );
        });
        new WinningExceptionHandling(this.winning);
    };
    bonusNumber() {
        MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (bonus) => {
            this.bonus = Number(bonus);
        });
        new BonusExceptionHandling(this.bonus,this.winning);
    };
    winningCheck() {
        this.lottoBox.map((numbers) => {
            for (let index = 0; index < numbers.length; index++) {
                if (numbers.indexOf(this.winning[index]) >= 0) {
                    this.check++;
                };
            };
            if (this.check === 5 && numbers.indexOf(this.bonus) >= 0) {
                this.winningList[this.winningList.length - 1] += 1;
                this.check = 0;
            };
            this.winningList[this.check] += 1;
            this.check = 0;
        });
    };
    winningPrint() {
        MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.winningList[3]}개`);
        MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.winningList[4]}개`);
        MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.winningList[5]}개`);
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winningList[7]}개`);
        MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.winningList[6]}개`);
    };
};

module.exports = LotteryDraw;