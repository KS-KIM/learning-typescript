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
});
