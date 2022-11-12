const LottoMarket = require('./LottoMarket');

class User{
    constructor(money) {
        this.money = money;
    }

    buyLotto(lottoMarket){
        lottoMarket.purchaseLotto(this.money);
    }
}