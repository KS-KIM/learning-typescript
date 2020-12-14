import IterableUsingGenerator from "../../src/grammar/IterableUsingGenerator";

describe("IterableUsingGenerator 학습 테스트", () => {
  test("Generator를 생성한다", () => {
    // given
    const iterableUsingGenerator: IterableUsingGenerator<number> = new IterableUsingGenerator<number>([1, 2, 3, 4, 5]);

    // when
    const actual: Array<number> = [];
    for (let value of iterableUsingGenerator) {
      actual.push(value);
    }

    // then
    expect(actual).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  });
});
