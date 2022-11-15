const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class LottoDraw { 
    #winningNums
    #bonusNum

    setWinningNums(nums){
        this.vaildateWinningNums(nums);

        this.winningNums = nums.sort((a, b) => a - b);
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
        this.bonusNum = num;
    }
    vaildateBonusNum(num) {
        if (isNaN(num)) {
            throw new Error("[ERROR] 숫자가 아닌 값을 입력하였습니다.");
        }
        if (num < 1 || num > 45) {
            throw new Error("[ERROR] 범위에서 벗어난 값을 입력하였습니다.");
        }

        for (let i = 1; i < 6; i++) {
            if (num == this.winningNums[i]) {
                throw new Error("[ERROR] 중복 값이 포함되어 있습니다.");
            }
        }
    }
}

module.exports = LottoDraw;