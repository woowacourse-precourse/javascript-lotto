const Utils = require('./Utils');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.userLottos = [];
    this.winningLotto = [];
    this.winningBonusLottoNumber = 0;
  }

  play() {
    Utils.readLine('구입금액을 입력해 주세요.', (input) => {
      const amount = this.validateAmount(Number(input));
      const quantity = this.countLottoQuantity(amount);
      Utils.print(`\n${quantity}개를 구매했습니다.`);
      this.userLottos = this.createLotto(quantity);
      for(const userLotto of this.userLottos) { 
        Utils.print(userLotto);
      }
      Utils.readLine('당첨 번호를 입력해 주세요.\n', (input) => {
        const winningLotto = this.createLottoArray(input);
        Utils.readLine('보너스 번호를 입력해 주세요.\n', (input) => {
            this.winningBonusLottoNumber = input;
        });
      });
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

  createLottoArray(input){
    console.log(input);
  }
}

const app = new App();
app.play();

module.exports = App;
