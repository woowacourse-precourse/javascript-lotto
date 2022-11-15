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

}

module.exports = Game;