export default class Person {
  constructor(private name: string, private age: number) {}

  public changeName(name: string): void {
    this.name = name;
  }

  public getOlder() {
    this.age++;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public equals(that: Person): boolean {
    return this.name === that.name && this.age === that.age;
  }
}
