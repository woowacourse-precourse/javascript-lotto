const Utils = require("./Utils");
const Lotto = require("./Lotto");

const prizeObject = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
}

class App {

  constructor() {
    // Utils.print('로또 게임을 시작합니다~!');
    this.lottoContainer = undefined;
    this.issuedLottos = [];
    this.bonusNumber = 0;
  }
  
  play() {
    Utils.readLine('구입금액을 입력해 주세요.\n', (input) => {
      const cost = this.onValidation(Number(input));
      const nLottos = this.countLottos(cost);
      
      this.issuedLottos = this.issueLottery(nLottos)
      Utils.print(`${nLottos}개를 구매했습니다.`);
      for(let lotto of this.issuedLottos) Utils.print(lotto);

      Utils.readLine('\n당첨 번호를 입력해 주세요.\n', (input) => {
        this.lottoContainer = new Lotto(this.setTargetNumbers(input));
        Utils.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
          this.bonusNumber = this.setBonusNumber(input);
          this.showStaticstic();

        });
      });

      

      // Utils.close();
    });
  }

  onValidation(input) {
    
    if(typeof input !== 'number' || Number.isNaN(input)) throw new Error('[ERROR] 금액은 1000원 단위로 숫자만 입력해주세요.');

    if(input < 1000) throw new Error('[ERROR] 로또 구입의 최소 금액은 1000원 입니다.');

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

    console.log();
    for(let i = 0; i < iter; i++) array.push(Utils.getLottoNumbers().sort((a, b) => a - b));

    return array;
  }

  setTargetNumbers(input) {
    if(!input.includes(',')) throw new Error('[ERROR] 당첨 번호는 콤마(,)를 사용해서 구분해주세요.');

    let countComma = input.match(/,/g).length ? input.match(/,/g).length : 0;

    if(countComma !== 5) throw new Error('[ERROR] 당첨 번호는 콤마(,)를 사용해서 구분해주세요.(5개)');
    
    let array = input.split(',').map(num => Number(num));

    let max = Math.max(...array);

    if(max > 45 || array.includes(0)) throw new Error('[ERROR] 번호는 1~45 사이의 수를 입력해주세요.');

    return array.sort();
  }

  setBonusNumber(input) {
    input = Number(input);
    if(Number.isNaN(input) || input > 45 || input <= 0) throw new Error('[ERROR] 번호는 1~45 사이의 수를 입력해주세요.');

    return input;
  }

  showStaticstic() {

    for(let lotto of this.issuedLottos) {
      console.log(lotto);
      console.log(`당신의 등수는 ? ${this.lottoContainer.getResult(lotto, this.bonusNumber)}`);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
