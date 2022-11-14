const RankingResult = require("../src/RankingResult.js")

describe("로또 테스트", () => {
  test("1등 당첨자 수 구하기", () => {
    const issuedLotto = [[1, 2, 3, 4, 5, 6]];
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusLotto = 7;
    const outputAmount = 1;

    const ranking = new RankingResult();
    const rankingResult = ranking.setRankingResult(
      issuedLotto,
      winningLotto,
      bonusLotto
    );
    const firstRanking = rankingResult.find((v) => v.ranking == "FIRST");

    expect(firstRanking.amount).toEqual(outputAmount);
  });
  
  test("2등 당첨자 수 구하기", () => {
    const issuedLotto = [[1, 2, 3, 4, 5, 7]];
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusLotto = 7;
    const outputAmount = 1;

    const ranking = new RankingResult();
    const rankingResult = ranking.setRankingResult(
      issuedLotto,
      winningLotto,
      bonusLotto
    );
    const secondRanking = rankingResult.find((v) => v.ranking == "SECOND");

    expect(secondRanking.amount).toEqual(outputAmount);
  });

  test("3등 당첨자 수 구하기", ()=>{
    const issuedLotto = [[1,2,3,4,5,9]];
    const winningLotto = [1,2,3,4,5,6];
    const bonusLotto = 7
    const outputAmount = 1 

    const ranking = new RankingResult();
    const rankingResult = ranking.setRankingResult(issuedLotto,winningLotto,bonusLotto)
    const thirdRanking = rankingResult.find((v)=>v.ranking=="THIRD")

    expect(thirdRanking.amount).toEqual(outputAmount);
  })

  test("여러개 로또 비교해 당첨자 수 구하기", () => {
    const issuedLotto = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusLotto = 7;

    const output = [
      {
        ranking: "FIFTH",
        reward: 5000,
        mathcedCount: 3,
        hasBounsNumber: false,
        amount: 1,
      },
      {
        ranking: "FOURTH",
        reward: 50000,
        mathcedCount: 4,
        hasBounsNumber: false,
        amount: 0,
      },
      {
        ranking: "THIRD",
        reward: 1500000,
        mathcedCount: 5,
        hasBounsNumber: false,
        amount: 0,
      },
      {
        ranking: "SECOND",
        reward: 30000000,
        mathcedCount: 5,
        hasBounsNumber: true,
        amount: 0,
      },
      {
        ranking: "FIRST",
        reward: 2000000000,
        mathcedCount: 6,
        hasBounsNumber: false,
        amount: 0,
      },
    ];

    const ranking = new RankingResult();
    const rankingResult = ranking.setRankingResult(
      issuedLotto,
      winningLotto,
      bonusLotto
    );

    expect(rankingResult).toEqual(output);
  });
});



