const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    this.priceInput();
  };
  
  priceInput() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (price) => {
        this.priceExceptionHandling(price)
        console.log(`구입금액을 입력해 주세요.\n ${price}`);
      }
    );
  };

  priceExceptionHandling(price) {
    if(price % 1000 !== 0 ) throw '[ERROR] 구입 금액은 1,000원 단위 입니다';
  };
}

module.exports = App;
