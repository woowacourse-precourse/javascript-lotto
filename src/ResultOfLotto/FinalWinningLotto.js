const MissionUtils = require('@woowacourse/mission-utils');

class FinalWinningLotto {
    constructor(buyLottos, winnnigLotto, bonus) {
        this.compareWinningWithPurchasedLotto(buyLottos, winnnigLotto, bonus);
        this.publish(buyLottos, winnnigLotto, bonus);
    }
    // 순정 당첨 번호와 구매 번호 비교
    compareWinningWithPurchasedLotto(buyLottos, winnnigLotto, bonus) {
        const lottoDictionary = { 3: 0, 4: 0, 5: 0, '5+1': 0, 6: 0 };
        for (let i = 0; i < buyLottos.length; i++) {
            const a = buyLottos[i].filter((it) => winnnigLotto.includes(it));
            if (a.length < 3) continue;
            if (buyLottos[i].includes(Number(bonus)) === true && a.length === 5) {
                lottoDictionary['5+1'] += 1;
                continue;
            }
            if (lottoDictionary[`${a.length}`] === 0) {
            }
            lottoDictionary[`${a.length}`] += 1;
        }
        return lottoDictionary;
    }

    // 당첨 번호 결과 출력
    publish(buyLottos, winnnigLotto, bonus) {
        const copy = this.compareWinningWithPurchasedLotto(buyLottos, winnnigLotto, bonus);
        MissionUtils.Console.print('\n당첨 통계');
        MissionUtils.Console.print('---');
        MissionUtils.Console.print(`3개 일치 (5,000원) - ${copy[3]}개`);
        MissionUtils.Console.print(`4개 일치 (50,000원) - ${copy[4]}개`);
        MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${copy[5]}개`);
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${copy['5+1']}개`);
        MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${copy[6]}개`);
    }
}

module.exports = FinalWinningLotto;
