describe("for문 학습 테스트", () => {
  test("for in 문으로 배열의 index를 순회한다.", () => {
    // given
    const array: Array<number> = [1, 2, 3, 4, 5];

    // when
    const actual: Array<string> = [];
    for (let index in array) {
      actual.push(index);
    }

    // then
    expect(actual).toEqual(expect.arrayContaining(["0", "1", "2", "3", "4"]));
  });
  test("for of 문으로 배열의 value를 순회한다.", () => {
    // given
    const array: Array<number> = [1, 2, 3, 4, 5];

    // when
    const actual: Array<number> = [];
    for (let index of array) {
      actual.push(index);
    }

    // then
    expect(actual).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  });
});
