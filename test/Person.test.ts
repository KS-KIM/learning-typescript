import { Person } from "../src/utils/Person";

describe("Person Test", () => {
  test("person constructor", () => {
    // given
    const name: string = "ks-kim";
    const age: number = 29;

    // when
    const person: Person = new Person(name, age);

    // then
    expect(person.getName()).toBe(name);
    expect(person.getAge()).toBe(age);
  });
  test("같은 필드값을 가지는 두 person은 동일하다.", () => {
    // given
    const person_1: Person = new Person("ks-kim", 29);
    const person_2: Person = new Person("ks-kim", 29);

    // when
    // then
    expect(person_1.equals(person_2)).toBeTruthy();
  });
});
