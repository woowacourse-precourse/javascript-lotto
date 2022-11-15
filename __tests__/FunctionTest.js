const App = require('../src/App');

describe('로또 구매 테스트', () => {
  test('입력금액에 따른 로또 개수 테스트', () => {
    const inputPricesAndLottoCount = [
      {
        price: '1000',
        count: 1,
      },
      {
        price: '2000',
        count: 2,
      },
      {
        price: '5000',
        count: 5,
      },
      {
        price: '15000',
        count: 15,
      },
      {
        price: '21000',
        count: 21,
      },
    ];
    const { lottoCountGetter } = App;

    inputPricesAndLottoCount.map(priceAndCount => {
      expect(lottoCountGetter(priceAndCount.price)).toEqual(
        priceAndCount.count,
      );
    });
  });

  test('로또 발행개수 테스트', () => {
    const { lottoPublisher } = App;
    const publishingCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100];

    publishingCounts.map(publishCount => {
      expect(lottoPublisher(publishCount).length).toEqual(publishCount);
    });
  });
});

describe('로또 당첨 테스트', () => {
  test('로또 당첨번호 일치개수 판별 테스트', () => {
    const { winningDiscriminator } = App;
    const winningNumber = '1,2,3,4,5,6';
    const purchaseLottoList = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 8, 3, 4, 5, 7],
      [1, 9, 24, 4, 5, 7],
      [1, 45, 34, 3, 5, 7],
      [21, 22, 23, 24, 25, 27],
      [1, 23, 43, 24, 25, 27],
    ];
    const matchCounts = [6, 5, 4, 3, 3, 0, 1];

    purchaseLottoList.map((lottoNumber, index) => {
      expect(winningDiscriminator(lottoNumber, winningNumber)).toEqual(
        matchCounts[index],
      );
    });
  });

  test('로또 보너스 번호 일치 판별 테스트', () => {
    const { bonusDiscriminator } = App;
    const bonusNumber = 7;
    const purchaseLottoList = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 8, 3, 4, 5, 7],
      [1, 9, 24, 4, 5, 7],
      [1, 45, 34, 3, 5, 7],
      [21, 22, 23, 24, 25, 27],
      [1, 23, 43, 24, 25, 27],
    ];
    const matchCounts = [0, 1, 1, 1, 1, 0, 0];

    purchaseLottoList.map((lottoNumber, index) => {
      expect(bonusDiscriminator(lottoNumber, bonusNumber)).toEqual(
        matchCounts[index],
      );
    });
  });

  test('당첨 기준에 따른 개수 저장 테스트', () => {
    const { totalWinningCounter } = App;
    const winningNumber = '1,2,3,4,5,6';
    const bonusNumber = 7;
    const purchaseLottoList = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 8, 3, 4, 5, 7],
      [1, 9, 24, 4, 5, 7],
      [1, 45, 34, 3, 5, 7],
      [21, 22, 23, 24, 25, 27],
      [1, 23, 43, 24, 25, 27],
    ];
    const winningList = {
      threeMatches: 2,
      fourMatches: 1,
      fiveMatches: 0,
      fiveAndBonusMatches: 1,
      sixMatches: 1,
    };

    expect(
      totalWinningCounter(purchaseLottoList, winningNumber, bonusNumber),
    ).toEqual(winningList);
  });

  test('총 당첨 금액 구하기 테스트', () => {
    const { proceedsGetter } = App;
    const winningList = {
      threeMatches: 2,
      fourMatches: 1,
      fiveMatches: 0,
      fiveAndBonusMatches: 1,
      sixMatches: 1,
    };
    const procdeeds = 2030060000;

    expect(proceedsGetter(winningList)).toEqual(procdeeds);
  });

  test('수익률 구하기 테스트', () => {
    const { returnRateGetter } = App;
    const purchaseAmount = 8000;
    const procdeeds = [5000, 1000, 1500000, 1505000, 2000005000];
    const returnRate = ['62.5', '12.5', '18750.0', '18812.5', '25000062.5'];

    procdeeds.map((proceed, index) => {
      expect(returnRateGetter(proceed, purchaseAmount)).toEqual(
        returnRate[index],
      );
    });
  });
});
