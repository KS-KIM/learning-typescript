describe("배열 학습 테스트", () => {
  test("배열 내 숫자를 모두 더한다.", () => {
    // given
    const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // when
    const sumOfNumbers: number = numbers.reduce((prev, current) => prev + current);

    // then
    expect(sumOfNumbers).toBe(55);
  });
});
