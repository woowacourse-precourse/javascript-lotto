const { Console } = require('@woowacourse/mission-utils');
const Statistics = require('../src/domain/Statistics');

let totalLottoNumber = [
  [1, 5, 6, 10, 11, 13],
  [1, 2, 3, 4, 5, 6],
];

const winnerNumber = ['1', '5', '6', '10', '11', '12'];

let numbers = [1, 5, 6, 10, 11, 13];

describe('로또 당첨 통계 부분 Test', () => {
  afterEach(() => {
    Console.close();
  });

  describe('5개 일치할때 보너스 번호 포함 테스트', () => {
    test('보너스번호가 포함되어 있지 않을경우 테스트', () => {
      const bonusNumber = '12';
      const matchingNumber = new Statistics(totalLottoNumber, winnerNumber, bonusNumber);
      const result = matchingNumber.isContainBonusNumber(numbers);
      expect(result).toBeFalsy();
    });

    test('보너스번호가 포함되어 있는 경우 테스트', () => {
      const bonusNumber = '13';
      const matchingNumber = new Statistics(totalLottoNumber, winnerNumber, bonusNumber);
      const result = matchingNumber.isContainBonusNumber(numbers);
      expect(result).toBeTruthy();
    });
  });

  describe('일치하는 번호 테스트', () => {
    let bonusNumber;
    beforeEach(() => {
      bonusNumber = '13';
    });
    test('6개 일치하는 번호 테스트', () => {
      numbers = [1, 5, 6, 10, 11, 12];
      const matchingNumber = new Statistics(totalLottoNumber, winnerNumber, bonusNumber);
      const result = matchingNumber.getMatchingNumber(numbers);
      expect(result).toEqual([1, 5, 6, 10, 11, 12]);
    });

    test('5개 일치하는 번호 테스트', () => {
      let numbers = [1, 5, 6, 10, 11, 13];
      const matchingNumber = new Statistics(totalLottoNumber, winnerNumber, bonusNumber);
      const result = matchingNumber.getMatchingNumber(numbers);
      expect(result).toEqual([1, 5, 6, 10, 11]);
    });

    test('4개 일치하는 번호 테스트', () => {
      numbers = [1, 5, 6, 10, 15, 16];
      const matchingNumber = new Statistics(totalLottoNumber, winnerNumber, bonusNumber);
      const result = matchingNumber.getMatchingNumber(numbers);
      expect(result).toEqual([1, 5, 6, 10]);
    });

    test('3개 일치하는 번호 테스트', () => {
      numbers = [1, 5, 6, 8, 15, 16];
      const matchingNumber = new Statistics(totalLottoNumber, winnerNumber, bonusNumber);
      const result = matchingNumber.getMatchingNumber(numbers);
      expect(result).toEqual([1, 5, 6]);
    });
  });

  describe('당첨된 번호의 수 ', () => {
    test('6개 일치 총 2개', () => {
      totalLottoNumber = [
        [1, 5, 6, 10, 11, 12],
        [1, 5, 6, 10, 11, 12],
      ];
      const bonusNumber = '13';
      const matchingNumber = new Statistics(totalLottoNumber, winnerNumber, bonusNumber);
      const result = matchingNumber.getResultOfThreeToFiveMatchingNumbers();
      expect(result).toEqual([0, 0, 0, 0, 2]);
    });

    test('5개 일치 ,보너스 포함 총 3개', () => {
      const bonusNumber = '12';
      totalLottoNumber = [[1, 5, 6, 10, 12, 23], [1, 5, 6, 10, 12, 28], , [1, 5, 6, 10, 12, 45]];
      const matchingNumber = new Statistics(totalLottoNumber, winnerNumber, bonusNumber);
      const result = matchingNumber.getResultOfThreeToFiveMatchingNumbers();
      expect(result).toEqual([0, 0, 0, 3, 0]);
    });

    test('5개 일치, 보너스 미포함 총 1개', () => {
      const bonusNumber = '32';
      totalLottoNumber = [[1, 5, 6, 10, 12, 23]];
      const matchingNumber = new Statistics(totalLottoNumber, winnerNumber, bonusNumber);
      const result = matchingNumber.getResultOfThreeToFiveMatchingNumbers();
      expect(result).toEqual([0, 0, 1, 0, 0]);
    });

    test('4개 일치 총 3개', () => {
      const bonusNumber = '32';
      totalLottoNumber = [
        [1, 5, 6, 10, 38, 42],
        [1, 5, 6, 18, 11, 42],
        [1, 5, 6, 12, 38, 43],
      ];
      const matchingNumber = new Statistics(totalLottoNumber, winnerNumber, bonusNumber);
      const result = matchingNumber.getResultOfThreeToFiveMatchingNumbers();
      expect(result).toEqual([0, 3, 0, 0, 0]);
    });

    test('3개 일치 총 6개', () => {
      const bonusNumber = '32';
      totalLottoNumber = [
        [1, 5, 6, 15, 38, 42],
        [1, 5, 6, 18, 19, 42],
        [1, 5, 6, 24, 38, 43],
        [1, 5, 8, 10, 38, 42],
        [1, 5, 12, 18, 26, 42],
        [1, 7, 8, 10, 11, 43],
      ];
      const matchingNumber = new Statistics(totalLottoNumber, winnerNumber, bonusNumber);
      const result = matchingNumber.getResultOfThreeToFiveMatchingNumbers();
      expect(result).toEqual([6, 0, 0, 0, 0]);
    });
  });
});
