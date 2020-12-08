import LotteryTicket from "./LotteryTicket";

export default interface LotteryFactory {
  createNumbers(): LotteryTicket;
}
