import Person from "../../src/person/Person";

describe("map 테스트", () => {
  test("map에 entry를 추가한다.", () => {
    // given
    const distinctNumbers: Map<number, Person> = new Map<number, Person>();

    // when
    distinctNumbers.set(1, new Person("ks-kim", 29));
    distinctNumbers.set(2, new Person("kimks", 30));

    // then
    expect(distinctNumbers.size).toBe(2);
    expect(distinctNumbers.get(1).getName()).toBe("ks-kim");
    expect(distinctNumbers.get(1).getAge()).toBe(29);
    expect(distinctNumbers.get(2).getName()).toBe("kimks");
    expect(distinctNumbers.get(2).getAge()).toBe(30);
  });
  test("map에 있는 entry를 삭제한다.", () => {
    // given
    const distinctNumbers: Map<number, Person> = new Map<number, Person>();
    distinctNumbers.set(1, new Person("ks-kim", 29));
    distinctNumbers.set(2, new Person("kimks", 30));

    // when
    distinctNumbers.delete(1);

    // then
    expect(distinctNumbers.size).toBe(1);
    expect(distinctNumbers.get(1)).toBe(undefined);
  });
  test("map에 있는 모든 key를 얻어온다.", () => {
    // given
    const distinctNumbers: Map<number, Person> = new Map<number, Person>();

    // when
    distinctNumbers.set(1, new Person("ks-kim", 29));
    distinctNumbers.set(2, new Person("kimks", 30));

    // then
    expect(Array.from(distinctNumbers.keys())).toEqual(expect.arrayContaining([1, 2]));
  });
  test("map에 있는 모든 value를 얻어온다.", () => {
    // given
    const distinctNumbers: Map<number, Person> = new Map<number, Person>();
    const person_1 = new Person("ks-kim", 29);
    const person_2 = new Person("kimks", 30);

    // when
    distinctNumbers.set(1, person_1);
    distinctNumbers.set(2, person_2);

    // then
    expect(Array.from(distinctNumbers.values())).toEqual(expect.arrayContaining([person_1, person_2]));
  });
  test("map에 있는 모든 entry를 얻어온다.", () => {
    // given
    const distinctNumbers: Map<number, Person> = new Map<number, Person>();
    const person_1 = new Person("ks-kim", 29);
    const person_2 = new Person("kimks", 30);

    // when
    distinctNumbers.set(1, person_1);
    distinctNumbers.set(2, person_2);

    // then
    expect(Array.from(distinctNumbers.entries())).toEqual(
      expect.arrayContaining([
        [1, person_1],
        [2, person_2],
      ])
    );
  });
  test("map에 있는 모든 entry를 제거한다.", () => {
    // given
    const distinctNumbers: Map<number, Person> = new Map<number, Person>();
    const person_1 = new Person("ks-kim", 29);
    const person_2 = new Person("kimks", 30);
    distinctNumbers.set(1, person_1);
    distinctNumbers.set(2, person_2);

    // when
    distinctNumbers.clear();

    // then
    expect(distinctNumbers.size).toBe(0);
  });
  test("map에 key를 object로 지정한다.", () => {
    // given
    const distinctNumbers: Map<Person, number> = new Map<Person, number>();
    const person_1 = new Person("ks-kim", 29);
    const person_2 = new Person("kimks", 30);
    const person_3 = new Person("ks-kim", 29);
    distinctNumbers.set(person_1, 1);
    distinctNumbers.set(person_2, 2);
    distinctNumbers.set(person_3, 2);

    // when
    // then
    expect(distinctNumbers.size).toBe(3);
  });
});
