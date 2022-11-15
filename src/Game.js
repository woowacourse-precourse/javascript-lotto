class Game {
    constructor () {
        this.user = new User();
        this.score = new Score();
        this.bonusNumber = 0;
    }

    play () {
        this.getMoney();
    }
      
    getMoney () {
        InputOutput.input(Message.PLEASE_TYPING_MONEY, (money) => this.start(money));
    }

    start (money) {
        this.checkMoney(money);
        this.score.setMoney(money); 
        this.user.setUserLottoCount(money);
        this.printUserLottoCount();
        this.user.makeUserLotto();
        this.score.setUserLotto(this.user.getUserLotto());
        this.printUserLotto();
        this.getAnotherInput();
    }

    checkMoney (money) {
        if (parseInt(money) != money) {
            throw new Error(Message.NOT_NUMBER)
        }
        if (Calculate.divideByOneThousand(money)) {
            InputOutput.close();
            throw new Error(Message.CANT_DIVIDED_BY_ONETHOUSAND);
        }
    }

    printUserLottoCount () {
        InputOutput.output(Message.getLottoCountMessage(this.user.getUserLottoCount()));
    }

}

module.exports = Game;