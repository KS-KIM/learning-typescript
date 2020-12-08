describe("set 테스트", () => {
  test("set에 키를 삽입한다.", () => {
    // given
    const distinctNumbers: Set<number> = new Set<number>();

    // when
    distinctNumbers.add(1);
    distinctNumbers.add(2);

    // then
    expect(distinctNumbers.size).toBe(2);
    expect(distinctNumbers.has(1)).toBeTruthy();
    expect(distinctNumbers.has(2)).toBeTruthy();
  });
  test("set에 키를 삭제한다.", () => {
    // given
    const distinctNumbers: Set<number> = new Set<number>();

    // when
    distinctNumbers.add(1);
    distinctNumbers.delete(1);

    // then
    expect(distinctNumbers.size).toBe(0);
    expect(distinctNumbers.has(1)).toBeFalsy();
  });
  test("set에 있는 모든 key를 얻어온다.", () => {
    // given
    const distinctNumbers: Set<number> = new Set<number>();

    // when
    distinctNumbers.add(1);
    distinctNumbers.add(2);

    // then
    expect(Array.from(distinctNumbers.keys())).toEqual(expect.arrayContaining([1, 2]));
  });
  test("set에 있는 모든 entry를 제거한다.", () => {
    // given
    const distinctNumbers: Set<number> = new Set<number>();
    distinctNumbers.add(1);
    distinctNumbers.add(2);

    // when
    distinctNumbers.clear();

    // then
    expect(distinctNumbers.size).toBe(0);
  });
});
