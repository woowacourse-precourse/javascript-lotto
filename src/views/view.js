const MissionUtils = require('@woowacourse/mission-utils')

class View{

  constructor(){

  }

  lottoCountPrint(number) {
    MissionUtils.Console.print(number + '개를 구매했습니다.')
  }

  lottoNumberPrint(numbers) {
    MissionUtils.Console.print('[' + numbers.join(', ') + ']')
  }

  winningStatistics(rank, rateOfReturn){
    MissionUtils.Console.print("당첨 통계\n---");
    MissionUtils.Console.print("3개 일치 (5,000원) - " + rank[3]+"개");
    MissionUtils.Console.print("4개 일치 (50,000원) - " + rank[2]+"개");
    MissionUtils.Console.print("5개 일치 (1,500,000원) - " + rank[1]+"개");
    MissionUtils.Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - "+ rank[4]+"개");
    MissionUtils.Console.print("6개 일치 (2,000,000,000원) - "+ rank[0]+"개");
    MissionUtils.Console.print("총 수익률은 "+rateOfReturn+"%입니다.")
  }

}

module.exports = View;