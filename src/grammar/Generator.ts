export function* numberRangeGenerator(from: number, to: number) {
  let value: number = from;
  while (value < to) {
    yield value++;
  }
}

export function* gapNumberRangeGenerator(from: number, to: number, gap: number) {
  let value: number = from;
  while (value < to) {
    yield value;
    value += gap;
  }
}
