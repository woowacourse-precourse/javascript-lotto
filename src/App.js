const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
const main_loop = ()=>{
  MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answer)=>{
    if (parseInt(answer)%1000!==0){
      throw new Error("[ERROR] 금액은 천원단위로 입력해야 합니다.")
    }
    input_money = parseInt(answer)/1000
    MissionUtils.Console.print(`${input_money}개를 구매했습니다.`)
    let Lottos = []
    for (let i = 0; i < input_money; i++){
      Lottos.push(new Lotto())
    }
  })
}


class App {
  play() {
    main_loop()
  }
}

module.exports = App;
