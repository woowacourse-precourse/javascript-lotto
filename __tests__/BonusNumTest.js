const BonusNum = require('../src/BonusNum')

describe('로또 클래스 테스트(사용자 구매)', () => {
  test('로또 번호의 범위가 1부터 45사이가 가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNum(83, [1, 2, 3, 4, 5, 6, 7])
    }).toThrow('[ERROR] 보너스 번호는 1에서 45사이의 숫자여야 합니다')
  })

  test('보너스 번호는 숫자값만 들어올 수 있다.', () => {
    expect(() => {
      new BonusNum('hi', [1, 2, 3, 4, 5, 6, 7])
    }).toThrow('[ERROR] 보너스 번호는 숫자로 이뤄진 값이어야 합니다.')
  })
})
