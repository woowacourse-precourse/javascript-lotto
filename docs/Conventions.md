# 코딩컨벤션

0. 핵심을 먼저 구현, 작은 것 부터 큰 방향으로 수정해나가면서 진행

1. Airbnb JS style guide 체크

2. 클린코드 체크리스트

   + 클래스는 필드, 생성자, 메서드 순으로 작성
   + 함수 : 15라인 이하
   + else / if / switch
   - 공백 필수
   - 한 메서드에 한 단계의 indent (최대 2개)
   - 모든 원시값과 문자열 포장?
   - 인자 수는 최대 3개 까지 + 최대한 줄이기
   - 코드 한 줄에 점을 하나만 허용하도록
   - 메소드가 한 가지 일만 담당하게
   - 클래스를 작게 유지하도록

3. 네이밍컨벤션

   - 최대 두 단어, 문맥 중복 자제
   - 축약 지양
   - 동사로 시작 (get,set,is,has,can,..)
     - Device.getMessage()
     - Device.isValid()
     - Device.hasPort()
   - 업계언어 작성
   - 이벤트함수는 on~으로 시작

# 커밋컨벤션 (Udacity)

1. 커밋컨벤션 : 일관성 있게 작성, 대문자로 시작 (types는 소문자), 동사원형 활용, 기능단위별로 "분리"해서 커밋
   * 다만 기존 커밋과 통일성을 갖추기 위해, Udacity 컨벤션을 따르지 않고 커밋 제목은 모두 소문자로 작성하기로 한다.

   - types : feat, fix, refactor, style, docs, test, chore

   - 예시

   feat: Summarize changes in around 50 characters or less

   More detailed explanatory text, if necessary. Wrap it to about 72
   characters or so. In some contexts, the first line is treated as the
   subject of the commit and the rest of the text as the body. The
   blank line separating the summary from the body is critical (unless
   you omit the body entirely); various tools like `log`, `shortlog`
   and `rebase` can get confused if you run the two together.

   Explain the problem that this commit is solving. Focus on why you
   are making this change as opposed to how (the code explains that).
   Are there side effects or other unintuitive consequences of this
   change? Here's the place to explain them.

   Further paragraphs come after blank lines.

   - Bullet points are okay, too

   - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

   If you use an issue tracker, put references to them at the bottom,
   like this:

   Resolves: #123
   See also: #456, #789    



# PR 전 체크

- 설계
- 복잡성 (가독성)
- 테스트
- 작명
- 주석
- 스타일가이드
- 문서화 (관련 문서도 업데이트 했나)
- 로직 / 함수 분리












