const Utils = require('./Utils');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.purchaseAmount = 0;
    this.userLottos = [];
    this.winningLotto = undefined;
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
      const quantity = this.countLottoQuantity();
      Utils.print(`${quantity}개를 구매했습니다.`);

      this.userLottos = this.createLotto(quantity);
      for(const userLotto of this.userLottos) { 
        this.printLotto(userLotto);
      }

      Utils.readLine('당첨 번호를 입력해 주세요.\n', (input) => {
        this.winningLotto = new Lotto(this.createLottoArray(input));

        Utils.readLine('보너스 번호를 입력해 주세요.\n', (input) => {
          this.winningBonusNumber = Number(input) 
          this.winningLotto.validateBonusBallNumber(this.winningBonusNumber);
          const revenue = this.createStaticstic();
          this.printStaticstic(revenue);
          Utils.close();
        });
      });
    });
  }

  validateAmount(){
    if (this.purchaseAmount === 0 || this.purchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1,000원 단위로 숫자만 입력해야 합니다.");
    }
  }

  countLottoQuantity(){
    let quantity = 0;
    quantity = this.purchaseAmount / 1000;

    return quantity
  }

  createLotto(quantity){
    let lottos = [];
    for(let count = 0; count < quantity; count++){
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
      throw new Error("[ERROR] 당첨 번호는 ','를 기준으로 구분해주세요.");
    }
    let winningLotto = input.split(",").map(Number);
    return winningLotto;
  }
  
  createStaticstic(){
    let rank;
    let revenue = 0;
    for(const userLotto of this.userLottos){
      rank = this.winningLotto.compareLottoNumber(userLotto, this.winningBonusNumber);
      if(rank == -1) continue;
      this.winningResult[rank][0] += 1;    
      revenue += this.winningResult[rank][1];
    }
    
    return revenue;
  }

  printStaticstic(revenue){
    const totalRevenue = ((revenue / this.purchaseAmount) * 100).toFixed(1);
    const result = `
    3개 일치 (5,000원) - ${this.winningResult[0][0]}개
    4개 일치 (50,000원) - ${this.winningResult[1][0]}개
    5개 일치 (1,500,000원) - ${this.winningResult[2][0]}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winningResult[3][0]}개
    6개 일치 (2,000,000,000원) - ${this.winningResult[4][0]}개
    총 수익률은 ${totalRevenue}%입니다.
    `
    Utils.print(result);
  }
}

const app = new App();
app.play();

module.exports = App;
