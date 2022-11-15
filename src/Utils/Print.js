const MissionUtils = require("@woowacourse/mission-utils");

class Print {
  constructor() {}

  printTicketCount(count) {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
  }

  printLottoTicket(lottoTicket) {
    lottoTicket.forEach((ticket) => {
      MissionUtils.Console.print(`[${ticket[0]}, ${ticket[1]}, ${ticket[2]}, ${ticket[3]}, ${ticket[4]}, ${ticket[5]}]`);
    });
  }

  printWinningStatistics(totalLottoResult, rateOfReturn) {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${totalLottoResult["5등"]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${totalLottoResult["4등"]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${totalLottoResult["3등"]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${totalLottoResult["2등"]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${totalLottoResult["1등"]}개`);
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
    MissionUtils.Console.close();
  }
}

module.exports = Print;
