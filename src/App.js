const { print, readLine } = require('./utils');
const LOTTO_PRICE = require('./var');

class App {
  play() {
    this.inputPrice();
  }

  inputPrice(){
    readLine('구입금액을 입력해주세요.\n', (money) => {
      const countLotto = Math.floor(Number(money) / LOTTO_PRICE);
      print(`${countLotto}개를 구매했습니다.\n`);
    })
  }

}

module.exports = App;
