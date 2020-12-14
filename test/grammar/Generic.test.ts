describe("제네릭 학습 테스트", () => {
  test("제네릭 함수를 선언한다.", () => {
    // given
    function genericFunction<T, Q>(arg1: T, arg2: Q): string {
      return `arg1: ${arg1}, arg2: ${arg2}`;
    }

    // when
    const result: string = genericFunction<string, number>("foo", 123);

    // then
    expect(result).toBe("arg1: foo, arg2: 123");
  });
});
