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

    printUserLotto () {
        const array = this.user.getUserLotto();
        for(let oneLotto of array){
            InputOutput.output(`\"[${oneLotto[0]}, ${oneLotto[1]}, ${oneLotto[2]}, ${oneLotto[3]}, ${oneLotto[4]}, ${oneLotto[5]}]\"`)
        }
    }

    getAnotherInput () {
        this.inputCorrectNumbers();
    }

    inputCorrectNumbers () {
        InputOutput.input(Message.PLEASE_TYPING_CORRECT_NUMBER , (correct) => {this.setCorrectNumber(correct)
    })}

    setCorrectNumber (correctNumber) {
        correctNumber = correctNumber.split(",").map((item) => Number(item));
        const lotto = new Lotto(correctNumber);
        this.score.setCorrectNumber(lotto.getCorrectNumber());
        this.inputBonusNumber();
    }

    inputBonusNumber () {
        InputOutput.input(Message.PLEASE_TYPING_BONUS_NUMBER, (bonus) => this.setBonusNumber(bonus));
    }

    checkBonusNumber (bonusNumber) {
        const correctNumber = this.score.getCorrectNumber();
        if (this.bonusNumber < 1 || bonusNumber > 45) {
            InputOutput.close();
            throw new Error(Message.LOTTO_NUMBER_BIGGER_THAN_ONE_SMALLER_THAN_FOURTY_FIVE);
        }
        if (correctNumber.includes(Number(bonusNumber))) {
            InputOutput.close();
            throw new Error(Message.EXIST_BONUS_NUMBER_IN_CORRECT_NUMBER);
        }
    }

    setBonusNumber (bonusNumber) {
        this.bonusNumber = Number(bonusNumber);
        this.checkBonusNumber(this.bonusNumber)
        this.score.setBonusNumber(this.bonusNumber);
        this.calculateStatics();
    }

}

module.exports = Game;