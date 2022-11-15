const LotteryDraw = require('./LotteryDraw');

class Execution {
    play() {
        const lotto = new LotteryDraw();
        lotto.moneyInput();
        lotto.buy();
        lotto.winningNumber();
        lotto.bonusNumber();
        lotto.winningCheck();
        lotto.winningPrint();
        lotto.revenuePrint();
        lotto.lottoClose();
    };
};

module.exports = Execution;