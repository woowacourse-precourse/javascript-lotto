const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
const main_loop = ()=>{
  MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answer)=>{
    if (parseInt(answer)%1000!==0){
      throw new Error("[ERROR] 금액은 천원단위로 입력해야 합니다.")
    }
    input_money = parseInt(answer)/1000
    MissionUtils.Console.print(`${input_money}개를 구매했습니다.`)
    let Lottos = random_lotto_generate(input_money)
    for (let i = 0; i < Lottos.length; i++){
      Lottos[i].get_lotto_number()
    }
  })
}

const random_lotto_generate = (input_money) => {
  let Lottos = []
  for (let i = 0; i < input_money; i++){
    let numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    temp_lot = new Lotto(numbers)
    Lottos.push(temp_lot)
  }
  return Lottos
}

class App {
  play() {
    main_loop()
  }
}

module.exports = App;
