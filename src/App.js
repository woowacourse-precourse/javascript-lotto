const { print, readLine } = require('./utils');
const { LOTTO_PRICE } = require('./var');

class App {
  play() {
    this.inputPrice();
  }

  inputPrice(){
    readLine('구입금액을 입력해주세요.\n', (money) => {
      this.checkInputPrice(money);
    })
  }

  checkInputPrice(money){
    if (isNaN(money)) {
      throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
    }
    if (money < 1000) {
      throw new Error('[ERROR] 1000원 이상의 단위를 입력해주세요.');
    }
    if (!isNaN(money) && money >= 1000) {
      const countLotto = Math.floor(Number(money) / LOTTO_PRICE);
      print(`${countLotto}개를 구매했습니다.\n`);
    }
  }

}

module.exports = App;
