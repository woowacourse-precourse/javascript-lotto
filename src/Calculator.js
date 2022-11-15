const User = require('./User');
const { PROGRESS_TEXT } = require('../src/const/text');
const { SCORE_KEY, WINNING_AMOUNT } = require('../src/const/lotto');

class Calculator {
  #user;
  #totalLotto;
  #yield;
  #winningNumber;
  #bonusNumber;
  #totalScore; 

  constructor() {
    this.#user = new User();
    this.#yield = 0;
    this.#totalScore = {
      [SCORE_KEY.THREE] : 0,
      [SCORE_KEY.FOUR]: 0,
      [SCORE_KEY.FIVE]: 0,
      [SCORE_KEY.FIVE_BONUS]: 0,
      [SCORE_KEY.SIX]: 0
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
        if(this.#totalLotto[index].includes(this.#bonusNumber)) {
          this.#totalScore.five_bonus += 1;
        } else this.#totalScore.five += 1;
      } else if (score === 6) {
        this.#totalScore.six += 1;
      }
    })
  }
    
  calcYield() {
    Object.keys(SCORE_KEY).forEach((key) => {
      this.#yield += (WINNING_AMOUNT[`${key}`])*Number(this.#totalScore[SCORE_KEY[`${key}`]]);
    })
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

  set bonusNumber(number) {
    this.#bonusNumber = number;
  }
}

module.exports = Calculator;