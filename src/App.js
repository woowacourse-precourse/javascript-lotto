const { Console } = require('@woowacourse/mission-utils');

class App {

  purchasemoney;
  
  play() {
    this.purchaseLotto();

  }

  purchaseLotto() {
    Console.readLine("구입금액을 입력해 주세요.", (money) => {
      const numberoflotto = (money / 1000);
      this.purchasemoney = money;
      
      this.validatePrice();
      this.countingLotto(numberoflotto);
    });
  }

  validatePrice() {
    if (this.purchasemoney % 1000 !== 0) throw new Error("[ERROR] 1000단위의 수를 입력해주세요!");
  }

  countingLotto(numberoflotto) {
    Console.print(`${numberoflotto}개를 구매했습니다.`);
  }


}

module.exports = App;
