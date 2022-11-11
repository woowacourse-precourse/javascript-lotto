const MissionUtils = require("@woowacourse/mission-utils");
const Utils = require("./Utils");
const Lotto = require("./Lotto");

class App {

  constructor() {
    Utils.print('로또 게임을 시작합니다~!');
    this.cost = undefined;
  }
  

  play() {
    Utils.readLine('구입금액을 입력해 주세요.\n', (input) => {
      const cost = this.onValidation(Number(input));
      const nLottos = this.countLottos(cost);
      
      console.log(this.issueLottery(nLottos));

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

}

const app = new App();
app.play();

module.exports = App;
