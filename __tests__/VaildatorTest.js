const Vaildator = require('../src/Vaildator');

describe('Validator 클래스 테스트', () => {
  test('isRangeIn : 범위 내의 숫자인지 테스트한다.', () => {
    expect(Vaildator.isRangeIn(1, 45, 1)).toEqual(true);
    expect(Vaildator.isRangeIn(1, 45, 45)).toEqual(true);
    expect(Vaildator.isRangeIn(1, 45, 46)).toEqual(false);
    expect(Vaildator.isRangeIn(1, 45, 0)).toEqual(false);
  });

  test('isLottoLength: 로또 개수가 6개인지 확인하는 기능 테스트', () => {
    expect(Vaildator.isLottoLength(5)).toEqual(false);
    expect(Vaildator.isLottoLength(6)).toEqual(true);
  });

  test('isPositiveNumber: 양의 정수인지 판단하는 기능 테스트', () => {
    expect(Vaildator.isPositiveNumber('1000')).toEqual(true);
    expect(Vaildator.isPositiveNumber(1000)).toEqual(true);
    expect(Vaildator.isPositiveNumber('32.4')).toEqual(false);
    expect(Vaildator.isPositiveNumber(32.4)).toEqual(false);
    expect(Vaildator.isPositiveNumber(0)).toEqual(false);
    expect(Vaildator.isPositiveNumber('0')).toEqual(false);
    expect(Vaildator.isPositiveNumber('121ss')).toEqual(false);
  });

  test('isRightAmount: 입력한 금액을 모두 사용해 게임을 구매할 수 있는지 확인하는 기능 테스트', () => {
    expect(Vaildator.isRightAmount(8000)).toEqual(true);
    expect(Vaildator.isRightAmount(8001)).toEqual(false);
  });

  test('isDuplicateNumberInArray: 숫자가 배열 안에 이미 포함되어있는지 확인하는 기능 테스트', () => {
    expect(Vaildator.isDuplicateNumberInArray([1, 2, 3, 4, 5, 6], 1)).toEqual(
      true
    );
    expect(Vaildator.isDuplicateNumberInArray([1, 2, 3, 4, 5, 6], 7)).toEqual(
      false
    );
  });

  test('isUniqueElementArray: 중복이 없는 배열인지 확인하는 기능 테스트', () => {
    expect(Vaildator.isUniqueElementArray([1, 2, 3, 4, 5, 6])).toEqual(true);
    expect(Vaildator.isUniqueElementArray([1, 2, 3, 4, 5, 5])).toEqual(false);
    expect(Vaildator.isUniqueElementArray([6, 2, 3, 4, 5, 6])).toEqual(false);
  });

  test('isRightLottoNumber: 로또 번호 문자열을 만들 수 있는지 확인하는 기능 테스트', () => {
    expect(Vaildator.isRightLottoNumbers([1, 2, 3, 4, 5, 6, 7])).toEqual(false);
    expect(Vaildator.isRightLottoNumbers([1, 2, 3, 4, 5, 5])).toEqual(false);
    expect(Vaildator.isRightLottoNumbers([1, 2, 3, 4, 5, 55])).toEqual(false);
    expect(Vaildator.isRightLottoNumbers([1, 2, 3, 4, 5.4, 5])).toEqual(false);
    expect(Vaildator.isRightLottoNumbers([1, 2, 'sdf', 4, 'sdf', 5])).toEqual(
      false
    );
    expect(Vaildator.isRightLottoNumbers([1, 2, 3, 4, 5, 6])).toEqual(true);
  });

  test('로또 순위를 계산하는 기능:', () => {
    const user = new User();
    expect(user.dicideRank(6, false)).toEqual(1);
    expect(user.dicideRank(5, true)).toEqual(2);
    expect(user.dicideRank(5, false)).toEqual(3);
    expect(user.dicideRank(4, false)).toEqual(4);
    expect(user.dicideRank(3, false)).toEqual(5);
    expect(user.dicideRank(2, false)).toEqual(0);
  });
});
