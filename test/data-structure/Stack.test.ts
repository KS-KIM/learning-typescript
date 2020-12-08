describe("stack 테스트", () => {
  test("stack push 연산을 수행한다.", () => {
    // given
    const stack: Array<number> = new Array<number>();

    // when
    stack.push(1);
    stack.push(2);
    stack.push(3);

    // then
    expect(stack.length).toBe(3);
  });
  test("stack pop 연산을 수행한다.", () => {
    // given
    const stack: Array<number> = new Array<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    // when
    // then
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(undefined);
  });
});
