// function totalAmount(price,vat){
//     console.log(price+vat);
// }

// totalAmount(100,20);

//type annotations
function add(price: number, vat: number): number {
  // console.log(price+vat);
  return price + vat;
}
console.log(add(3, 6));

//variable annotations
let names: number;
names = 5;

//union types
let names2: string | null = null;

function add2(price: number, vat: number): number | boolean {
  // console.log(price+vat);
  return price + vat;
}
console.log(add(3, 6));

//interface
interface IAccount {
  name: string;
  balance: number;
  status?: string;
  deposit?: () => void;
}
const Account: IAccount = {
  name: "",
  balance: 0,
};

let accounts: IAccount[];

class InvestmentAccount implements IAccount {
  //   balance;
  //   name;
  constructor(public balance, public name) {}
}
