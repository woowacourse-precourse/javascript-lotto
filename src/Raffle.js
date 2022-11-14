const MissionUtils = require("@woowacourse/mission-utils");

class Raffle {
    #money=0;
    #lottoes=[];
    #result={
        6: 0,
        5: 0,
        4: 0,
        3: 0,
        bonus: 0
    };

    constructor(money){
        this.makeLottoes(money);
        this.printLottoes();
        this.#money=money;
    }

    makeLottoes(money){
        for(let count=1;count<=money/1000;count++){
            this.#lottoes.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b)=>a-b));
        }
    }

    printLottoes(){
        MissionUtils.Console.print(`${this.#lottoes.length}개를 구매했습니다.`);
        this.#lottoes.forEach((numbers)=>{
            MissionUtils.Console.print(`[${numbers.join(', ')}]`);
        });
    }

    compareLottoes(numbers){
        const NUMBERS = numbers.numbers;
        const BONUS = numbers.bonus;
        this.#lottoes.forEach((lotto)=>{
            let count=0;
            NUMBERS.forEach((number)=>{
                if(lotto.includes(number)) count+=1;
            });
            if(count===5 && lotto.includes(BONUS)) this.#result.bonus+=1;
            else if(this.#result[count]>=0) this.#result[count]+=1;
        });
    }

    printResult(){
        MissionUtils.Console.print(`
        당첨 통계\n
        ---\n
        3개 일치 (5,000원) - ${this.#result[3]}개\n
        4개 일치 (50,000원) - ${this.#result[4]}개\n
        5개 일치 (1,500,000원) - ${this.#result[5]}개\n
        5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#result.bonus}개\n
        6개 일치 (2,000,000,000원) - ${this.#result[6]}개\n
        총 수익률은 ${this.calcYield()}%입니다.`);
    }

    calcYield(){
        const SUM = 
        (5000 * this.#result[3]) +
        (50000 * this.#result[4]) +
        (1500000 * this.#result[5]) +
        (30000000 * this.#result.bonus) +
        (2000000000 * this.#result[6]);
        return Math.round(SUM/this.#money*10000)/100;
    }
}

module.exports = Raffle;