# jest

## The Mock Function

Mocking의 목적은 컨트롤할 수 없는 무언가를 대체하는 것이기 떄문에, 대체하는 것이 필요로하는 모든 기능을 갖고 있는게 중요합니다.

- 함수 호출 Capture
- Return Value 설정
- 구현 변경하기

Mock 함수 인스턴스를 만드는 가장 간단한 방법은 jest.fn() 사용입니다.

```
test("returns undefined by default", () => {
    const mock = jest.fn();

    let result = mock("foo");

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("foo);
})
```

그리고 Return Value, 구현, Promise Resolution을 바꿀 수도 있습니다.

```
test("mock implementation", () => {
    const mock = jest.fn(() => "bar")

    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
})

test("also mock implementation", () => {
    const mock = jest.fn().mockImplementation(() => "bar")

    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo")
})

test("mock return value", () => {
    const mock = jest.fn();
    mock.mockReturnValue("bar");

    expect(mock("foo")).toBe("bar")
    expect(mock).toHaveBeenCalledWith("foo")
})


test("mock promise resolution", () =>{
    const mock = jest.fn();
    mock.mockResolvedValue("bar");

    expect(mock("foo")).resolves.toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
})
```

## 의존성 주입

Mock 함수를 사용하는 일반적인 방법 중 하나는 테스트하려는 함수로 arguments를 직접 전달하는 방식입니다. 테스트를 실행시키고, Mock 함수가 어떤 arguments와 어떻게 실행됐는지 예제를 통해 알아보겠습니다.

> 의존성 주입이란?

```
const doAdd = (a, b, callback) => {
    callback(a+b)
}

test("calls callback with arguments added", () => {
    const mockCallback = jest.fn();
    doAdd(1,2,mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(3);
})
```

이 전략은 견고한 테스트를 만들지만 테스트코드가 의존성주입을 허용하도록 요구합니다. 종종 그럴 수 없는 경우에, 우리는 실제로 존재하는 모듈과 함수를 Mocking 해야합니다.

### 모듈과 함수를 Mocking 하기

jest에서 모듈과 함수를 Mocking 하는 3가지 방법이 있습니다.

- jest.fn : Mock a function
- jest.mock : Mock a module
- jest.spyOn : Spy or mock a function

이것들은 각각의 방식으로 Mock 함수를 만드는데, 어떻게 동작하는지 설명을 하기 위해 다음과 같은 폴더 구조로 만들어 보겠습니다.

```
├ example/
| └── app.js
| └── app.test.js
| └── math.js
```

이 설정에서는 math.js 함수를 실제로 호출하지 않고 app.js를 테스트하면서, 함수가 예상대로 호출되는지 확인하기 위해 Spy를 하는것이 일반적입니다. math.js의 함수들이 복잡한 계산을 하거나 개발자가 피하고싶은 IO를 만드는 요청이라고 상상해주세요.

```
//math.js

export const add      = (a, b) => a + b;
export const subtract = (a, b) => b - a;
export const multiply = (a, b) => a * b;
export const divide   = (a, b) => b / a;
```

```
//app.js

import * as math from './math.js';

export const doAdd      = (a, b) => math.add(a, b);
export const doSubtract = (a, b) => math.subtract(a, b);
export const doMultiply = (a, b) => math.multiply(a, b);
export const doDivide   = (a, b) => math.divide(a, b);
```

### jest.fn으로 Mocking 하기

가장 기본적인 전략은 함수를 Mock 함수로 재할당하는 것입니다. 재할당된 함수가 쓰이는 어디서든지 Mock 함수가 원래의 함수 대신 호출될 것입니다.

```
import * as app from "./app";
import * as math from "./math";

math.add = jest.fn();
math.subtract = jest.fn();

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
```

이렇게 Mocking 하는 방식은 몇 가지 이유로 덜 쓰입니다.

- jest.mock 은 자동적으로 모듈의 모든 함수를 Mockin 해줍니다.
- jest.spyOn 도 마찬가지로 모든 함수를 모킹해주면서 원래의 함수를 다시 복원할 수도 있습니다.

### jest.mock으로 Mocking 하기

좀 더 일반적인 접근법은 자동적으로 모듈이 exports하는 모든 것들을 Mocking 해주는 jest.mock을 쓰는 것입니다. 따라서 jest.mock('./math.js') 를 해주면 본질적으로 math.js 를 다음처럼 설정하는 것입니다.

```
//math.eg.js

export const add      = jest.fn();
export const subtract = jest.fn();
export const multiply = jest.fn();
export const divide   = jest.fn();
```

여기서부터 모듈이 exports 하는 모든 것들에 Mock 함수 기능을 쓸 수 있습니다.

```
import * as app from "./app";
import * as math from "./math";

// Set all module functions to jest.fn
jest.mock("./math.js");

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
```

이것은 가장 쉽고 일반적인 모킹 방법입니다. 이 전략의 유일한 단점은 모듈의 원래 구현에 접근하기 어렵다는 것입니다. 이런 경우를 대비해 spyOn이 있습니다.

### jest.spyOn으로 Spy 혹은 Mocking하기

때로 우리는 메소드가 실행되는 것을 지켜보길 원할뿐만 아니라, 기존 구현은 보존되길 바랍니다. 구현을 Mocking하고 차후에 테스트 구문에서 원본을 복원할 수 있습니다.

이 경우에 jest.spyOn을 쓸 수 있습니다.

단순히 math 함수에 "spy"를 호출하고 원본 구현은 그대로 둘 수 있습니다.

```
import * as app from "./app";
import * as math from "./math";

test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");

  // calls the original implementation
  expect(app.doAdd(1, 2)).toEqual(3);

  // and the spy stores the calls to add
  expect(addMock).toHaveBeenCalledWith(1, 2);
});
```

실제로 함수를 대체하지 않고, 특정한 사이드 이펙트가 발생하는지 테스트 하는 몇몇 시나리오에 유용합니다.

함수를 Mocking하고 다시 원래 구현을 복원할 수도 있습니다.

```

import * as app from "./app";
import * as math from "./math";

test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");

  // override the implementation
  addMock.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");

  // restore the original implementation
  addMock.mockRestore();
  expect(app.doAdd(1, 2)).toEqual(3);
});
```
