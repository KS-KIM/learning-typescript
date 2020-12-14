import { readFile } from "fs";

const readFilePromise = (fileName: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    readFile(fileName, (error: Error, buffer: Buffer) => {
      if (error) {
        reject(error);
      } else {
        resolve(buffer.toString());
      }
    });
  });

describe("async/await 학습 테스트", () => {
  test("async/await을 통해 promise 메소드 체이닝을 풀어 쓴다.", async () => {
    // given
    const promise: Promise<number> = Promise.resolve(1);

    // when
    const actual: number = await promise;

    // then
    expect(actual).toBe(1);
  });
  test("Promise.all 메소드에 await을 걸어 동기화한다.", async () => {
    // given
    // when
    const files: Array<string> = await Promise.all([readFilePromise("./package.json"), readFilePromise("./tsconfig.json")]);

    // then
    for (let file of files) {
      console.log(file);
    }
  });
});
