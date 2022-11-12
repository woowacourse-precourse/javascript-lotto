const Utils = require("./Utils");
const Lotto = require("./Lotto");
const Validation = require('./Validation');

const prizeObject = [
  [0, 0],
  [2000000000, 0],
  [30000000, 0],
  [1500000, 0],
  [50000, 0],
  [5000, 0],
]

class App {

  constructor() {
    // Utils.print('로또 게임을 시작합니다~!');
    this.lottoContainer = undefined;
    this.issuedLottos = [];
    this.bonusNumber = 0;
    this.cost = 0;

  }
  
  play() {
    this.onInput('구입금액을 입력해주세요.\n', this.onGame);
  }

  onInput(question, callback) {
    Utils.readLine(question, callback.bind(this));
  }

  onGame(input) {
      Validation.validate(input);
      this.cost = Number(input);
      
      const nLottos = this.countLottos(this.cost);
      
      this.issuedLottos = this.issueLottery(nLottos)
      
      Utils.print(`${nLottos}개를 구매했습니다.`);

      this.showIssuedLottos();
      
      this.onInput('\n당첨 번호를 입력해 주세요.\n', this.onInputTargetNumbers);
  }

  onInputTargetNumbers(input) {
    this.lottoContainer = new Lotto(this.setTargetNumbers(input));

    this.onInput('\n보너스 번호를 입력해 주세요.\n', this.onInputBonusNumber);
  }

  onInputBonusNumber(input) {
    this.bonusNumber = Number(input);
    this.lottoContainer.validate(this.bonusNumber);
    this.showStaticstic();
    Utils.close();
  }

  showIssuedLottos() {
    for(let lotto of this.issuedLottos) {
      Utils.print(this.buildText(lotto));
    }
  }

  buildText(lotto) {
    let msg = '[';

    for(let i = 0; i < lotto.length; i++) {
      if(i == lotto.length - 1) {
        msg += lotto[i] + ']';
        break;
      }
      
      msg += lotto[i] + ', ';
    }

    return msg;
  }

  countLottos(input) {
    let count = 0;

    if(input % 1000 == 0) count = input / 1000;
    else throw new Error('[ERROR] 금액은 1000원 단위로 숫자만 입력해주세요.');

    return count;
  }

  issueLottery(iter) {
    let array = [];

    for(let i = 0; i < iter; i++) array.push(Utils.getLottoNumbers().sort((a, b) => a - b));

    return array;
  }

  setTargetNumbers(input) {
    if(!input.includes(',')) throw new Error('[ERROR] 당첨 번호는 콤마(,)를 사용해서 구분해주세요.');

    let countComma = input.match(/,/g).length ? input.match(/,/g).length : 0;

    if(countComma !== 5) throw new Error('[ERROR] 당첨 번호는 콤마(,)를 사용해서 구분해주세요.(5개)');
    
    let array = input.split(',').map(num => Number(num));

    let max = Math.max(...array);
    
    if(max > 45 || array.includes(0)) throw new Error('[ERROR] 번호는 1~45 사이의 수 6자리를 입력해주세요.');

    return array.sort();
  }


  getBenefitRate() {
    let prize;
    let earnMoney = 0;

    for(let lotto of this.issuedLottos) {
      prize = this.lottoContainer.getResult(lotto, this.bonusNumber)
      prizeObject[prize][1]++;
      earnMoney += prizeObject[prize][0];
    } 

    return ((earnMoney / this.cost)* 100).toFixed(1);
  }

  showStaticstic() {
    const benefitRate = this.getBenefitRate();

    const msg = `
당첨 통계
---
3개 일치 (${this.commaDelimeter(prizeObject[5][0])}원) - ${prizeObject[5][1]}개
4개 일치 (${this.commaDelimeter(prizeObject[4][0])}원) - ${prizeObject[4][1]}개
5개 일치 (${this.commaDelimeter(prizeObject[3][0])}원) - ${prizeObject[3][1]}개
5개 일치, 보너스 볼 일치 (${this.commaDelimeter(prizeObject[2][0])}원) - ${prizeObject[2][1]}개
6개 일치 (${this.commaDelimeter(prizeObject[1][0])}원) - ${prizeObject[1][1]}개
총 수익률은 ${benefitRate}%입니다.
    `

    Utils.print(msg);
  }

  commaDelimeter(num) {
    return num.toLocaleString('ko-KR');
  }
}

const app = new App();
app.play();

module.exports = App;
