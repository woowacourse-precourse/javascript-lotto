const Utils = require('./Utils');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.userLottos = [];
    this.winningLotto = [];
    this.winningBonusNumber = 0;
    this.winningResult = [0, 0, 0, 0, 0]  
  }

  play() {
    Utils.readLine('구입금액을 입력해 주세요.\n' , (input) => {
      const amount = this.validateAmount(Number(input));
      const quantity = this.countLottoQuantity(amount);
      Utils.print(`\n${quantity}개를 구매했습니다.`);
      this.userLottos = this.createLotto(quantity);
      for(const userLotto of this.userLottos) { 
        Utils.print(userLotto);
      }
      Utils.readLine('당첨 번호를 입력해 주세요.\n', (input) => {
        this.winningLotto = this.createLottoArray(input);
        new Lotto(this.winningLotto);
        Utils.readLine('보너스 번호를 입력해 주세요.\n', (input) => {
          this.winningBonusNumber = Number(input);
            for(const userLotto of this.userLottos) { 
              this.compareLottoNumber(userLotto);
            }
            Utils.close();
        });
      });
    });
  }

  validateAmount(input){
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
    if(!input.includes(",")){
      throw new Error("[ERROR] 당첨 번호는 ','를 기준으로 구분해주세요.");
    }
    let winningLotto = input.split(",").map(Number);
    return winningLotto;
  }

  compareLottoNumber(userLotto){
    let matchCount = 0;
    for(let index = 0; index < userLotto.length; index++){
      if(userLotto.includes(this.winningLotto[index])){
        matchCount += 1;
      }
      console.log(matchCount);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
