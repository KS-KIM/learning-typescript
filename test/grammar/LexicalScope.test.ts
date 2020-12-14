describe("Closure 학습 테스트", () => {
  test("바로 위 scope에 있는 함수 내 지역변수를 참조한다.", () => {
    // given
    function name(userName: string): Function {
      function getUserName(): string {
        return userName;
      }
      return getUserName;
    }

    // when
    const nameFunction: Function = name("ks-kim");
    const actual: string = nameFunction();

    // then
    expect(actual).toBe("ks-kim");
  });
  test("함수 바깥 범위에 있는 변수를 참조한다.", () => {
    // given
    const userName: string = "helloworld";
    function name(name: string): Function {
      function getUserName(): string {
        return userName;
      }
      return getUserName;
    }

    // when
    const nameFunction: Function = name("ks-kim");
    const actual: string = nameFunction();

    // then
    expect(actual).toBe("helloworld");
  });
});
