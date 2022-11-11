## 기능 명세서

- [ ] 유저로부터 로또 구입 금액을 입력받는다.
  - 로또의 가격 = 1000원
  - 입력받은 구입 금액이 1000원으로 나누어 떨어지지 않을시 throw error
  - 예외 문구는 "[ERROR]"로 시작해야 한다.
- [ ] 컴퓨터에서 자동으로 로또 개수만큼 로또를 구입한다.
- [ ] 유저로부터 로또 당첨 번호를 입력받는다.
- [ ] 유저로부터 보너스 번호를 입력받는다.
- [ ] 당첨 내역을 출력한다.
  - 3~6개 일치 여부의 개수를 출력한다.
- [ ] 총 수익률을 출력한다.

<br />

## 요구 사항

- 도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLine, Console.print) 로직에 대한 단위 테스트는 제외한다.

## 과제 목표

- [ ] MVC 패턴을 도입한다.
- [ ] Game 추상 클래스를 만들어 DI를 한다.

  - 방법:
    - IGame\* 인터페이스를 만들어 구현해야 하는 메소드들을 정의한다.
    - Game\* 추상 클래스를 만들어 게임에 대해 중복되는 메서드를 구현한다.
    - Game 추상클래스를 이용해 LottoGame\* 클래스를 만든다.
  - 예시: Controller

    ```js
    // 자바스크립트에서는 인터페이스라는 개념이 없다.
    // 구현해야 하는 메서드에 대해 정의를 해 인터페이스를 흉내내는 것이다.
    class IGameCtrl {
      setup() {
        throw Error('메서드구현필요');
      }
    }

    class GameCtrl extends IGameCtrl {
      constructor(view, model) {
        this.view = view;
        this.model = model;
      }
      // ...
    }

    class LottoCtrl extends GameCtrl {
      constructor() {
        super(new LottoModel(), new LottoView());
      }
      // ...
    }
    ```

  - 기대효과:
    - 각 인스턴스 멤버변수의 결합도를 낮추어 유저가 di하는 클래스를 변경해도 게임을 쉽게 변경할 수 있게끔 구현한다.

- [ ] SOLID 원칙을 지킨다.
