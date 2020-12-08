import LotteryNumber from "../../src/lottery/LotteryNumber";
import LotteryTicket from "../../src/lottery/LotteryTicket";
import TicketSizeMismatchError from "../../src/lottery/TicketSizeMismatchError";

describe("LotteryTicket 테스트", () => {
  test("LotteryTicket 숫자의 개수가 올바르지 않은 경우 에러 발생", () => {
    // given
    const lotteryNumbers: Set<LotteryNumber> = new Set<LotteryNumber>();
    lotteryNumbers.add(LotteryNumber.from(1));
    lotteryNumbers.add(LotteryNumber.from(2));

    // when
    // then
    expect(() => new LotteryTicket(lotteryNumbers)).toThrow(Error);
  });
});
