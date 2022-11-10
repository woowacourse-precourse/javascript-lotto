const MissionUtils = require("@woowacourse/mission-utils");
const { BUY_LOTTO } = require('../constant/constant');

const buyAmountCheck = (money) => {
    if (parseInt(money / 1000) !== 0) {
        throw new Error('[ERROR] 0부터 1000원 단위로 입력해주세요. (예. 1000, 5000, 10000)');
    }
}
const howMuchBuy = () => {
    let userBuyAmount = 0;
    MissionUtils.Console.readLine(BUY_LOTTO, (input) => {
        buyAmountCheck(Number(input));
        userBuyAmount = Number(input);
    });

    return userBuyAmount;
}

module.exports = howMuchBuy;