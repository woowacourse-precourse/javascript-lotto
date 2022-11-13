const { Console } = require('@woowacourse/mission-utils');

class Output {
    process(money, winningLottoNumeber, randomLottoNumbers, bonusNumber) {
        const compareResult = this.compare(
            winningLottoNumeber,
            bonusNumber,
            randomLottoNumbers
        );

        const profit = this.calProfit(compareResult);
        const profitRate = this.calProfitRate(profit, money);

        Console.print(`총 수익률은 ${profitRate}%입니다.`);
        Console.close();
    }

    compare(winningNumbers, bonusNumber, randomNumbers) {
        let compareArr = [];

        randomNumbers.forEach((lotto) => {
            let count = this.countCollectNumber(winningNumbers, lotto);
            let result = this.checkBonusNumber(count, lotto, bonusNumber);

            compareArr.push(result);
        });

        return compareArr;
    }

    countCollectNumber(winningNumbers, randomLotto) {
        let count = 0;
        for (let number of randomLotto) {
            winningNumbers.indexOf(number.toString()) > -1
                ? count++
                : (count += 0);
        }
        return count;
    }

    checkBonusNumber(count, randomLotto, bonusNumber) {
        if (count === 5 && randomLotto.indexOf(+bonusNumber) > -1) {
            return 6;
        }

        if (count === 6) {
            return 7;
        }

        return count;
    }

    calProfit(compareResult) {
        const result = {
            '3': ['3개 일치 (5,000원) -', 0, 5000],
            '4': ['4개 일치 (50,000원) -', 0, 50000],
            '5': ['5개 일치 (1,500,000원) -', 0, 1500000],
            '6': ['5개 일치, 보너스 볼 일치 (30,000,000원) -', 0, 30000000],
            '7': ['6개 일치 (2,000,000,000원) -', 0, 2000000000],
        };
        compareResult.forEach((number) => {
            if (number >= 3) result[number.toString()][1]++;
        });

        let sum = this.showResult(result);
        return sum;
    }

    showResult(result) {
        let sum = 0;
        Console.print(`당첨 통계\n---`);
        for (let key in result) {
            let comment = result[key][0];
            let number = result[key][1];
            let payout = result[key][2];

            if (number) sum += number * payout;
            Console.print(`${comment} ${number}개`);
        }
        return sum;
    }

    calProfitRate(sum, money) {
        return sum === 0 ? 0 : parseFloat(((sum / +money) * 100).toFixed(2));
    }
}

module.exports = Output;
