const { Console } = require('@woowacourse/mission-utils');

class ResultDisplay {
  printRandomNum(result) {
    Console.print(`\n${result.lottoQuantity}개를 구매했습니다.`);

    result.lottoNums.forEach((nums) => {
      let sortedNum = nums.sort((a, b) => a - b).join(', ');
      Console.print(`[${sortedNum}]\n`);
    });
  }

  printLottoResult(winStatus, amount) {
    const totalReturn = ((winStatus.totalReturn / amount) * 100).toFixed(1);
    Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${winStatus.countWinning[0]}개
4개 일치 (50,000원) - ${winStatus.countWinning[1]}개
5개 일치 (1,500,000원) - ${winStatus.countWinning[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${winStatus.countWinning[3]}개
6개 일치 (2,000,000,000원) - ${winStatus.countWinning[4]}개
총 수익률은 ${Number(totalReturn).toLocaleString()}%입니다.`);
    Console.close();
  }
}

module.exports = ResultDisplay;
