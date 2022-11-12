const buyAmountCheck = (money) => {
    if (parseInt(Number(money) / 1000) !== 0) {
        throw new Error('[ERROR] 1000원 단위로 입력해주세요. (예. 1000, 5000, 10000)');
    }
}

const notNumber = (money) => {
    if (isNaN(money)) {
        throw new Error('[ERROR] 숫자만 입력해주세요.');
    }
}

const notBuy = (money) => {
    if (Number(money) === 0) {
        throw new Error('[ERROR] 1000원(1장) 이상 입력해주세요.');
    }
}

const errorBuyHandling = (money) => {
    buyAmountCheck(money);
    notNumber(money);
    notBuy(money);
}

module.exports = errorBuyHandling;