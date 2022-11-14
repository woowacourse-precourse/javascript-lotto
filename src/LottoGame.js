const Utils = require("./Utils");
const Lotto = require("./Lotto");
const Validation = require('./Validation');


const prizeObject = [
    [0, 0],
    [2000000000, 0],
    [30000000, 0],
    [1500000, 0],
    [50000, 0],
    [5000, 0],
];

const gameSetting = {
    length: 0,
    maxNumber: 0,
    minPrice: 0,
}

class GameBuilder {

    lottoLength(length) {
        this.lottoLength = length;
        return this;
    }

    maxNumber(max) {
        this.maxNumber = max;
        return this;
    }

    minPrice(price) {
        this.minPrice = price;
        return this;
    }

    build() {
        return new LottoGame(this.lottoLength, this.maxNumber, this.minPrice);
    }
}

class LottoGame {
    constructor(lottoLength, maxNumber, minPrice) {
        this.lottoLength = lottoLength;
        this.maxNumber = maxNumber;
        this.minPrice = minPrice;

        gameSetting.length = this.lottoLength;
        gameSetting.maxNumber = this.maxNumber;
        gameSetting.minPrice = this.minPrice;

        
        this.lottoContainer = undefined;
        this.issuedLottos = [];
        this.bonusNumber = 0;
        this.cost = 0;

    }

    play() {
        this.onInput('구입금액을 입력해주세요.\n', this.onGame);
    }

    onInput(question, callback) {
        Utils.readLine(question, callback.bind(this));
      }
    
    onGame(input) {
        Validation.validate(input);
        this.cost = Number(input);
        
        const nLottos = this.countLottos(this.cost);
        
        this.issuedLottos = this.issueLottery(nLottos)
        
        Utils.print(`${nLottos}개를 구매했습니다.`);

        this.showIssuedLottos();
        
        this.onInput('\n당첨 번호를 입력해 주세요.\n', this.onInputTargetNumbers);
    }
    
    onInputTargetNumbers(input) {
        this.lottoContainer = new Lotto(this.setTargetNumbers(input));

        this.onInput('\n보너스 번호를 입력해 주세요.\n', this.onInputBonusNumber);
    }
    
    onInputBonusNumber(input) {
        this.bonusNumber = Number(input);
        const targetNumbers = this.lottoContainer.getTargetNumbers();
        Validation.validate(this.bonusNumber, targetNumbers);
        this.showStaticstic();
        Utils.close();
    }
    
    countLottos(input) {
        let count = 0;

        if(input % this.minPrice == 0) count = input / this.minPrice;
        else throw new Error(`[ERROR] 금액은 ${this.minPrice}원 단위로 숫자만 입력해주세요.`);

        return count;
    }

    issueLottery(iter) {
        let array = [];

        for(let i = 0; i < iter; i++) array.push(Utils.getLottoNumbers().sort((a, b) => a - b));

        return array;
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

    setTargetNumbers(input) {
        if(!input.includes(',')) throw new Error('[ERROR] 당첨 번호는 콤마(,)를 사용해서 구분해주세요.');

        let countComma = input.match(/,/g).length ? input.match(/,/g).length : 0;

        if(countComma !== (gameSetting.length - 1)) throw new Error(`[ERROR] 당첨 번호는 콤마(,)를 사용해서 구분해주세요.(${gameSetting.length - 1}개)`);
        
        let array = input.split(',').map(num => Number(num));

        let max = Math.max(...array);
        
        if(max > gameSetting.maxNumber || array.includes(0)) throw new Error(`[ERROR] 번호는 1~${gameSetting.maxNumber} 사이의 수 ${gameSetting.length}자리를 입력해주세요.`);

        return array.sort();
    }


    getBenefitRate() {
        let prize;
        let earnMoney = 0;

        for(let lotto of this.issuedLottos) {
            prize = this.lottoContainer.getResult(lotto, this.bonusNumber)
            prizeObject[prize][1]++;
            earnMoney += prizeObject[prize][0];
        } 

        return ((earnMoney / this.cost)* 100).toFixed(1);
        }

    showStaticstic() {
        const benefitRate = this.getBenefitRate();

        const msg = `
당첨 통계
---
3개 일치 (${this.commaDelimeter(prizeObject[5][0])}원) - ${prizeObject[5][1]}개
4개 일치 (${this.commaDelimeter(prizeObject[4][0])}원) - ${prizeObject[4][1]}개
5개 일치 (${this.commaDelimeter(prizeObject[3][0])}원) - ${prizeObject[3][1]}개
5개 일치, 보너스 볼 일치 (${this.commaDelimeter(prizeObject[2][0])}원) - ${prizeObject[2][1]}개
6개 일치 (${this.commaDelimeter(prizeObject[1][0])}원) - ${prizeObject[1][1]}개
총 수익률은 ${benefitRate}%입니다.
    `

        Utils.print(msg);
    }

    commaDelimeter(num) {
        return num.toLocaleString('ko-KR');
    }



}


exports.gameSetting = gameSetting;
exports.GameBuilder = GameBuilder;