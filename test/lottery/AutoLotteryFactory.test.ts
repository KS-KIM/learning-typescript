import AutoLotteryFactory from "../../src/lottery/AutoLotteryFactory";
import LotteryFactory from "../../src/lottery/LotteryFactory";
import LotteryTicket from "../../src/lottery/LotteryTicket";

describe("AutoLotteryFactory 테스트", () => {
  test("로또 티켓을 생성한다.", () => {
    // given
    const lotteryFactory: LotteryFactory = new AutoLotteryFactory();

    // when
    const lottoTicket: LotteryTicket = lotteryFactory.createNumbers();

    // then
    expect(lottoTicket).toBeInstanceOf(LotteryTicket);
    expect(lottoTicket.getNumbers().length).toBe(6);
  });
});
