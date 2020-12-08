import Person from "./person/Person";
import LotteryFactory from "./lottery/LotteryFactory";
import AutoLotteryFactory from "./lottery/AutoLotteryFactory";
import LotteryTicket from "./lottery/LotteryTicket";

const person: Person = new Person("ks-kim", 29);
console.log(person);

const autoLotteryFactory: LotteryFactory = new AutoLotteryFactory();
const lotteryTicket: LotteryTicket = autoLotteryFactory.createNumbers();
console.log(lotteryTicket.getNumbers());
