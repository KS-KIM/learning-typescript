describe("type 키워드 학습 테스트", () => {
  test("type 키워드를 이용하여 함수 타입을 생성한다.", () => {
    // given
    type BiFunction<T, S> = (arg0: T, arg1: T) => S;
    const biFunction: BiFunction<number, number> = (a, b) => a * b;

    // when
    const result: number = biFunction(3, 4);

    // then
    expect(result).toBe(12);
  });
  test("type 키워드를 이용하여 함수 타입을 생성한다.", () => {
    // given
    type BiFunction<T, S> = (arg0: T, arg1: T) => S;
    const biFunction: BiFunction<number, string> = (a, b) => (a * b).toString();

    // when
    const result: string = biFunction(3, 4);

    // then
    expect(result).toBe("12");
  });
});
