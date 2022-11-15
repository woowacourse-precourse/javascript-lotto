const MissionUtils = require("@woowacourse/mission-utils");

class BuyLotto {
    inputAmount() {
        let amount;

        MissionUtils.Console.readLine('구입 금액을 입력하세요.', (amountInput) => {
            if(!isValidAmount(amountInput)) {
                throw new Error('[ERROR] 1,000원 단위로 구입 가능합니다.');
            } 
            amount = amountInput;
        });
        return amount;
    }

    getNumberOfLotto(amount) {
        return amount / 1000;
    }

    printNumberOfLotto(numberOfLotto) {
        MissionUtils.Console.print(`${numberOfLotto}개를 구매했습니다.`);
    }

    createRandomLotto(numberOfLotto) {
        let randomLottos = [];

        for(let i = 0; i < numberOfLotto; i++) {
            const randomLotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
            randomLottos.push(randomLotto.sort((a, b) => a - b));
        }
        return randomLottos;
    }

    printRandomLotto(randomLottos) {
        for(let i = 0; i < randomLottos.length; i++) {
            const randomLotto = randomLottos[i].join(', ');
            MissionUtils.Console.print(`[${randomLotto}]`);
        }
    }

    inputLottoNumbers() {
        let lottoNumbers;

        MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.', (lottoInput) => {
            lottoNumbers = lottoInput.split(',').map(Number);
            MissionUtils.Console.print('당첨 번호를 입력해주세요.');
            MissionUtils.Console.print(lottoNumbers);    
        }); 
        return lottoNumbers;
    }

    inputBonusNumber() {
        let bonusNumber;

        MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (bonusInput) => {
            bonusNumber = bonusInput;
            MissionUtils.Console.print('보너스 번호를 입력해주세요.');
            MissionUtils.Console.print(bonusNumber);
        }); 
        return bonusNumber;
    }
}


const isValidAmount = (amount) => {
    if(amount % 1000 === 0) {
        return true;
    }
    return false;
}

module.exports = BuyLotto;