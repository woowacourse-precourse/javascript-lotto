const MissionUtils = require("@woowacourse/mission-utils");
const LottoManager = require("./LottoManager");

const toConsole = (message, func, impl) => {
  MissionUtils.Console.readLine(message, (input) => {
    impl(input);

    if (func) { func() };
    // try {
    //   impl(input);

    //   if (func) { func() };
    // } catch (e) {
    //   MissionUtils.Console.print(e.message+'\n'+e.stack);
    //   MissionUtils.Console.close();
    // }
  });
}

class App {
  constructor() {
    this.lottoManager = new LottoManager();
    this.PRIZES = LottoManager.PRIZES;
  }
  
  play() {
    this.toConsoleExchangeLotto('구입금액을 입력해 주세요.\n', ()=>{
    this.toConsoleSetWinnerLotto('당첨 번호를 입력해 주세요.\n', ()=>{
    this.toConsoleSetWinnerBonus('보너스 번호를 입력해 주세요.\n', ()=>{
      this.#printResult();
      MissionUtils.Console.close();
    }) }) });
  }

  toConsoleExchangeLotto(message, func) {
    toConsole(message, func, (input)=>{
      const amount = parseInt(input);
      this.lottoManager.exchangeLotto(amount);
      this.#printPurchasedLotto();
    });
  }

  #printPurchasedLotto() {
    MissionUtils.Console.print(`${this.lottoManager.lottoUnit}개를 구매했습니다.`);
    this.lottoManager.lottos.forEach(lotto => {
      MissionUtils.Console.print(lotto.stringfy());
    });
  }

  toConsoleSetWinnerLotto(message, func) {
    toConsole(message, func, (input)=>{
      const numbers = input.split(',').map((v)=>parseInt(v));
      this.lottoManager.setWinnerLotto(numbers);
    });
  }

  toConsoleSetWinnerBonus(message, func) {
    toConsole(message, func, (input)=>{
      const num = parseInt(input);
      this.lottoManager.setBonusNumber(num);
    });
  }

  #printResult() {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
    
    const matchResult = this.lottoManager.run().result();

    MissionUtils.Console.print(`3개 일치 (${this.PRIZES[0].toLocaleString('en')}원) - ${matchResult[0]}개`);
    MissionUtils.Console.print(`4개 일치 (${this.PRIZES[1].toLocaleString('en')}원) - ${matchResult[1]}개`);
    MissionUtils.Console.print(`5개 일치 (${this.PRIZES[2].toLocaleString('en')}원) - ${matchResult[2]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (${this.PRIZES[3].toLocaleString('en')}원) - ${matchResult[3]}개`);
    MissionUtils.Console.print(`6개 일치 (${this.PRIZES[4].toLocaleString('en')}원) - ${matchResult[4]}개`);

    const y = this.lottoManager.yield();
    MissionUtils.Console.print(`총 수익률은 ${y.toLocaleString('en')}%입니다.`)
  }
}

const app = new App();
app.play();

module.exports = App;
