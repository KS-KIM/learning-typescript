import LotteryFactory from "./LotteryFactory";
import LotteryNumber from "./LotteryNumber";
import LotteryTicket from "./LotteryTicket";

export default class AutoLotteryFactory implements LotteryFactory {
  private static readonly TOTAL_NUMBERS_SIZE = 6;

  public createNumbers(): LotteryTicket {
    const distinctNumbers: Set<LotteryNumber> = new Set();
    const lotteryNumbers: Array<LotteryNumber> = LotteryNumber.getLotteryNumbers();
    const shuffledLotteryNumbers: Array<LotteryNumber> = lotteryNumbers.sort(() => Math.random() - 0.5);
    for (let count = 0; count < AutoLotteryFactory.TOTAL_NUMBERS_SIZE; ++count) {
      distinctNumbers.add(shuffledLotteryNumbers[count]);
    }
    return new LotteryTicket(distinctNumbers);
  }
}
