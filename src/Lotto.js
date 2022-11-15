const { Console, Random } = require('@woowacourse/mission-utils');
const { ERROR, MESSAGE, RESULT } = require('./Contants.js');


class Lotto {
  #countLotto;
  winningLottoNumber;
  bonusNumber;
  compareLotto = [];
  
  inputMoney() {
    Console.readLine(MESSAGE.INPUT_MONEY+('\n'), inputMoney => {
      this.validate(inputMoney);
      this.buyLotto(inputMoney);
    });
  }

  buyLotto(inputMoney) {
    this.#countLotto = Number(inputMoney) / 1000
    this.printCountLotto(this.#countLotto);
    this.makeLotto();
    this.inputWinningLottoNumber(); // 당첨 번호 입력
  }


  validate(price) {
    this.checkNumber(price);
    this.checkThousandUnit(price);
  };

  checkNumber(price) {
    if(isNaN(price)) {
        throw new Error(ERROR.NOT_NUMBER_ERROR)
    }
  };

  checkThousandUnit(price) {
    if(price % 1000 !== 0) {
        throw new Error(ERROR.NOT_THOUSAND_ERROR)
    }
  };


  printCountLotto(inputCount) {
    Console.print(`\n${inputCount}`+ MESSAGE.PRINT_COUNTLOTTO);
  }

  makeLotto() {
    for (let i = 0; i < this.#countLotto; i++) {
      let lottoNumber = this.ascendingLottoArray(this.makeRandomLottoNumber());
      this.printRandomLottoNumber(lottoNumber);
      this.compareLotto.push(lottoNumber);
    };
    
  }

  makeRandomLottoNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  ascendingLottoArray(lottoNumber) {
    return lottoNumber.sort((a, b) => a - b);
  }

  printRandomLottoNumber(lottoNumber) {
    return Console.print(`[${lottoNumber.join(', ')}]`);
  }




  inputWinningLottoNumber() {
    Console.readLine(MESSAGE.INPUT_WINNING_NUMBER+'\n', number => {
      const inputValue = number.split(",").map(Number);
      this.isValidWinningLottoNumber(inputValue);
      this.winningLottoNumber = inputValue;
      this.inputBonusNumber(); //보너스 번호 입력
    });
  }

  isValidWinningLottoNumber(inputValue) {
    this.checkEachVaule(inputValue);
    this.checkOverlap(inputValue);
  }
  

  checkOverlap(inputValue) {
    if ([...new Set(inputValue)].length !== 6) {
      throw new Error(ERROR.CHECK_OVERLAP_LENGTH);
    }
  }

  checkEachVaule(inputValue) {
    inputValue.forEach((value) => {
      if (isNaN(value)) {
        throw new Error(ERROR.CHECK_NUMBER_RANGE_IS_NUMBER);
      }
      if (value < 1 || value > 45) {
        throw new Error(ERROR.CHECK_NUMBER_RANGE_IS_NUMBER);
      }
    });
  }




  inputBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUS_NUMBER+('\n'), (number) => {
      this.isValidBonusNumber(number);
      this.bonusNumber = Number(number);
      this.rankResult(this.compareLotto, this.winningLottoNumber, this.bonusNumber);
    });
  }

  isValidBonusNumber(number) {
    this.checkBonusIsNumber(number);
    this.checkBonusRange(number);
    this.checkBonusOverlap(number);
  }

  checkBonusIsNumber(number) {
    if(isNaN(number)) {
      throw new Error(ERROR.CHECK_BONUS_IS_NUMBER);
    }
  }

  checkBonusRange(number){
    if(number < 1 || number > 45) {
      throw new Error(ERROR.CHECK_BONUS_IS_NUMBER);
    }
  }

  checkBonusOverlap(number){
    if (this.winningLottoNumber.includes(+number)) {
      throw new Error(ERROR.CHECK_BONUS_OVERLAP);
    }
  }



  rankResult (compareLotto, winningLottoNumber, bonusNumber) {
    let rankArray = [0,0,0,0,0];
    compareLotto.forEach((lottoArray) => {
      let matchCount = this.matchingNumber(lottoArray,winningLottoNumber);
      if (matchCount == 6) rankArray[0] +=1;
      if (matchCount == 5 && this.checkBonusNumber(lottoArray, bonusNumber)) rankArray[1] +=1;
      if (matchCount == 5 && !this.checkBonusNumber(lottoArray, bonusNumber)) rankArray[2] +=1;
      if (matchCount == 4) rankArray[3] +=1;
      if (matchCount == 3) rankArray[4] +=1;
    });
    this.printRankResult(rankArray);
  }

  matchingNumber(lottoNumber, winningLottoNumber) {
    return lottoNumber.reduce((sum, number) => {
      winningLottoNumber.includes(number) ? (sum += 1) : null;
      return sum;
    }, 0);
  }

  checkBonusNumber(lottoNumber,bonusNumber) {
    return lottoNumber.includes(bonusNumber);
  }

  printRankResult(results){
    Console.print(RESULT.RESULT_MESSAGE);
    Console.print(RESULT.RESULT_RANK_6 + `${results[0]}개`);
    Console.print(RESULT.RESULT_RANK_5_BONUS + `${results[1]}개`);
    Console.print(RESULT.RESULT_RANK_5 + `${results[2]}개`);
    Console.print(RESULT.RESULT_RANK_4 + `${results[3]}개`);
    Console.print(RESULT.RESULT_RANK_3 + `${results[4]}개`);
    Console.close();
  }


  play() {
    this.inputMoney();
  }
}

const lotto = new Lotto();
lotto.play();

module.exports = Lotto;
