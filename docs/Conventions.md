# 코딩컨벤션

## 핵심을 먼저 구현, 작은 것 부터 큰 방향으로 수정해나가면서 진행

## Airbnb JS style guide 체크

-> 일관성, 가독성, 간결성, 불변성, side effect, scope isolation & reusability, cleaner code, 빌트인 방법 권장

1.  변수는 재할당 여부에 따라 const나 let을 사용하라 (블록스코프)
   - 가독성을 위해 한 줄에 하나만 선언
   - 선언은 한 번만

2.  객체

    - 작성시
      : 리터럴 구문을 사용
      const item = {}
      : 계산된 프로퍼티명 이용 const obj = {[key]:value}
      : 예약어 대신 알기쉬운 동의어 사용
      : 메소드/프로퍼티의 단축구문 사용, 단축구문의 경우 시작부분에 그룹화

3.  배열

    - 작성시
      : 리터럴 구문을 사용
      const items = []
      : 배열에 직접 대입하지말고 Array#push 사용
      : 배열 복사시에는 spreads ... 사용
      const itemsCopy = [...items]
      : array-like 오브젝트 -> 배열로 변환시 Array#from 사용

4.  Destructuring

    - 하나의 obj에서 복수의 property 접근시
      function getFullName({firstnName, lastName}){
      return `${firstName} ${lastNAme}`
      }
    - 배열
      const [first, second] = arr;
    - 복수의 값을 반환하는 경우, 호출순서 등에 의해 배열보다는 obj의 destructuring 하기

5.  문자열

    - single quotes 사용
    - 100문자 이상의 문자열은 문자열 연결(+)을 사용해서 복수행에 걸쳐 기술하기 -> 하지만 과용시 성능에 영향 미칠 수 있음
    - template strings 사용 `${}` , eval() 절대 사용 금물

6.  함수

    - 함수식보다는 함수선언 사용
      const foo = function(){} (x)
      (() => {console.log('Welcome');})(); : 즉시 실행 함수식 (IIFE)
      function foo(){}

    - if, while같은 '함수이외의 블록'에서 함수선언하지 말기
    - block은 statements지만, 함수선언은 아님
    - 파라미터에 예약어 'arguments'를 쓰지 말고, 대신 rest syntax ...를 써라.
      function concatenatedAll(...args){
      return args.join('')
      }
    - 함수의 default (초기) 파라메터
      : 함수의 패러미터를 변이시키지 말고, default 파라메터를 사용하라
      : default는 다른 파라메터보다 뒤쪽에 둔다
      function handleThings(name,opts={}){...}
      : side effect가 없게 사용해야 함
      : 새 함수 작성시 Function constructor 이용 금지
      const add = new Function(...) or Function(...)
    - 무명 함수의 경우 화살표 함수표기를 사용
    - 함수의 본체가 하나의 식으로만 구성된 경우 {} 과 return 생략이 가능하다.
      [1,2,3].map(number=>`This is ${number}`)
    - 식이 복수행에 걸쳐있을 경우, 가독성을 위해 ()로 감싼다.
    - 인수가 하나인 경우 () 생략 가능

7.  클래스, Constructors

        - prototype을 직접 조작하지 말고 class 를 사용하기
        - 상속은 extends 사용
        - 메소드 반환값으로 this를 반환해서 메소드체이닝 가능
          class Jedi {

          jump() {
          this.jumping = true;
          return this;
          }

          setHeight(height) {
          this.height = height;
          return this;
          }
         }

         const luke = new Jedi();
         luke.jump().setHeight(20);

        - 메서드이름에 toString()을 허용하지만, 올바르게 동작하는지, side effect가 있는지 체크 필요

8.  모듈

        - require보다는 import, export 사용하기
        - import *는 이용하지 말기
        - import문으로부터 직접 export하지 말기 (일관성 측면)

9.  Iterators & Generators

        - iterators (for-of루프) 대신에 map, reduce와 같은 JS 고급함수를 사용하라
        immutable해서. side effect 신경쓰기보다 순수 함수를 다루는 게 간단하기 때문
        - generators 사용 금지

