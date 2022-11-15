const { Console, Random } = require('@woowacourse/mission-utils');
const {INPUT_MESSAGES, PAYMENT_AMOUNT_MESSAGES, WINNING_MESSAGES, COUNT_MATCH_NUMBER} = require('./Constant');

class Process {
  constructor() {
    this.paymentAmount;
    this.userInputNumberArray;
    this.userLottoNumberArray;
    this.bonusNumber;
  }

  static getPaymentAmount() {
    Console.readLine(INPUT_MESSAGES.PAYMENT_AMOUNT, (input) => {
      let paymentAmount = parseInt(input)/1000;
      this.paymentAmount = paymentAmount;
      this.boughtLotto(paymentAmount);
      this.getUserInputNumber();
    });
  }

  static getUserInputNumber() {
    let userInputNumberArray = [];

    Console.readLine(INPUT_MESSAGES.USER_INPUT_NUMBER, (numbers) => {
      userInputNumberArray = numbers.split(',').map(x=>parseInt(x));
      this.userInputNumberArray = userInputNumberArray;
      this.getUserBonusNumber();
    });
  }

  static getUserBonusNumber() {
    Console.readLine(INPUT_MESSAGES.USER_BONUS_NUMBER, (number) => {
      this.bonusNumber = number;
      this.calculateStatistics(this.userLottoNumberArray, this.paymentAmount);
    })
  }

  static calculateStatistics(userLottoNumberArray, paymentAmount) {
    let userInputNumberArray = this.userInputNumberArray;
    userInputNumberArray.push(parseInt(this.bonusNumber)); 
    for (let index = 0; index < paymentAmount; index++) {
      let commonArray = userInputNumberArray.filter(number=>userLottoNumberArray[index].includes(number));
      this.calculateCommonNumber(commonArray);
    }
    this.printWinningStatistics();
  }

  static calculateCommonNumber(commonArray){
    if (commonArray.length === 3) COUNT_MATCH_NUMBER[0]+=1
    else if (commonArray.length === 4) COUNT_MATCH_NUMBER[1]+=1
    else if (commonArray.length === 6 && commonArray.includes(parseInt(this.bonusNumber))) COUNT_MATCH_NUMBER[3]+=1
    else if (commonArray.length === 5) COUNT_MATCH_NUMBER[2]+=1
    else if (commonArray.length === 6) COUNT_MATCH_NUMBER[4]+=1
    
  }

  static printWinningStatistics() {
    Console.print('\n당첨통계\n---')
    Console.print(WINNING_MESSAGES.THREE_MATCHED +` - ${COUNT_MATCH_NUMBER[0]}개`)
    Console.print(WINNING_MESSAGES.FOUR_MATCHED +` - ${COUNT_MATCH_NUMBER[1]}개`)
    Console.print(WINNING_MESSAGES.FIVE_MATCHED +` - ${COUNT_MATCH_NUMBER[2]}개`)
    Console.print(WINNING_MESSAGES.FIVE_BONUS_MATCHED +` - ${COUNT_MATCH_NUMBER[3]}개`)
    Console.print(WINNING_MESSAGES.SIX_MATCHED +` - ${COUNT_MATCH_NUMBER[4]}개`)
  }

  static boughtLotto(paymentAmount) {
    Console.print(`\n${paymentAmount}`+ PAYMENT_AMOUNT_MESSAGES);
    this.userLottoNumber(paymentAmount);
  }

  static userLottoNumber(paymentAmount) {
    let userLottoNumberArray = [];

    for (let index = 0; index < paymentAmount; index++) {
      userLottoNumberArray.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }

    this.userLottoNumberArray = userLottoNumberArray;
    userLottoNumberArray.map(array => {
      Console.print(array.sort((num1,num2) => num1-num2));
    });
   }
}

module.exports = Process;