class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");

    MissionUtils.Console.readLine("구입금액을 입력해 주세요. \n"), (purchase) => {
      const purchaseInput = purchase;
      console.log(purchaseInput + '\n\n');

      if(purchaseInput % 1000 != 0) {
        throw new Error('예외 발생- 1,000원 단위로 입력해주세요.');
      }

      //발행한 로또 수량 및 번호 출력
      const count = purchase / 1000;
      this.printer("%d개를 구매했습니다. \n", count);
      const lotto = new Array(count); //빈 로또 배열 생성
      for(let i = 0; i < count; i++){
        lotto[i] = new Array(6); //배열 내에 숫자 6개를 담을 배열 생성
        lotto[i] = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        this.printer(lotto[i] + '\n');
      }
      this.printer('/n');

      //당첨 번호 입력받음
      const Numbers = [];
      this.readLine("당첨 번호를 입력해 주세요."), (numbers) => {
        Numbers = numbers.split(',');
        console.log(Numbers);
      }

      //보너스 번호 입력받음
      this.readLine("보너스 번호를 입력해 주세요."), (bonus) => {
        Numbers.push(bonus);
        console.log(bonus);
      }

      
  
    };

  }
}

module.exports = App;
