const MissionUtils = require("@woowacourse/mission-utils");
const WinningNumbers = require('./WinningNumbers.js');

const winningNumbers = new WinningNumbers();


class LottoGenerator{
    constructor() {
      this.makedLottos = [];
    }
  
    getUserPayment() {
      MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (userInput) => {
        if (isNaN(userInput) == true) throw new Error('[ERROR] 숫자를 입력 해주세요.');
        if (userInput % 1000 !== 0) throw new Error('[ERROR] 1,000원 단위로 입력 해주세요.');
        this.makeLottos(userInput);

        return winningNumbers.inputWinningNumbers()
      })
    }
  
    makeLottos(payment){
      const boughtLottoNumbers = this.checkHowManyLottos(payment);
      this.makePaidLottoNumbers(boughtLottoNumbers);
      this.printLottos();
      
      return winningNumbers.makedLottos = this.makedLottos
    }
  
    checkHowManyLottos(payment) {
      const boughtLottos = payment/1000;
      MissionUtils.Console.print(`\n${boughtLottos}개를 구매했습니다.`)
      return boughtLottos
    }
  
    makePaidLottoNumbers(boughtNumbers) {
      for (let i = 0; i < boughtNumbers; i+=1){
        const makedLottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        makedLottoNumbers.sort(function (a, b) {return a - b;});
        this.makedLottos.push(makedLottoNumbers);
      }
      return 
    }
  
    printLottos() {
      this.makedLottos.forEach(lotto => {
        MissionUtils.Console.print(lotto);
      });
   }
}

  module.exports = LottoGenerator