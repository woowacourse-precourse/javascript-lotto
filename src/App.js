const Lotto = require("../src/Lotto");
const MissionUtils = require("@woowacourse/mission-utils");
const main_loop = ()=>{
  MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (answer)=>{
    if (parseInt(answer)!=answer){
      throw new Error("[ERROR] 정상적인 숫자가 아닙니다.") 
    }
    if (parseInt(answer)%1000!==0){
      throw new Error("[ERROR] 금액은 천원단위로 입력해야 합니다.")
    }
    input_money = parseInt(answer)/1000
    MissionUtils.Console.print(`${input_money}개를 구매했습니다.`)
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (solution)=>{
      MissionUtils.Console.print(`${solution}`)
      MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (bouns)=>{
        MissionUtils.Console.print(`${bouns}`)
        let Lottos = random_lotto_generate(input_money)
        let result = {"0":0, "5000":0, "50000":0, "1500000":0, "30000000":0, "2000000000":0}    
        for (let i = 0; i < Lottos.length; i++){
          Lottos[i].get_lotto_number()
          let temp_lot_result = Lottos[i].calculate_cnt(solution, bouns)
          result[temp_lot_result] += 1          
        }
        calculate_benefit(result, input_money)
      })
    })
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

const calculate_benefit = (final_result, input_money) => {
  MissionUtils.Console.print("당첨 통계")
  MissionUtils.Console.print("---")
  total_earn = 0
  for (i in final_result){
    total_earn += parseInt(i)*parseInt(final_result[i])
    switch(i){
      case "0":
        break
      case "5000":
        MissionUtils.Console.print(`3개 일치 (5,000원) - ${final_result[i]}개`)
        break
      case "50000":
        MissionUtils.Console.print(`4개 일치 (50,000원) - ${final_result[i]}개`)
        break
      case "1500000":
        MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${final_result[i]}개`)
        break
      case "30000000":
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${final_result[i]}개`)
        break
      case "2000000000":
        MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${final_result[i]}개`)
        break
    }    
  }
  final_benefit_ratio = (total_earn/(parseInt(input_money)*1000))*100
  MissionUtils.Console.print(`총 수익률은 ${final_benefit_ratio}%입니다.`)
}

class App {
  play() {
    main_loop()
  }
}

module.exports = App;
