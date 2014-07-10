var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var balance = 1000
var deposit = [];
var withdrawl = [];

var response = prompt("What would you like to do? Deposit (d)/Withdrawl (w)/ Quit (q)? ");
while(response != "q") {
    if (response === 'd') {
      plus = prompt("How much would you like to deposit? ");
      plus = parseInt(plus);
      deposit.push(plus); 
      response = prompt("What would you like to do? Deposit (d)/Withdrawl (w)/Quit (q)? ");
    } else if(response === 'w'){ 
            minus = prompt("How much would you like to withdrawl? ");
            minus = parseInt(minus);
            withdrawl.push(minus);
      response = prompt("What would you like to do? Deposit (d)/Withdrawl (w)/Quit (q)? ");
         }
 }

var depo = 0;
    for(var k = 0; k < deposit.length; k++) {
      depo +=deposit[k];
    }
var withdraw = 0;
    for(var l = 0; l < withdrawl.length; l++) {
      withdraw +=withdrawl[l];
   }

console.log("You deposited $" + depo);
console.log("You withdrew $" + withdraw);

var endBalance = (balance + depo - withdraw);
  if(endBalance < 0) {
    endBalance -= 50;
    console.log("You have been charged with an overdraft fee of $50");
  }

console.log("Your starting balance was $" + balance);
console.log("Your ending balance is $" + endBalance);
