const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능

  // 테스트 이름 : when_given_then
  // when: 어떤 행동을 했는지
  // given : 어떤 조건에서 이 일이 일어나는지
  // then : given과 같은 조건에서 when을 했을때 어떤 일이 일어날 것인지
  test('inputLottoNumber_inputHasNaN_throwError', () => {
    expect(() => {
      new Lotto([1, 2, 3, '4', 5, 6]);
    }).toThrow('[ERROR]');
  });
  test('ascendingOrderNumbers_sortNumberArrayAscending', () => {
    const lotto = new Lotto([1, 6, 4, 2, 3, 5]);
    expect(lotto.ascendingOrderNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
