const { Console, Random } = require('@woowacourse/mission-utils');

const TEXTS = Object.freeze({
  amountInput: '구입금액을 입력해 주세요. \n',
  lottoCount: '개를 구매했습니다.',
  numberInput : '당첨 번호를 입력해 주세요.',
  bonusInput: '보너스 번호를 입력해 주세요.',
  resultInput: '당첨 통계 \n\n --'
});

class App {
  play() {
    this.printMessage(TEXTS.amountInput, this.inputAmount);
  }

  printMessage(text, callback) {
    Console.readLine(text, callback.bind(this));
  }

  inputAmount(input){
    Console.print(input)
  }

}

const app = new App();
app.play();

module.exports = App;
