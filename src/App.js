const Utils = require('./Utils');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.userLottos = [];
  }

  play() {
    Utils.readLine('구입금액을 입력해 주세요.', (input) => {
      const amount = this.validateAmount(Number(input));
      const quantity = this.countLottoQuantity(amount);
      Utils.print(`\n${quantity}개를 구매했습니다.`);
      this.userLottos = this.createLotto(quantity);

    });
  }

  validateAmount(input){
    console.log(input);

    if (input === 0 || input % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1,000원 단위로 숫자만 입력해야 합니다.");
    }
    return input;
  }

  countLottoQuantity(amount){
    let quantity = 0;
    quantity = amount / 1000;

    return quantity
  }

  createLotto(quantity){
    let lottos = [];
    for(let count = 0; count < quantity; count++){
      lottos.push(Utils.pickNumberInLotto());
    }
    return lottos;
  } 
}

const app = new App();
app.play();

module.exports = App;
