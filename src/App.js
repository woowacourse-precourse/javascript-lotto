const MissionUtils = require("@woowacourse/mission-utils");
const AppUtils = require('./AppUtils');
const Lotto = require('./Lotto.js');
const MyLotto = require("./MyLotto.js");

class App {
  constructor() {
    this.myLotto = null;
    this.winLotto = null;
  }

  play() {
    // 어플리케이션 시작
    this.inputPurchase();
  }

  inputPurchase() {
    // 로또 구입 금액 입력
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      this.validate(input);       
      MissionUtils.Console.print('');
      this.myLotto = new MyLotto(parseInt(input));
      this.printStrings(AppUtils.toStringCountLotto(this.myLotto.getCount()));    // 구매한 로또 개수 출력
      this.printStrings(AppUtils.toStringMyLotto(this.myLotto.getMyLottoes()));   // 구매한 로또 발행 내역 출력
      MissionUtils.Console.print('');
      this.inputWinNum();
    });
  }

  inputWinNum() {
    // 당첨 번호 입력
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (input) => {
      MissionUtils.Console.print('');
      this.winLotto = new Lotto(
        input.replaceAll(' ', '')     // 공백 제거
        .split(',')                   // 쉼표 기준 숫자 분리
        .map(number => {              // 각 수를 Int 타입으로 파싱
          this.validate(number);       
          return parseInt(number);        
      }));
      this.inputBonusNum();
    });
  }

  inputBonusNum() {
    // 보너스 번호 입력
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (input) => {
      this.validate(input);     
      MissionUtils.Console.print('');
      this.winLotto.setBonusNum(parseInt(input));
      this.getResult();
    });
  }

  getResult() {
    // 결과 출력 및 종료
    const histories = AppUtils.getHistories(    // 로또 결과 확인
      this.myLotto.getMyLottoes(),    // 내 로또 내역
      this.winLotto.getNumbers(),     // 로또 당첨 번호 
      this.winLotto.getBonus()        // 로또 보너스 번호
    );
    const rate = AppUtils.calRate(              // 수익률 계산
      this.myLotto.getPurchase(),     // 구매 금액 확인
      AppUtils.calReward(histories)   // 당첨 금액 계산
    );
    this.printStrings(AppUtils.toStringStat(histories, rate));    // 로또 결과 출력
    MissionUtils.Console.close();
  }

  validate(input) {
    // 숫자 입력 여부 확인
    if (!input.match(/^[0-9]+$/)){
      throw new Error("[ERROR] 숫자를 입력해 주세요.");
    }
  }

  printStrings(strs) {
    // 문자열 || 문자열 배열 출력
    if (Array.isArray(strs)) {
      strs.forEach(str => {
        MissionUtils.Console.print(str);
      });
      return null;
    }
    MissionUtils.Console.print(strs);
  }
}

module.exports = App;
