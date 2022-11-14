const Utils = require("./Utils");
const ResultPrinter = require('./ResultPrinter')
const Lotto = require("./Lotto");
const Validation = require('./Validation');

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
        this.rp = undefined;
        
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
        
        this.rp = new ResultPrinter(nLottos, this.issueLottery(nLottos));
        
        this.rp.showBoughtLottos();
        this.rp.showIssuedLottos();
        
        this.onInput('\n당첨 번호를 입력해 주세요.\n', this.onInputTargetNumbers);
    }
    
    onInputTargetNumbers(input) {
        this.lottoContainer = new Lotto(this.validateInputTargetNumbers(input));
        this.targetNumbers = this.lottoContainer.getTargetNumbers();
        this.rp.setLottoContainer(this);

        this.onInput('\n보너스 번호를 입력해 주세요.\n', this.onInputBonusNumber);
    }
    
    onInputBonusNumber(input) {
        this.bonusNumber = Number(input);
        
        Validation.validate(this.bonusNumber, this.targetNumbers);
        this.rp.showStaticstic(this.lottoContainer);
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
    
    validateInputTargetNumbers(input) {
        if(!input.includes(',')) throw new Error('[ERROR] 당첨 번호는 콤마(,)를 사용해서 구분해주세요.');

        let countComma = input.match(/,/g).length ? input.match(/,/g).length : 0;

        if(countComma !== (this.lottoLength - 1)) throw new Error(`[ERROR] 당첨 번호는 콤마(,)를 사용해서 구분해주세요.(${this.length - 1}개)`);
        
        let array = input.split(',').map(num => Number(num));

        let max = Math.max(...array);
        
        if(max > this.maxNumber || array.includes(0)) throw new Error(`[ERROR] 번호는 1~${this.maxNumber} 사이의 수 ${this.length}자리를 입력해주세요.`);

        return array.sort();
    }

    drawLottery(input, bonus) {
        let hitCount = this.countHit(input);
        let prize = 0;
    
        if(hitCount == 6) prize = 1;
        else if(hitCount == 5 && this.isHitBonus(input, bonus)) {
          prize = 2;
        }
        else if(hitCount == 5) prize = 3;
        else if(hitCount == 4) prize = 4;
        else if(hitCount == 3) prize = 5;
    
        return prize;
      }
    
      countHit(input) {
    
        let hit = 0;
    
        input.map((digit, index) => {
          //let idx = [1,2,3,4,5,6].indexOf(digit); for test code
          let idx = this.targetNumbers.indexOf(digit);
    
          if(idx !== -1) hit++;
        })
    
        return hit;
      }
      
      isHitBonus(input, bonus) {
        return input.includes(bonus);
      }
}

exports.gameSetting = gameSetting;
exports.GameBuilder = GameBuilder;