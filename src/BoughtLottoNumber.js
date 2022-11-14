const { Console, Random } = require('@woowacourse/mission-utils');

class BoughtLottoNumber {
  
  static boughtLotto(paymentAmount) {
    Console.print(`\n${paymentAmount}개를 구매했습니다.`);
    this.userLottoNumber(paymentAmount);
  }

  static userLottoNumber(paymentAmount) {
    let userLottoNumberArray = [];

    for (let index = 0; index < paymentAmount; index++) {
      userLottoNumberArray.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }

    userLottoNumberArray.map(array => {
      Console.print(array.sort((num1,num2) => num1-num2));
    });
  }
}

module.exports = BoughtLottoNumber;