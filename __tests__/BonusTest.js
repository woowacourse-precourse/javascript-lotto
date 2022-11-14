const Bonus = require('../src/Bonus');
const { ERROR_MESSAGE } = require('../src/constant/constant');

describe('보너스 클래스 테스트', () => {
  test(ERROR_MESSAGE.LOTTO.NUMBER_RANGE, () => {
    expect(() => {
      new Bonus(55);
    }).toThrow(ERROR_MESSAGE.LOTTO.NUMBER_RANGE);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  // test('로또 번호와 중복된 숫자가 있으면 예외가 발생한다.', () => {
  //   expect(() => {
  //     new Lotto([1, 2, 3, 4, 5, 5]);
  //   }).toThrow(ERROR_MESSAGE.LOTTO.NUMBER_DUPLICATED);
  // });

  // 아래에 추가 테스트 작성 가능
});
