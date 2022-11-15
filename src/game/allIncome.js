const allIncome = (lottoResult) => {
    let income = 0;
    if (lottoResult.three.count > 0) income += (lottoResult.three.winnings * lottoResult.three.count);
    if (lottoResult.four.count > 0) income += (lottoResult.four.winnings * lottoResult.four.count);
    if (lottoResult.five.count > 0) income += (lottoResult.five.winnings * lottoResult.five.count);
    if (lottoResult.fiveBonus.count > 0) income += (lottoResult.fiveBonus.winnings * lottoResult.fiveBonus.count);
    if (lottoResult.six.count > 0) income += (lottoResult.six.winnings * lottoResult.six.count);

    return income;
}

module.exports = allIncome;