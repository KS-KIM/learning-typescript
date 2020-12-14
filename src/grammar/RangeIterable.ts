export default class RangeIterable implements Iterable<number> {
  constructor(public from: number, public to: number) {}
  [Symbol.iterator](): Iterator<number> {
    const that = this;
    let currentValue = that.from;
    return {
      next() {
        const value = currentValue < that.to ? currentValue++ : undefined;
        const done = value == undefined;
        return { value, done };
      },
    };
  }
}
