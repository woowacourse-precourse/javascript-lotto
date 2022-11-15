const User = require('./User');

class Calculator {
    #user;
    #totalLotto;
    #yield;
    #winningNumber;
    #totalScore 

    constructor() {
        this.#user = new User();
        this.#yield = 0;
        this.#totalScore = {
            'three': 0,
            'four': 0,
            'five': 0,
            'five_ball': 0,
            'six': 0
        };
    }

    calculateRank() {
        const totalScore = [];
        this.#totalLotto.map((lotto) => {
            let count = 0;
            lotto.forEach(lottoNumber => {
                if(this.#winningNumber.includes(lottoNumber)) count++
            });
            totalScore.push(count);
        })
        this.extractScore(totalScore);
    }

    extractScore(totalScore) {
        totalScore.map((score, index) => {
          if(score === 3) {
            this.#totalScore.three += 1;
          } else if (score === 4) {
            this.#totalScore.four += 1;
          } else if (score === 5) {
            if(this.#totalLotto[index].includes(Number(this.#user.bonusNumber()))) {
              this.#totalScore.five_ball += 1;
            } else this.#totalScore.five += 1;
          } else if (score === 6) {
            this.#totalScore.six += 1;
          }
        })
      }
    
    calcYield() {
        this.#yield += 5000*Number(this.#totalScore['three']);
        this.#yield += 50000*Number(this.#totalScore['four']);
        this.#yield += 15000000*Number(this.#totalScore['five']);
        this.#yield += 30000000*Number(this.#totalScore['five_ball']);
        this.#yield += 2000000000*Number(this.#totalScore['six']);
    }

    get totalScore() {
        return this.#totalScore;
    }

    set totalLotto(totalLotto) {
        this.#totalLotto = totalLotto;
    }

    get yield() {
        return this.#yield;
    }

    set winningNumber(winning) {
        this.#winningNumber = winning;
    }
}

module.exports = Calculator;