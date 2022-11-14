const { isMultipleOf1000 } = require('../src/lib/utilFns');

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
});
