describe("queue 테스트", () => {
  test("queue push 연산을 수행한다.", () => {
    // given
    const queue: Array<number> = new Array<number>();

    // when
    queue.push(1);
    queue.push(2);
    queue.push(3);

    // then
    expect(queue.length).toBe(3);
  });
  test("queue shift 연산을 수행한다.", () => {
    // given
    const queue: Array<number> = new Array<number>();
    queue.push(1);
    queue.push(2);
    queue.push(3);

    // when
    // then
    expect(queue.shift()).toBe(1);
    expect(queue.shift()).toBe(2);
    expect(queue.shift()).toBe(3);
    expect(queue.shift()).toBe(undefined);
  });
});
