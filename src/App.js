const Lotto = require("./Lotto");
const MU = require("@woowacourse/mission-utils");
class App {
  play() {
    this.buyLotto();
  }
  buyLotto() {
    MU.Console.readLine('구입금액을 입력해 주세요.\n',(money) => {
      if(isNaN(money)) {
        throw new Error("[ERROR] 구입금액은 숫자여야 합니다.");
      }
      if(parseInt(money/1000) === 0) {
        throw new Error("[ERROR] 최소 구입금액은 1000원입니다.");
      }
      if(parseInt(money%1000) != 0) {
        throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
      }
      let purchaseNum = parseInt(money/1000);
      let lottos = this.makeLottoNum(purchaseNum);
      this.getWinNum(lottos);
      
    });
  }
  getWinNum(lottos) {
    MU.Console.readLine('\n당첨 번호를 입력해 주세요.\n', (number) =>{
      let stringToNum =  number.split(',').map(a => parseInt(a));
      let win = new Lotto(stringToNum);
      this.getBonusNum(lottos,win);
    });
  }
  getBonusNum(lottos,win) {
    MU.Console.readLine('\n보너스 번호를 입력해 주세요.\n', (number) =>{
      let bonus = parseInt(number);
      if(isNaN(number)) {
        throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
      }
      if(bonus < 1 || 45 < bonus) {
        throw new Error("[ERROR] 로또 범위 안의 숫자를 입력해주세요.");
      }
      if(win.getNumber().includes(bonus)) {
        throw new Error("[ERROR] 보너스 번호는 당첨번호와 중복될 수 없습니다.");
      }
      let winNum = win.getNumber();
      this.winLotto(winNum,bonus,lottos);
      return MU.Console.close();
    });
  }
  winLotto(win,bonus,lottos) {
    let rslt = Array.from({length: 6}, () => 0);
    for(let i = 0; i < lottos.length; i++) {
      rslt[this.isSameNum(win,bonus,lottos[i])]++;
    }
    console.log(rslt);
  }
  isSameNum(win, bonus, lotto) {
    let count = win.filter(x => lotto.includes(x)).length;
    if(count === 6) return 1;
    if(count === 5 && lotto.includes(bonus)) return 2;
    if(count === 5) return 3;
    if(count === 4 || count === 3) return 8 -count;
    return 0;
  }
  makeLottoNum(purchaseNum) {
    let lottos = [purchaseNum];
    for(let i = 0; i < purchaseNum; i++) {
      lottos[i] = MU.Random.pickUniqueNumbersInRange(1,45,6);
    }
    for(let i = 0; i < lottos.length; i++){
      lottos[i].sort((a,b) => {
        return a-b;
      });
    }
    this.printBuyLotto(lottos);
    return lottos;
  }
  printBuyLotto(lottos) {
    MU.Console.print(`\n${lottos.length}개를 구매했습니다.`);
    for(let i = 0; i < lottos.length; i++){
      MU.Console.print(lottos[i]);
    }
  }
  
}
const app = new App(); // 테스트코드
app.play(); // 테스트코드
module.exports = App;
