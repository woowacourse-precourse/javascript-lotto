const MissionUtils = require("@woowacourse/mission-utils");
const allIncome = require('./allIncome');

const printLottoResult = (lottoResult, userBuyMoney) => {
    const allIncomePer = ((allIncome(lottoResult) / userBuyMoney) * 100).toFixed(1);
    printContents(lottoResult, allIncomePer);
}

const printContents = (lottoResult, totalPer) => {
    const contents = `
        당첨 통계
        ---
        3개 일치 (5,000원) - ${lottoResult.three.count}개
        4개 일치 (50,000원) - ${lottoResult.four.count}개
        5개 일치 (1,500,000원) - ${lottoResult.five.count}개
        5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult.fiveBonus.count}개
        6개 일치 (2,000,000,000원) - ${lottoResult.six.count}개
        총 수익률은 ${totalPer}%입니다.
    `;

    MissionUtils.Console.print(contents);
    MissionUtils.Console.close();
}

module.exports = printLottoResult;