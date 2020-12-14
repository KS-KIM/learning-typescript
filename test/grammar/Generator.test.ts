import { numberRangeGenerator, gapNumberRangeGenerator } from "../../src/grammar/Generator";

describe("반복기 학습 테스트", () => {
  test("순차 값 반복기를 생성하여 for...of문을 수행한다.", () => {
    // given
    const iterable: Iterable<number> = numberRangeGenerator(1, 6);

    // when
    const actual: Array<number> = [];
    for (let value of iterable) {
      actual.push(value);
    }

    // then
    expect(actual).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  });

  test("반복기를 생성기를 생성하여 for...of문을 수행한다.", () => {
    // given
    const iterable: Iterable<number> = gapNumberRangeGenerator(1, 6, 2);

    // when
    const actual: Array<number> = [];
    for (let value of iterable) {
      actual.push(value);
    }

    // then
    expect(actual).toEqual(expect.arrayContaining([1, 3, 5]));
  });
  test("반복기 생성기와 Spread 연산을 이용하여 배열을 생성한다.", () => {
    // given
    const iterable: Iterable<number> = gapNumberRangeGenerator(1, 10, 2);

    // when
    const actual: Array<number> = [...iterable];

    // then
    expect(actual).toEqual(expect.arrayContaining([1, 3, 5, 7, 9]));
  });
});
