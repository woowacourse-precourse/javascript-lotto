const Utils = require("./Utils");
const Lotto = require("./Lotto");

class App {

  constructor() {
    // Utils.print('로또 게임을 시작합니다~!');
  }
  
  play() {
    Utils.readLine('구입금액을 입력해 주세요.\n', (input) => {
      const cost = this.onValidation(Number(input));
      const nLottos = this.countLottos(cost);
      
      console.log(this.issueLottery(nLottos));

      Utils.readLine('당첨 번호를 입력해 주세요.\n', (input) => {
        this.setTargetNumbers(input);
      });

      // Utils.close();
    });
  }

  onValidation(input) {
    
    if(typeof input !== 'number' || Number.isNaN(input)) throw new Error('[ERROR] 금액은 1000원 단위로 숫자만 입력해주세요.');

    return input;
  }

  countLottos(input) {
    let count = 0;

    if(input % 1000 == 0) count = input / 1000;
    else throw new Error('[ERROR] 금액은 1000원 단위로 숫자만 입력해주세요.');

    return count;
  }

  issueLottery(iter) {
    let array = [];

    for(let i = 0; i < iter; i++) array.push(Utils.getLottoNumbers());

    return array;
  }

  setTargetNumbers(input) {
    if(!input.includes(',')) throw new Error('[ERROR] 당첨 번호는 콤마(,)를 사용해서 구분해주세요.');

    let countComma = input.match(/,/g).length ? input.match(/,/g).length : 0;
    console.log(countComma);

    if(countComma > 5) throw new Error('[ERROR] 당첨 번호는 콤마(,)를 사용해서 구분해주세요.(5개)');
    
    let array = input.split(',').map(num => Number(num));

    let max = Math.max(...array);

    if(max > 45 || array.includes(0)) throw new Error('[ERROR] 당첨 번호는 1~45 사이의 수를 입력해주세요.');

    return array;
  }

 

}

const app = new App();
app.play();

module.exports = App;
