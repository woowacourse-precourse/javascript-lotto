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

module.exports = {
    includedLotto,
    includedBonus
}