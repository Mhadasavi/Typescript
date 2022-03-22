// function totalAmount(price,vat){
//     console.log(price+vat);
// }
// totalAmount(100,20);
//type annotations
function add(price, vat) {
    // console.log(price+vat);
    return price + vat;
}
console.log(add(3, 6));
//variable annotations
var names;
names = 5;
//union types
var names2 = null;
function add2(price, vat) {
    // console.log(price+vat);
    return price + vat;
}
console.log(add(3, 6));
var Account = {
    name: "",
    balance: 0
};
var accounts;
var InvestmentAccount = /** @class */ (function () {
    //   balance; we can declare implemented methods here or in constructor
    //   name;
    function InvestmentAccount(balance, name) {
        this.balance = balance;
        this.name = name;
    }
    return InvestmentAccount;
}());
