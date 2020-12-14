import { readFileSync, readFile } from "fs";

describe("fs 학습 테스트", () => {
  test("동기 방식으로 파일을 읽는다.", () => {
    // given
    // when
    const buffer: Buffer = readFileSync("./package.json");

    // then
    expect(buffer.toString()).toEqual(expect.stringContaining("name"));
  });
  test("callback 비동기 방식으로 파일을 읽는다.", () => {
    // given
    // when
    // then
    readFile("./package.json", (error: Error, data: Buffer) => {
      expect(data.toString()).toEqual(expect.stringContaining("name"));
    });
  });
  test("promise 비동기 방식으로 파일을 읽는다.", async () => {
    // given
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

    // when
    const content = await readFilePromise("./package.json");

    // then
    expect(content.toString()).toEqual(expect.stringContaining("name"));
  });
});
