import RangeIterable from "../../src/grammar/RangeIterable";

describe("반복기 학습 테스트", () => {
  test("반복기를 생성한다.", () => {
    // given
    const iterable = new RangeIterable(1, 6);

    // when
    const actual: Array<number> = [];
    for (let value of iterable) {
      actual.push(value);
    }

    // then
    expect(actual).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  });
});
