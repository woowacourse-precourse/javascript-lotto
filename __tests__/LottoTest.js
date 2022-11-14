const Lotto = require("../src/domain/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호의 개수가 6개보다 적으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호가 중복되었습니다.");
  });

  // 아래에 추가 테스트 작성 가능
  test("입력된 숫자가 로또 번호에 있는지 확인한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.isContain(1)).toBeTruthy();
    expect(lotto.isContain(7)).toBeFalsy();
  });

  test("두 개의 로또가 같은지 확인한다.", () => {
    const lottoArr1 = [1, 2, 3, 4, 5, 6];
    const lottoArr2 = [7, 11, 16, 35, 36, 44];

    expect(new Lotto(lottoArr1).isEqual(new Lotto(lottoArr1))).toBeTruthy();
    expect(new Lotto(lottoArr1).isEqual(new Lotto(lottoArr2))).toBeFalsy();
  });

  test("로또 객체가 숫자로 변환되는 지 확인한다.", () => {
    const lotto = new Lotto([4, 5, 6, 7, 8, 9]);

    expect(lotto.toString()).toEqual("[4,5,6,7,8,9]");
  });
});
