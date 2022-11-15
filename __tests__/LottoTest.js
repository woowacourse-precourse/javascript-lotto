const Lotto = require('../src/Lotto');
const { LOTTO_ERROR_MESSAGES } = require('../src/Constant');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(LOTTO_ERROR_MESSAGES.LENGTH_ONLY_SIX);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(LOTTO_ERROR_MESSAGES.UNIQUE);
  });

  test('로또를 전달한 갯수만큼 생성했는지 확인한다.', () => {
    const lengths = [6, 5, 4, 3];

    lengths.forEach((amount) => {
      expect(Lotto.generateLottoArrays(amount)).toHaveLength(amount);
    });
  });

  test('입력받은 문자열 숫자 배열로 만드는 기능 확인', () => {
    const input = '1,2,3,4,5,6';
    const result = Lotto.covertStringToNumberArray(input);
    const answer = [1, 2, 3, 4, 5, 6];

    expect(result).toEqual(answer);
  });
});
