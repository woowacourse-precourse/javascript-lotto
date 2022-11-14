const Lotto = require("../src/Lotto");

  test('로또 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['1', '2', '3', '4', '5', '6']);
    });
  });

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test('로또의 qrCode를 통해 로또 번호를 읽을 수 있다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getQrCode()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
