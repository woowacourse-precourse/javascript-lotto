const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const LottoStore = require("./LottoStore");

class LottoDraw { 
    static PRIZE_MONEY = {
        1: 2000000000,
        2: 30000000,
        3: 1500000,
        4: 50000,
        5: 5000,
    };
    #winningNums
    #bonusNum

    setWinningNums(nums){
        this.vaildateWinningNums(nums);

        this.#winningNums = nums.sort((a, b) => a - b);
    }
    vaildateWinningNums(nums) {
        if (nums.length != 6) {
            throw new Error("[ERROR] 입력된 값의 갯수가 6개가 아닙니다.");
        }

        nums.forEach(element => {
            if (isNaN(element)) {
                throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");
            }
            if (element < 1 || element > 45) {
                throw new Error("[ERROR] 범위에서 벗어난 값이 포함되어 있습니다.");
            }
        });

        const sorted_nums = nums.sort((a, b) => a - b);
        for (let i = 1; i < 6; i++) {
            if (sorted_nums[i-1] == sorted_nums[i]) {
                throw new Error("[ERROR] 중복 값이 포함되어 있습니다.");
            }
        }
    }

    setBonusNum(num) {
        this.vaildateBonusNum(num);
        this.#bonusNum = num;
    }
    vaildateBonusNum(num) {
        if (isNaN(num)) {
            throw new Error("[ERROR] 숫자가 아닌 값을 입력하였습니다.");
        }
        if (num < 1 || num > 45) {
            throw new Error("[ERROR] 범위에서 벗어난 값을 입력하였습니다.");
        }

        for (let i = 1; i < 6; i++) {
            if (num == this.#winningNums[i]) {
                throw new Error("[ERROR] 중복 값이 포함되어 있습니다.");
            }
        }
    }

    checkResult(lottos) {
        console.log(this.#winningNums, this.#bonusNum);
        const result = {};
        for(let i = 0; i <= 5; i++) result[i] = 0;

        lottos.forEach((element) => {
            const prize = this.get_prize(element.getNumbers());
            if (prize > 0) {
                result[prize] += 1;
            }
        })

        this.printResult(result, this.getGain(result, lottos.length*LottoStore.LOTTO_PRICE));
    }
    printResult(result, gain) {
        const prizeMoneytoString = {};
        for(let i = 1; i <= 5; i++) {
            prizeMoneytoString[i] = LottoDraw.PRIZE_MONEY[i].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
         
        MissionUtils.Console.print('3개 일치 ('+prizeMoneytoString[5]+'원) - '+result[5]+'개');
        MissionUtils.Console.print('4개 일치 ('+prizeMoneytoString[4]+'원) - '+result[4]+'개');
        MissionUtils.Console.print('5개 일치 ('+prizeMoneytoString[3]+'원) - '+result[3]+'개');
        MissionUtils.Console.print('5개 일치, 보너스 볼 일치 ('+prizeMoneytoString[2]+'원) - '+result[2]+'개');
        MissionUtils.Console.print('6개 일치 ('+prizeMoneytoString[1]+'원) - '+result[1]+'개');

        MissionUtils.Console.print('총 수익률은 '+ gain +"%입니다.");

    }
    getGain(result, money) {
        let total = 0;
        for(let i = 1; i <= 5; i++) {
            total += LottoDraw.PRIZE_MONEY[i] * result[i];
        }

        return Math.round((total / money) * 1000) / 10;
    }
    get_prize(lottoNums) {
        let match = 0;
        lottoNums.forEach((element) => {
            if (this.#winningNums.indexOf(element) != -1) {
                match += 1;
            }
        });

        if (match == 6) return 1;
        if (match == 5) {
            if(lottoNums.indexOf(this.#bonusNum) != -1) return 2;
            return 3;
        }
        if (match == 4) return 4;
        if (match == 3) return 5;
        return 0;
    }
}

module.exports = LottoDraw;