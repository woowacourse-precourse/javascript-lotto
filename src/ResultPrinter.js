const Utils = require("./Utils");


const prizeMoneyObject = [
    [0, 0],
    [2000000000, 0],
    [30000000, 0],
    [1500000, 0],
    [50000, 0],
    [5000, 0],
];

class ResultPrinter {

    constructor(nLottos, issuedLottos) {
        this.nLottos = nLottos;
        this.issuedLottos = issuedLottos;
    }

    setLottoContainer(lottoContainer) {
        this.lottoContainer = lottoContainer;
    }

    showBoughtLottos() {
        Utils.print(`${this.nLottos}개를 구매했습니다.`);
    }
    
    showIssuedLottos() {
        for(let lotto of this.issuedLottos) Utils.print(this.buildText(lotto));
    }

    buildText(lotto) {
        let msg = '[';

        for(let i = 0; i < lotto.length; i++) {
            if(i == lotto.length - 1) {
            msg += lotto[i] + ']';
            break;
            }
            
            msg += lotto[i] + ', ';
        }

        return msg;
    }

    getBenefitRate() {
        let prize;
        let earnMoney = 0;

        for(let lotto of this.issuedLottos) {
            prize = this.lottoContainer.drawLottery(lotto, this.bonusNumber)
            prizeMoneyObject[prize][1]++;
            earnMoney += prizeMoneyObject[prize][0];
        } 
        return ((earnMoney / this.lottoContainer.cost)* 100).toFixed(1);
    }

    showStaticstic() {
        const benefitRate = this.getBenefitRate();

        const msg = `
당첨 통계
---
3개 일치 (${this.commaDelimeter(prizeMoneyObject[5][0])}원) - ${prizeMoneyObject[5][1]}개
4개 일치 (${this.commaDelimeter(prizeMoneyObject[4][0])}원) - ${prizeMoneyObject[4][1]}개
5개 일치 (${this.commaDelimeter(prizeMoneyObject[3][0])}원) - ${prizeMoneyObject[3][1]}개
5개 일치, 보너스 볼 일치 (${this.commaDelimeter(prizeMoneyObject[2][0])}원) - ${prizeMoneyObject[2][1]}개
6개 일치 (${this.commaDelimeter(prizeMoneyObject[1][0])}원) - ${prizeMoneyObject[1][1]}개
총 수익률은 ${benefitRate}%입니다.
    `

        Utils.print(msg);
    }

    commaDelimeter(num) {
        return num.toLocaleString('ko-KR');
    }

}

module.exports = ResultPrinter;