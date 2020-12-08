import { exception } from "console";
import LotteryNumber from "./LotteryNumber";
import LotterySizeMismatchError from "./TicketSizeMismatchError";

export default class LotteryTicket {
  private static readonly TOTAL_NUMBERS_SIZE = 6;

  private numbers: Set<LotteryNumber>;

  public constructor(numbers: Set<LotteryNumber>) {
    this.validateNumbers(numbers);
    this.numbers = numbers;
  }

  private validateNumbers(numbers: Set<LotteryNumber>): void {
    if (numbers.size != LotteryTicket.TOTAL_NUMBERS_SIZE) {
      throw new LotterySizeMismatchError(`로또 숫자의 크기가 올바르지 않습니다. size: ${numbers.size}`);
    }
  }

  public getNumbers(): Array<LotteryNumber> {
    return Array.from(this.numbers).sort(
      (lotteryNumber1, LotteryNumber2) => lotteryNumber1.getNumber() - LotteryNumber2.getNumber()
    );
  }
}