10. 프로퍼티

            - 객체 프로퍼티에 접근시 .법 (dot notation)을 사용
            - 변수를 사용해 프로퍼티에 접근시 [] (subscript notation)법을 사용
              const luke = {
                 jedi: true,
                 age: 28,
              };

              function getProp(prop) {
                 return luke[prop];
              }

11. 변수

        - 가능한 한 const 사용
        - 하나의 변수 선언에 대해 하나의 const 이용
        - 그룹화할 때 const를 먼저 한 후에 let 그룹화하기 : 새 변수 추가에 용이
        - 변수 할당은 resonable place에서 해라 (블록scope)

12. 호이스팅

        - 무명/명명 함수의 경우
        : 함수명이나 함수 본체는 hoist되지 않고, 대신 함수 할당 전의 변수가 hoist된다.
        - 함수선언의 경우
        : 함수명, 함수 본체가 hoist된다

13. 조건식 & 등가식

        - ===, !== 를 사용하라
        - if문과 같은 조건식은 ToBoolean 메소드에 의한 강제형 변환으로 평가되어 다음과같이 평가됨
         : obj(+arr) 값, 수치값, 문자열 -> true
         : undefined, null, 수치값 +0, -0, NaN, '' -> false
         : boolean -> boolean에 따라
        - 단축형 문법 사용

14. 블록

        - 복수행의 블록에서 {} 사용, 1줄행일 때는 {} 생략
        if (test) return false;
        - 복수행 블록의 else는 if 블록 끝 {}와 같은 행에 위치시키기

15. Comments (주석)

        - 복수행의 코멘트는 /**...*/를 사용하고, 그 안에 모든 설명, 파라메터, 반환값에 대한 형이나 값을 기술
        - 단수행은 //을 사용, 코드의 상부에 배치하고, 코멘트 앞에 빈 행(blank line) 넣어주기
        - 문제 지적/촉구 액션의 경우 다음과 같이 주석처리한다.
         : // FIXME: shouldn't use a global here
         : // TODO: total should be configurable by an options param

16. 공백, 콤마, 세미콜론

            = 공백
              - 탭 = space 2개
              - {} 앞에는 space 1개 넣기
              - if, while 등의 제어구문 () 앞에는 space 1개 넣기
              - 함수선언, 함수호출시 인수리스트 () 앞에는 space 넣지말기
              - 연산자 사이에는 space 넣기
              - 파일 끝에는 개행문자를 1개 넣어달라
              (function(global) {
              })(this);↵
              - 길게 메소드 체이닝하는 경우 indent 사용, 행이 메소드 호출인걸 강조하기 위해 선두에 . 배치
              $('#items')
              .find('.selected')
              .highlight()
              - statement 앞, 블록위 뒤에는 blank line 넣어주기
              const arr = [
               function foo() {
               },

               function bar() {
               },
              ];

               return arr;
              - block에 빈행 끼워넣지 말기
              - (), [] 안쪽에 space 넣지말기
              - {} 안쪽에는 space 넣기

            = 콤마, 세미콜론
              - 콤마의 위치는 라인의 초반 (x) , 라인의 끝에 꼭 넣기(o) : Babel이 transpile할 때 쓸모없는 끝의 컴마 자동제거
              - 세미콜론 : 써라 -> 즉시함수가 연결된 2개의 파일일 때 인수가 되는 부분 보호함
              ;(() => {
               const name = 'Skywalker';
               return name;
              })();

17. 형변환과 강제

        - statement의 선두에서 형 변환을 행함
        - String(), Number(), parseInt(), Boolean() 등을 사용
        - parseInt가 bottleneck 이 되어서 성능저하가 일어났을 때 Bitshift를 사용하는 이유를 쓰기

18. Accessors

        - Accessor 함수가 필요한 경우 다음과 같은 형태로 사용
        : getVal()이나 setVal(), isVal(), hasVal(), ...
        - 일관된 경우 get(), set() 으로 작성 가능
        class Jedi {
         constructor(options = {}) {
          const lightsaber = options.lightsaber || 'blue';
          this.set('lightsaber', lightsaber);
          }

          set(key, val) {
          this[key] = val;
           }

         get(key) {
         return this[key];
          }
         }

