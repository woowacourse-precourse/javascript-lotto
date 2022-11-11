class PrizeInformation {
    constructor() {
        this.message = ["", "3개 일치", "4개 일치", "5개 일치", "5개 일치, 보너스 볼 일치", "6개 일치"];
        this.prize = [0, 2000000000, 30000000, 1500000, 50000, 5000];
        this.quantity = [0, 0, 0, 0, 0, 0];
    }
}

module.exports = {
    PrizeInformation
}