# javascript-calculator-precourse

## 기능 요구 사항

**입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.**

- 쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.
  ex) "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6
- 앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다. 커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.
  ex) "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.
- npm run start로 작업물 확인
- npm run test로 jest를 돌려 test 코드 확인하기

### 과제 파악하기

- '@woowacourse/mission-utils'에서 제공하는 Console 메서드 파악하기
  - **Console.readLineAsync(prompt: string, callback: (input: string) => void): void**
  - 콘솔에 prompt 메시지를 출력한 후, 사용자로부터 입력 받음. 입력이 완료되면 해당 입력을 인자로 받아 callback 함수 실행
  - **Console.print(message: string): void**
  - 콘솔에 메시지를 출력
