const {
  isMultipleOf1000,
  isDuplicated,
  divide1000,
  splitStrByComma,
  getRandomNumbers,
  getRateStrOfProfit,
} = require('../src/Util');
const MissionUtils = require('@woowacourse/mission-utils');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('유틸 함수 테스트', () => {
  describe('isMultipleOf1000 함수 테스트', () => {
    it('1000의 배수라면 true를 반환한다.', () => {
      const inputs = ['1000', '100000000', '999000', '1000 ', ' 1000 '];

      inputs.forEach((input) => {
        const result = isMultipleOf1000(input);
        expect(result).toBeTruthy();
      });
    });

    it('1000의 배수가 아니면, false를 반환한다', () => {
      const inputs = ['0', '0000', '1001', '9999100', 'qwer', '0001', 'q1000'];

      inputs.forEach((input) => {
        const result = isMultipleOf1000(input);
        expect(result).toBeFalsy();
      });
    });
  });

  describe('divide1000 함수 테스트', () => {
    it('1000의 배수라면, 1000으로 나눈 몫을 반환한다', () => {
      const inputs = ['1000', '11000', '999000'];
      const answers = [1, 11, 999];

      inputs.forEach((input, i) => {
        const result = divide1000(input);
        expect(result).toEqual(answers[i]);
      });
    });
  });

  describe('getRandomNumbers 함수 테스트', () => {
    it('size 크기의 배열을 반환한다.', () => {
      const inputs = [
        [1, 45, 6],
        [1, 45, 6],
      ];

      inputs.forEach(([start, end, size]) => {
        const result = getRandomNumbers(start, end, size);
        expect(result.length).toBe(size);
      });
    });

    it('start <= x <= end의 숫자 size개를 반환한다.', () => {
      const input = [1, 45, 6];
      const [start, end, size] = input;
      const result = getRandomNumbers(start, end, size);

      const cnt = result.filter((el) => el >= start && el <= end).length;
      expect(cnt).toBe(size);
    });

    it('오름차순 정렬된 배열을 반환한다.', () => {
      mockRandoms([[6, 5, 4, 3, 2, 1]]);

      const input = [1, 45, 6];
      const [start, end, size] = input;
      const result = getRandomNumbers(start, end, size);

      let cnt = 0;
      for (let i = 0; i < result.length - 1; i++) {
        if (result[i] > result[i + 1]) cnt++;
      }

      expect(cnt).toBe(0);
    });
  });

  describe('splitStrByComma 함수 테스트', () => {
    it('실행 결과로 배열을 반환한다.', () => {
      const inputStr = '';

      const result = Array.isArray(splitStrByComma(inputStr));
      expect(result).toBe(true);
    });

    it('문자열을 ,을 기준으로 나눈 배열을 반환한다.', () => {
      const inputStr = '안,녕,하,세,요';
      const answer = ['안', '녕', '하', '세', '요'];

      const result = splitStrByComma(inputStr);
      expect(result).toStrictEqual(answer);
    });
  });

  describe('isDuplicated 함수 테스트', () => {
    it('배열 원소가 중복되면 true를 반환한다.', () => {
      const arr = ['1', '2', '3', '4', '4'];
      const result = isDuplicated(arr);

      expect(result).toBe(true);
    });

    it('배열 원소가 중복되지 않으면 false를 반환한다.', () => {
      const arr = ['1', '2', '3', '4', '5'];
      const result = isDuplicated(arr);

      expect(result).toBe(false);
    });
  });

  describe('getRateStrOfProfit 함수 테스트', () => {
    it('수익이 0이면 0.0%를 반환한다.', () => {
      const profit = 0;
      const spend = 15151515;
      const answer = '0.0%';

      const result = getRateStrOfProfit(profit, spend);
      expect(result).toEqual(answer);
    });

    it('수익이 1000, 지출이 4면 25,000.0%를 반환한다.', () => {
      const profit = 1000;
      const spend = 4;
      const answer = '25,000.0%';

      const result = getRateStrOfProfit(profit, spend);
      expect(result).toEqual(answer);
    });

    it('수익이 15, 지출이 10000이면 0.2%를 반환한다.', () => {
      const profit = 15;
      const spend = 10000;
      const answer = '0.2%';

      const result = getRateStrOfProfit(profit, spend);
      expect(result).toEqual(answer);
    });

    it('수익이 987654321, 지출이 10000이면 9,876,543.2%를 반환한다.', () => {
      const profit = 987654321;
      const spend = 10000;
      const answer = '9,876,543.2%';

      const result = getRateStrOfProfit(profit, spend);
      expect(result).toEqual(answer);
    });
  });
});
