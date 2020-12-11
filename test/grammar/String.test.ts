describe("문자열 메소드 학습 학습", () => {
  test("startWith: 시작 문자열이 일치하는 경우 true를 반환한다.", () => {
    // given
    const originalText: string = "hello, world";

    // when
    const result: boolean = originalText.startsWith("hel");

    // then
    expect(result).toBeTruthy();
  });
  test("startWith: 시작 문자열이 일치하지 않는 경우 false를 반환한다.", () => {
    // given
    const originalText: string = "hello, world";

    // when
    const result: boolean = originalText.startsWith("helo");

    // then
    expect(result).toBeFalsy();
  });
  test("endsWith: 끝 문자열이 일치하는 경우 true를 반환한다.", () => {
    // given
    const originalText: string = "hello, world";

    // when
    const result: boolean = originalText.endsWith("orld");

    // then
    expect(result).toBeTruthy();
  });
  test("endsWith: 끝 문자열이 일치하지 않는 경우 false를 반환한다.", () => {
    // given
    const originalText: string = "hello, world";

    // when
    const result: boolean = originalText.endsWith("orll");

    // then
    expect(result).toBeFalsy();
  });
  test("split: 문자열을 문자열 구분자 기준으로 잘라 배열로 반환한다.", () => {
    // given
    const originalText: string = "ks-kim,kimevanjunseok,kimseyun,kimhongbin";

    // when
    const result: Array<string> = originalText.split(",");

    // then
    expect(result.length).toBe(4);
    expect(result).toEqual(expect.arrayContaining(["ks-kim", "kimevanjunseok", "kimseyun", "kimhongbin"]));
  });
  test("split: 문자열을 정규표현식 구분자 기준으로 잘라 배열로 반환한다.", () => {
    // given
    const originalText: string = "ks-kim, kimevanjunseok    , kimseyun,   kimhongbin";

    // when
    const result: Array<string> = originalText.split(/\s*,\s*/);

    // then
    expect(result.length).toBe(4);
    expect(result).toEqual(expect.arrayContaining(["ks-kim", "kimevanjunseok", "kimseyun", "kimhongbin"]));
  });
  test("trim: 문자열 앞뒤에 있는 공백 문자열을 제거한다.", () => {
    // given
    const originalText: string = "ks-kim, kimevanjunseok    , kimseyun,   kimhongbin";

    // when
    const result: Array<string> = originalText.split(",").map((name) => name.trim());

    // then
    expect(result.length).toBe(4);
    expect(result).toEqual(expect.arrayContaining(["ks-kim", "kimevanjunseok", "kimseyun", "kimhongbin"]));
  });
  test("trim: 문자열 앞뒤에 있는 공백 문자열을 제거한다.", () => {
    // given
    const originalText: string = "    kskim    ";

    // when
    const result: string = originalText.trim();

    // then
    expect(result).toEqual("kskim");
  });
  test("toLowerCase: 문자열 전체를 소문자로 변경한다.", () => {
    // given
    const originalText: string = "KSKim";

    // when
    const result: string = originalText.toLowerCase();

    // then
    expect(result).toEqual("kskim");
  });
  test("toUpperCase: 문자열 전체를 대문자로 변경한다.", () => {
    // given
    const originalText: string = "KSKim";

    // when
    const result: string = originalText.toUpperCase();

    // then
    expect(result).toEqual("KSKIM");
  });
});
