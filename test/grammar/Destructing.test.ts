class Address {
  public constructor(public postCode: string, public region: string, public address1: string, public address2: string, public address3: string) {}
}

describe("비구조화 할당 학습 테스트", () => {
  test("객체의 비구조화 할당을 수행한다.", () => {
    // given
    const address: Address = new Address("03945", "서울특별시", "송파구", "잠실", "루터회관");

    // when
    const { postCode, region, ...rest } = address;

    // then
    expect(postCode).toBe("03945");
    expect(region).toBe("서울특별시");
    expect(rest).toEqual(expect.objectContaining({ address1: "송파구", address2: "잠실", address3: "루터회관" }));
  });
  test("배열의 비구조화 할당을 수행한다.", () => {
    // given
    const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7];

    // when
    const [first, second, third, ...rest] = numbers;

    // then
    expect(first).toBe(1);
    expect(second).toBe(2);
    expect(third).toBe(3);
    expect(rest).toEqual(expect.arrayContaining([4, 5, 6, 7]));
  });
});
