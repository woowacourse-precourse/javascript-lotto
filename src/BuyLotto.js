const MissionUtils = require("@woowacourse/mission-utils");

class BuyLotto {
    constructor() {
        this.printNumberOfLotto(this.inputAmount());
    }

    inputAmount() {
        let numberOfLotto;

        MissionUtils.Console.readLine('구입 금액을 입력하세요.', (amount) => {
            if(!isValidAmount(amount)) {
                throw new Error('[ERROR] 1,000원 단위로 구입 가능합니다.');
            } 
            numberOfLotto = amount / 1000;
        });
        return numberOfLotto;
    }

    printNumberOfLotto(numberOfLotto) {
        MissionUtils.Console.print(`${numberOfLotto}개를 구매했습니다.`);
        this.createRandomLotto(numberOfLotto);
    }

    createRandomLotto(numberOfLotto) {
        let randomLottos = [];

        for(let i = 0; i < numberOfLotto; i++) {
            const randomLotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

            randomLottos.push(randomLotto.sort((a, b) => a - b));
        }
        this.printRandomLotto(randomLottos);
    }

    printRandomLotto(randomLottos) {
        for(let i = 0; i < randomLottos.length; i++) {
            MissionUtils.Console.print(randomLottos[i]);
        }
    }

    inputLottoNumbers() {
        MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (lottoInput) => {
            MissionUtils.Console.print('당첨 번호를 입력해주세요.')
            
            const lottoNumbers = lottoInput.split(',').map(Number);

            MissionUtils.Console.print(lottoNumbers);
            
            return lottoNumbers;
        }); 
    }

    inputBonusNumber() {
        MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (bonusInput) => {
            MissionUtils.Console.print('보너스 번호를 입력해주세요.')
            
            const bonusNumber = bonusInput;

            MissionUtils.Console.print(bonusNumber);
            
            return bonusNumber;
        }); 
    }
}

const isValidAmount = (amount) => {
    if(amount % 1000 === 0) {
        return true;
    }
    return false;
}

module.exports = BuyLotto;