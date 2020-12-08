import LotteryNumberOutOfBoundError from "./LotteryNumberOutOfBoundError";

export default class LotteryNumber {
  private static readonly NUMBER_MIN: number = 1;
  private static readonly NUMBER_MAX: number = 45;
  private static readonly NUMBER_CACHE: Map<number, LotteryNumber> = new Map<number, LotteryNumber>();

  private number: number;

  private constructor(number: number) {
    this.validateNumber(number)
    this.number = number;
  }

  private validateNumber(number: number) {
    if (number < LotteryNumber.NUMBER_MIN || number > LotteryNumber.NUMBER_MAX) {
      throw new LotteryNumberOutOfBoundError(`올바르지 않은 범위의 로또 숫자입니다. number: ${number}`);
    }
  }

  static initialize(): void {
    for (let number: number = this.NUMBER_MIN; number <= this.NUMBER_MAX; ++number) {
      this.NUMBER_CACHE.set(number, new LotteryNumber(number));
    }
  }

  public static from(number: number): LotteryNumber {
    return this.NUMBER_CACHE.get(number);
  }

  public static getLotteryNumbers(): Array<LotteryNumber> {
    return Array.from(LotteryNumber.NUMBER_CACHE.values());
  }

  public getNumber(): number {
    return this.number;
  }
}

LotteryNumber.initialize();
