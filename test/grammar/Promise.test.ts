import { readFile } from "fs";

const readFilePromise = (fileName: string): Promise<string> =>
  new Promise<string>((resolve: (value: string) => void, reject: (error: Error) => void) => {
    readFile(fileName, (err: Error, buffer: Buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer.toString());
      }
    });
  });

describe("Promise 학습 테스트", () => {
  test("Promise를 생성하여 메소드 체이닝 방식으로 연쇄 호출한다.", () => {
    // given
    readFilePromise("./package.json")
      .then((content: string) => {
        console.log(content);
        return readFilePromise("./package.json");
      })
      .then((content: string) => {
        console.log(content);
        return readFilePromise(".");
      })
      .catch((err: Error) => {
        console.log(`error: ${err.message}`);
      })
      .finally(() => {
        console.log("프로그램 종료");
      });
  });
  test("Promise.all 메소드를 통해 모든 조건을 충족하는지 확인한다.", () => {
    Promise.all([Promise.resolve(true), Promise.resolve("hello")]).then((result) => console.log(result)); // [true, "hello"]
  });
  test("Promise.all 메소드를 통해 하나의 조건이라도 충족시키지 못하면 then 블록을 건너뛰고 catch 블록만 실행된다.", () => {
    Promise.all([Promise.resolve(true), Promise.reject(new Error("hello"))])
      .then((result) => console.log(result)) // 호출 x
      .catch((error) => console.log(`error: ${error.message}`)); // 호출 o
  });
  test("Promise.race 메소드를 통해 하나의 조건이라도 충족하면 then 블록을 호출한다.", () => {
    Promise.race([Promise.resolve(true), Promise.resolve("hello")])
      .then((result: any) => console.log(result)) // 호출 o
      .catch((error: { message: any }) => console.log(`error: ${error.message}`)); // 호출 x
  });
  test("Promise.race 메소드를 통해 하나의 조건이라도 충족하면 then 블록을 호출한다.", () => {
    Promise.race([Promise.resolve(true), Promise.reject(new Error("hello"))])
      .then((result: any) => console.log(result)) // 호출 o
      .catch((error: { message: any }) => console.log(`error: ${error.message}`)); // 호출 x
  });
  test("Promise.race 메소드를 호출했을 때 첫 번째 Promise가 reject이면 catch 블록만 호출한다.", () => {
    Promise.race([Promise.reject(new Error("hello")), Promise.resolve(true)])
      .then((result: any) => console.log(result)) // 호출 x
      .catch((error: { message: any }) => console.log(`error: ${error.message}`)); // 호출 o
  });
});