19. 이벤트

        - 이벤트로 payload 값을 넘길 경우, raw값보다는 해시값을 넘겨주기
        $(this).trigger('listingUpdated', { listingId: listing.id });

        $(this).on('listingUpdated', function(e, data) {
         // do something with data.listingId
        });

20. jQuery

        - jQuery obj의 변수의 선두에는 $를 붙이기
        const $sidebar = $('.sidebar');
        - jQuery의 검색결과는 캐시하기
        - DOM 검색에는 $('.sidebar ul') 이나 $('.sidebar > ul') 와 같은 Cascading 을 사용하기
        - 한정된 jQuery 오브젝트 쿼리에는 find 메서드 사용
        $('.sidebar ul').hide();
        $('.sidebar > ul').hide();
        $sidebar.find('ul').hide();

21. FrontEnd JS guidelines

         - JS는 기본적으로 bottleneck 문제 크게 없으므로 성능 자체보다는 가독성, 정확성 개선에 신경쓰기
         - 성능 개선은 이미지 압축, 네트워크 액세스, DOM 리플로우 등에서 최적화를 권장
         - 함수를 pure하게 유지하려고 노력하기
         - native method를 최대한 사용하기
         - 변이 측면에서 loop 대신 array.prototype 메소드 사용하기
         - array.prototype 메소드 사용이 남용되면, 재귀 사용 권장
         - 고차함수의 경우 nesting을 꼭 필요할 때 하기
         [1,2,3].map(String)
         - multiple nested function calls를 피하기
         const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);
         const addThenMult = pipeline(plus1, mult2);
         addThenMult(5); // => 12
         - 특징 테스트, 비싼 연산, 큰 데이터 구조 등은 캐싱한다
         const contains = (() =>
         Array.prototype.includes
         ? (arr, value) => arr.includes(value)
         : (arr, value) => arr.some(el => el === value)
         )();
         contains(["foo", "bar"], "baz"); // => false
         - for...in을 가급적 피한다.
         Object.keys(obj).forEach(prop => console.log(prop));
         - 확실하지 않은 객체를 만들 때는 Map()을 추천
         const me = new Map();
         me.set("name", "Ben");
         me.set("age", 30);
         me.size; // => 2
         - 커링 남용금지
         - 작은 함수를 재사용가능하게 많이 만드는 것 권장
         - 서드파티 종속성을 최소화하라

## 클린코드 체크리스트

- 클래스는 필드, 생성자, 메서드 순으로 작성
- 함수 : 15라인 이하
- else if / else / switch 보다는 if-return이 선호되지만, 상황에 맞게 쓴다.

* 공백 필수
* 한 메서드에 한 단계의 indent (최대 2개)
* 모든 원시값과 문자열 포장?
* 인자 수는 최대 3개 까지 + 최대한 줄이기
* 코드 한 줄에 점을 하나만 허용하도록
* 메소드가 한 가지 일만 담당하게
* 클래스를 작게 유지하도록

## 네이밍컨벤션

(Airbnb style guide)

- obj, 함수, 인스턴스, 변수 : camelCase
- class, constructor : PascalCase
- export하는 것이 빈 object나 function library, singleton인 경우 PascalCase를 사용
- private property : 선두에 _(언더스코어) 사용
- this의 참조를 변수에 저장하지 말고, 화살표함수나 Function#bind 이용하기 (더 관용적인 표현이 있다면 bind도 사용하지 않는 것을 추천)

- JS의 변수명에는 문자, 숫자, $, _만 명명 가능, 첫 글자는 숫자가 될 수 없음
- 최대 두 단어, 문맥 중복 자제
- 축약 지양
- 동사로 시작 (get,set,is,has,can,..)
  - Device.getMessage()
  - Device.isValid()
  - Device.hasPort()
- 업계언어 작성
- 이벤트함수는 on~으로 시작

# 커밋컨벤션 (Udacity)

## 커밋컨벤션 : 일관성 있게 작성, 대문자로 시작 (types는 소문자), 동사원형 활용, 기능단위별로 "분리"해서 커밋

- 다만 기존 커밋과 통일성을 갖추기 위해, Udacity 컨벤션을 따르지 않고 커밋 제목은 모두 소문자로 작성하기로 한다.

* types : feat, fix, refactor, style, docs, test, chore

* 예시
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
