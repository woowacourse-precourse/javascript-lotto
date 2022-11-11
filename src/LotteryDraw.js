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
};

module.exports = LotteryDraw;