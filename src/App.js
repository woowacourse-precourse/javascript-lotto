const Lotto = require('./Lotto');
const Utils = require('./Utils');

class App {
  constructor() {
    this.purchaseAmount = 0;
    this.lotto = [];
    this.winningNumbers;
    this.winningBonusNumber = 0;
    this.winningResult = [
      [0, 5000],
      [0, 50000],
      [0, 1500000],
      [0, 30000000],
      [0, 2000000000]];
  }

  play() {
    Utils.readLine('구입금액을 입력해 주세요.' , (input) => {
      this.purchaseAmount = Number(input);
      this.validateAmount();
      const count = this.countLotto();
      Utils.print(`${count}개를 구매했습니다.`);
      this.lotto = this.createLotto(count);
      for(const userLotto of this.lotto) { 
        this.printLotto(userLotto);
      }

      Utils.readLine('당첨 번호를 입력해 주세요.\n', (input) => {
        this.winningNumbers = new Lotto(this.createLottoArray(input));

        Utils.readLine('보너스 번호를 입력해 주세요.\n', (input) => {
          this.winningBonusNumber = Number(input) 
          this.winningNumbers.validateBonusBallNumber(this.winningBonusNumber);
          const revenue = this.calcStaticstics();
          this.printStaticstics(revenue);
          Utils.close();
        });
      });
    });
  }

  validateAmount(){
    if (this.purchaseAmount == 0 || this.purchaseAmount % 1000 != 0) {
      throw new Error("[ERROR] 구입금액은 1,000원 단위로 입력하세요.");
    }
  }

  countLotto(){
    let count = 0;
    count = this.purchaseAmount / 1000;
    return count
  }

  createLotto(count){
    let lottos = [];
    for(let i = 0; i < count; i++){
      lottos.push(Utils.pickNumberInLotto());
    }
    return lottos;
  }

  printLotto(userLotto){
    let result = `[`;
    for(let index = 0; index < userLotto.length; index++){
      const number = userLotto[index];
      if(index == userLotto.length - 1){
        result += `${number}`;
      }
      else{
        result += `${number}, `;
      }
    }
    result += `]`;
    Utils.print(result);
  }

  createLottoArray(input){
    if(!input.includes(",")){
      throw new Error("[ERROR] ','를 기준으로 구분하세요.");
    }
    let winningNumbers = input.split(",").map(Number);
    return winningNumbers;
  }
  
  calcStaticstics(){
    let result;
    let revenue = 0;
    for(const userLotto of this.lotto){
      result = this.winningNumbers.compareLottoNumber(userLotto, this.winningBonusNumber);
      if(result == -1) continue;
      this.winningResult[result][0] += 1;    
      revenue += this.winningResult[result][1];
    }
    return revenue;
  }

  printStaticstics(revenue){
    const total = ((revenue / this.purchaseAmount) * 100).toFixed(1);
    const result = 
    `3개 일치 (5,000원) - ${this.winningResult[0][0]}개
    4개 일치 (50,000원) - ${this.winningResult[1][0]}개
    5개 일치 (1,500,000원) - ${this.winningResult[2][0]}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winningResult[3][0]}개
    6개 일치 (2,000,000,000원) - ${this.winningResult[4][0]}개
    총 수익률은 ${total}%입니다.`
    Utils.print(result);
  }
}

const app = new App();
app.play();

module.exports = App;