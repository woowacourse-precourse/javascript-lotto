const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

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

        this.printResult(result);
        this.printYield(result);
    }
    printResult(result) {
        return;
    }
    printYield(result) {
        return;
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