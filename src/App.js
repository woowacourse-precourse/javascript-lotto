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

      //당첨 통계 출력
      console.log("당첨 통계 \n");
      console.log("--- \n");

      const n = []; //일치하는 값을 담을 배열
      const cnt3 = 0; //3개 일치하는 로또 갯수
      const cnt4 = 0; //4개 일치하는 로또 갯수
      const cnt5 = 0; //5개 일치하는 로또 갯수
      const cnt5_bonus = 0; //5개, 보너스 일치하는 로또 갯수
      const cnt6 = 0; //6개 일치하는 로또 갯수
      
      for(i = 0; i < count; i++){
        n = lotto[i].filter(it => Numbers.includes(it)); //일치하는 값을 찾아서 배열 n에 넣음
        if(n.length == 3) cnt3++;
        if(n.length == 4) cnt4++;
        if(n.length == 5 && !lotto[i].include(bonus)) cnt5++;
        if(n.length == 5 && lotto[i].include(bonus)) cnt5_bonus++;
        if(n.length == 6) cnt6++;
      }

      //수익률 계산
      const revenue = 0;
      revenue = (5000*cnt3 + 50000*cnt4 + 1500000*cnt5 
        + 30000000*cnt5_bonus + 2000000000*cnt6) / purchaseInput * 100;
      revenue = revenue.toFixed(1); //소숫점 둘째자리에서 반올림

      this.printer("3개 일치(5,000원) - %d개", cnt3);
      this.printer("4개 일치(50,000원) - %d개", cnt4);
      this.printer("5개 일치(1,500,000원) - %d개", cnt5);
      this.printer("5개 일치, 보너스 볼 일치 (30,000,000원) - %d개", cnt5_bonus);
      this.printer("6개 일치(2,000,000,000원) - %d개", cnt6);
      this.printer("총 수익률은 %d%%입니다.", revenue);
    };

  }
}

module.exports = App;
