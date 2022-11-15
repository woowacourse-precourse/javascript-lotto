
const printLottoResult = require('./printResult');
const allIncome = require('./allIncome');
const { includedLotto, includedBonus } = require('./lottoBonusCheck');
const { RESULT_CHECK } = require('../constant/constant');

const lottoGame = (inputNumber, lottoArray, bonusNumber, userBuyMoney) => {
    const resultCheck = RESULT_CHECK;
    
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

module.exports = lottoGame;