const { MissionUtils } = require("@woowacourse/mission-utils");
const DrawLots = require("./DrawLots");
const Lotto = require("./Lotto");
const LottoGenerator = require("./LottoGenerator");

class App {
  play() {
    let purchase = 0;
    let count = 0;
    MissionUtils.Console.readLine('구입금액을 입력해 주세요. : ', (answer) => {
      if(Number(answer) / 1000 != 0){
        throw new Error("[ERROR] 1000원 단위로 입력해야 합니다.");
      }
      count = Number(answer) / 1000;
      purchase = Number(answer);
    });
    MissionUtils.Console.print('\n');
    MissionUtils.Console.print(`${count}개를 구매했습니다.\n`);

    let generator = new LottoGenerator();
    const userlottos = new Array(count).fill(0).map(() => new Array(6));
    for(let i = 0; i < count; i++){
      userlottos[i] = generator.createLottoNumbers();
    }
    generator.printLottos(userlottos);

    let lotto = [0,0,0,0,0,0];
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요. : ', (answer) => {
      let numbers = answer.split(",").map(Number);
      lotto = new Lotto(numbers);
    });
    let bonusNum = 0;
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요. : ', (answer) => {
      bonusNum = Number(answer);
    });
    let result = new DrawLots();
    let win = 0;
    let prize = [0,0,0,0,0];

    for(let x = 0; x < count; x++){
      win = result.compare(lotto,userlottos[x]);
      let isEqualBonus = false;
      for(let y = 0; y < userlottos[x].length; y++){
          if(bonusNum === userlottos[x][y]){
              isEqualBonus = true;
          }
      }
      switch (win) {
          case 3: prize[0] += 1; break;
          case 4: prize[1] += 1; break;
          case 5: (isEqualBonus == false ? prize[2]+=1 : prize[3]+=1); break;
          case 6: prize[4] +=1; break;
      }
    }
    const prizeMoney = (5000 * prize[0]) + (50000 * prize[1]) + (1500000 * prize[2]) + (30000000 * prize[3]) + (2000000000* prize[4]);
    const rateOfreturn = (purchase / prizeMoney * 100).toFixed(1);

    MissionUtils.print('당첨 통계\n');
    MissionUtils.print('---\n');
    MissionUtils.print(`3개 일치 (5,000원) - ${prize[0]}개\n`);
    MissionUtils.print(`4개 일치 (50,000원) - ${prize[1]}개\n`);
    MissionUtils.print(`5개 일치 (1,500,000원) - ${prize[2]}개\n`);
    MissionUtils.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${prize[3]}개\n`);
    MissionUtils.print(`6개 일치 (2,000,000,000원) - ${prize[4]}개\n`);
    MissionUtils.print(`총 수익률은 ${rateOfreturn}%입니다.`);
  }
}

module.exports = App;
