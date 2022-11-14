const { LOTTO_WIN } = require("./constant");

class CompareLotto {
    // 길이리턴
    count(lottoList, winNumber) {
        return lottoList.filter((number) => winNumber.includes(number)).length;
    }

    // 불린 리턴
    countBonus(winNumber, bonus) {
        return winNumber.includes(bonus);
    }

    // lottoList Lotto.js에서 받아오기, #lottoList로 만들어서 배분
    result(lottoList, winNumber, bonus) {
        let count = []
        
        lottoList.forEach(lotto => {
            let correctNumber = this.count(lotto, winNumber);
            let correctBonus = this.countBonus(winNumber, bonus);

            count.push({ correctNumber, correctBonus });
        });
        // const howManyWin = this.number(count);
        console.log(howManyWin);
        // const totalAmount = this.money(howManyWin);
        console.log(totalAmount);
    }

    number(count) {
        let howManyWin = Array.from({length: 5}, () => 0);

        for (let i = 0; i < count.length; i++) {
            const { correctNumber, correctBonus } = count[i];

            if (correctNumber === 3) howManyWin[0] += 1;
            if (correctNumber === 4) howManyWin[1] += 1;
            if (correctNumber === 5) howManyWin[2] += 1;
            if (correctNumber === 5 && correctBonus) howManyWin[3] += 1;
            if (correctNumber === 6) howManyWin[4] += 1;
        }

        return howManyWin;
    }
    
    // 수익률 내려면 howManyWin, 로또 구입비

    
}

module.exports = CompareLotto;