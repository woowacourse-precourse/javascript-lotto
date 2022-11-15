class LottoResult {
  constructor(userNumArray, answerLotto, bonus, cost) {
    this.userNumArray = userNumArray;
    this.answerLotto = answerLotto;
    this.bonus = bonus;
    this.cost = cost;
  }

  result = {
    1: { correct: '6개 일치', price: 2000000000, count: 0 },
    2: { correct: '5개 일치, 보너스 볼 일치', price: 30000000, count: 0 },
    3: { correct: '5개 일치', price: 1500000, count: 0 },
    4: { correct: '4개 일치', price: 50000, count: 0 },
    5: { correct: '3개 일치', price: 5000, count: 0 },
  };

  resultPrint(totalPrize) {
    MissionUtils.Console.print('');
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');

    for (let i = 1; i <= 5; i++) {
      MissionUtils.Console.print(
        //toLocaleString : 숫자에 콤마 넣는 정규식
        `${this.result[i].correct} (${result[i].price.toLocaleString()}원) - ${
          result[i].count
        }개`
      );
    }

    MissionUtils.Console.print(
      `총 수익률은 ${
        Math.round(((totalPrize / this.cost) * 100 + Number.EPSILON) * 100) /
        100
      }%입니다.`
    );
  }

  winLottoLogic() {
    let count = 0;
    let totalPrize = 0;

    //depth 2 이하(for문 말고 forEach 이용)
    this.userNumArray.forEach((lotto) => {
      //lotto 한 개의 배열에 접근
      lotto.forEach((num) => {
        if (this.answerLotto.includes(num)) count++;
      });
      if (count === 3) this.result[5].count++;
      if (count === 4) this.bonusresult[4].count++;
      if (count === 5)
        lotto.includes(this.bonus)
          ? this.result[2].count++
          : this.result[3].count++;
      if (count === 6) this.result[1].count++;
    });

    for (let i = 1; i <= 5; i++) {
      totalPrize += this.result[i].count * this.result[i].price;
    }

    this.resultPrint(totalPrize);
  }
}

module.exports = LottoResult;
