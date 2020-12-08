export default class LotteryNumberOutOfBoundError extends Error {
  constructor(message: string) {
    super(message);
  }
}
