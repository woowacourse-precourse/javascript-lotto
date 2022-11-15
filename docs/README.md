# 기능 목록

[:deciduous_tree:] 로또 구입 금액을 입력 받는다.
    [:deciduous_tree:] 발행할 로또 개수를 계산한다.
    [:deciduous_tree:] [Error] 숫자가 아니면 에러
    [:deciduous_tree:] [Error] 1000원 단위로 떨어지지 않으면 에러
[:deciduous_tree:] 발행할 로또 수량을 출력한다.
[:deciduous_tree:] 로또를 필요한 수량만큼 발행한다.
    [:deciduous_tree:] 로또 하나당 6개 수를 갖도록 발행한다.
    [:deciduous_tree:] 오름차순으로 정렬한다.
[:deciduous_tree:] 발행한 로또 번호 리스트를 출력한다.
[:deciduous_tree:] 당첨 번호를 입력 받는다.
    [:deciduous_tree:] [Error] 쉼표를 제외하고 숫자가 아니면 에러
    [:deciduous_tree:] [Error] 1~45 사이의 숫자가 아니면 에러
    [:deciduous_tree:] [Error] 쉼표를 기준으로 6개의 수가 아니면 에러
    [:deciduous_tree:] [Error] 중복된 숫자를 입력하면 에러
[:deciduous_tree:] 보너스 번호를 입력 받는다.
    [:deciduous_tree:] [Error] 숫자가 아니면 에러
    [:deciduous_tree:] [Error] 1~45 사이의 숫자가 아니면 에러
    [:deciduous_tree:] [Error] 앞서 입력한 6개의 수와 중복되면 에러
8. 당첨 내역 계산한다.
9. 당첨 내역을 출력한다.
10. 수익률을 계산한다.
    - 수익률을 소수점 둘째 자리에서 반올림한다.
11. 수익률을 출력한다.

---
필요 class 종류:
1. Lotto - 복권 자체
2. LottoMachine - 복권 발행기
3. WinningLotto - 사용자가 입력하는 당첨 번호
4. Matcher - 번호가 몇 개 일치하는지 계산
5. ReturnCalculator - 수익률 계산기
6. MessagePrinter - 메시지 출력기
7. InputAcceptor - 입력 받기