const MissionUtils = require("@woowacourse/mission-utils");

const lottoGame = (inputNumber, lottoArray, bonusNumber, userBuyMoney) => {
    const resultCheck = resultObject();
    
    lottoArray.forEach((numbers) => {
        const lottoCount = includedLotto(inputNumber, numbers);
        const bonusCheck = includedBonus(numbers, bonusNumber);

        if (lottoCount === 3) resultCheck.three.count += 1;
        if (lottoCount === 4) resultCheck.four.count += 1;
        if (lottoCount === 5) resultCheck.five.count += 1;
        if (lottoCount === 5 && bonusCheck) resultCheck.fiveBonus.count += 1;
        if (lottoCount === 6) resultCheck.six.count += 1;
    });

    printLottoResult(resultCheck, userBuyMoney);
}

const resultObject = () => {
    const resultCheck = {
        three: { count: 0, winnings: 5000 },
        four: { count: 0, winnings: 50000 },
        five: { count: 0, winnings: 1500000 },
        fiveBonus: { count: 0, winnings: 30000000 },
        six: { count: 0, winnings: 2000000000 }
    };

    return resultCheck;
}

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

const allIncome = (lottoResult) => {
    let income = 0;
    if (lottoResult.three.count > 0) income += (lottoResult.three.winnings * lottoResult.three.count);
    if (lottoResult.four.count > 0) income += (lottoResult.four.winnings * lottoResult.four.count);
    if (lottoResult.five.count > 0) income += (lottoResult.five.winnings * lottoResult.five.count);
    if (lottoResult.fiveBonus.count > 0) income += (lottoResult.fiveBonus.winnings * lottoResult.fiveBonus.count);
    if (lottoResult.six.count > 0) income += (lottoResult.six.winnings * lottoResult.six.count);

    return income;
}

const includedLotto = (inputNumber, lottoArray) => {
    let lottoCount = 0;
    const userNumber = inputNumber.split(',').map((num) => Number(num));
    lottoArray.forEach((number) => {
        if (userNumber.includes(number)) lottoCount += 1;
    })

    return lottoCount;
}

const includedBonus = (lottoArray, bonusNumber) => {
    let bonusCheck = false;
    lottoArray.forEach((number) => {
        if (number === bonusNumber) bonusCheck = true;
    })

    return bonusCheck;
}

module.exports = lottoGame;