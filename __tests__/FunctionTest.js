const App = require('../src/App');

describe('로또 구매 테스트', () => {
  test('입력금액에 따른 로또 개수 테스트', () => {
    const inputPricesAndLottoCount = [
      {
        price: 1000,
        count: 1,
      },
      {
        price: 2000,
        count: 2,
      },
      {
        price: 5000,
        count: 5,
      },
      {
        price: 15000,
        count: 15,
      },
      {
        price: 21000,
        count: 21,
      },
    ];
    const { lottoCountGetter } = App;

    inputPricesAndLottoCount.map((priceAndCount) => {
      expect(lottoCountGetter(priceAndCount.price)).toEqual(
        priceAndCount.count,
      );
    });
  });

  test('로또 발행개수 테스트', () => {
    const { lottoPublisher } = App;
    const publishingCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100];

    publishingCounts.map((publishCount) => {
      expect(lottoPublisher(publishCount).length).toEqual(publishCount);
    });
  });
});

describe('로또 당첨 테스트', () => {
  test('로또 당첨번호 일치개수 판별 테스트', () => {
    const { winningDiscriminator } = App;
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const lottoNumbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 8, 3, 4, 5, 7],
      [1, 9, 24, 4, 5, 7],
      [1, 45, 34, 3, 5, 7],
      [21, 22, 23, 24, 25, 27],
      [1, 23, 43, 24, 25, 27],
    ];
    const matchCounts = [6, 5, 4, 3, 3, 0, 1];

    lottoNumbers.map((lottoNumber, index) => {
      expect(winningDiscriminator(lottoNumber, winningNumber)).toEqual(
        matchCounts[index],
      );
    });
  });
});
