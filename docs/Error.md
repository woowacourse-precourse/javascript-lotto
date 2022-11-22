# 오류 & 해결법
1. 다른 파일에 있는 클래스 불러오기
    import {Lotto} from "./Lotto"; => const lotto = require("./Lotto"); 로 수정하여 에러 해결
2. Jest로 테스트 과정에서 Expect stringContaining 에러 발생
    리스트 그대로 출력하는 방식을 버려야 함. Console.print(리스트) => (X)
    join 함수를 이용해 숫자 배열을 문자열로 만들어 출력해야 함.
