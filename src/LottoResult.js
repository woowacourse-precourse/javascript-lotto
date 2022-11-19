const { Console } = require("@woowacourse/mission-utils");

const FIRST_PRIZE_INDEX = 4, SECOND_PRIZE_INDEX = 3, THIRD_PRIZE_INDEX = 2, FOURTH_PRIZE_INDEX = 1, FIFTH_PRIZE_INDEX = 0;
const FIRST_PRIZE_MATCH = 6, SECOND_AND_THIRD_PRIZE_MATCH = 5, FOURTH_PRIZE_MATCH = 4, FIFTH_PRIZE_MATCH = 3;

class LottoResult {
    #lottoPrizeResult;
    #userLottoMatch;

    constructor(numOfLotto, userLotto, winLotto, bonusNumber) {
        this.#lottoPrizeResult = [0, 0, 0, 0, 0];
        this.#userLottoMatch = [];
        this.compareLottoResult(numOfLotto, userLotto, winLotto);
        this.getLottoResult(userLotto, bonusNumber);
        this.printLottoMatchResult();
    }

    getLottoPrizeResult() {
        return this.#lottoPrizeResult;
    }

    compareLottoResult(numOfLotto, userLotto, winLotto) {
        for(let i = 0; i < numOfLotto; i++) {
          let numOfMatchLotto = 0;
          numOfMatchLotto = this.compareLotto(numOfMatchLotto, userLotto, winLotto, i);
          this.#userLottoMatch.push(numOfMatchLotto);
        }
    }
    
    compareLotto(numOfMatchLotto, userLotto, winLotto, i) {
        for(let j = 0; j < winLotto.length; j++) {
          if(userLotto[i].includes(winLotto[j])){
            numOfMatchLotto++;
          }
        }
        return numOfMatchLotto;
    }
    
    getLottoResult(userLotto, bonusNumber) {
        for(let i = 0; i < this.#userLottoMatch.length; i++) {
            if(this.#userLottoMatch[i] === FIRST_PRIZE_MATCH) {
                this.#lottoPrizeResult[FIRST_PRIZE_INDEX]++;
            }
            if(this.#userLottoMatch[i] === SECOND_AND_THIRD_PRIZE_MATCH) {
                this.isSecond(userLotto, bonusNumber, i);
            }
            if(this.#userLottoMatch[i] === FOURTH_PRIZE_MATCH) {
                this.#lottoPrizeResult[FOURTH_PRIZE_INDEX]++;
            }
            if(this.#userLottoMatch[i] === FIFTH_PRIZE_MATCH) {
                this.#lottoPrizeResult[FIFTH_PRIZE_INDEX]++;
            }
        }
    }
    
    isSecond(userLotto, bonusNumber, i) {
        if((userLotto[i]).includes(bonusNumber)) {
          this.#lottoPrizeResult[SECOND_PRIZE_INDEX]++;
          return;
        }
        this.#lottoPrizeResult[THIRD_PRIZE_INDEX]++;
    }
    
    printLottoMatchResult() {
        Console.print("\n당첨 통계");
        Console.print("---");
        Console.print(`3개 일치 (5,000원) - ${this.#lottoPrizeResult[FIFTH_PRIZE_INDEX]}개`);
        Console.print(`4개 일치 (50,000원) - ${this.#lottoPrizeResult[FOURTH_PRIZE_INDEX]}개`);
        Console.print(`5개 일치 (1,500,000원) - ${this.#lottoPrizeResult[THIRD_PRIZE_INDEX]}개`);
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#lottoPrizeResult[SECOND_PRIZE_INDEX]}개`);
        Console.print(`6개 일치 (2,000,000,000원) - ${this.#lottoPrizeResult[FIRST_PRIZE_INDEX]}개`);
    }
}

module.exports = LottoResult;