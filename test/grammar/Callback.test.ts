import Person from "../../src/person/Person";

describe("함수 학습 테스트", () => {
  test("메서드에 콜백 함수를 전달하여 호출한다.", () => {
    // given
    const findPerson = (callback: (person: Person) => void) => {
      const person: Person = new Person("ks-kim", 29);
      callback(person);
    };

    // when
    let name: string;
    let age: number;
    findPerson((person) => {
      name = person.getName();
      age = person.getAge();
      console.log(`name: ${name}, age: ${age}`);
    });

    // then
    expect(name).toBe("ks-kim");
    expect(age).toBe(29);
  });
});
