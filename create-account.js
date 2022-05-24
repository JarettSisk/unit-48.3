function createAccount(pin, amount) {
  let myPin = pin;
  let myBalance = 0;
  if(amount) {
    myBalance = amount;
  }
  return {
    checkBalance(pin) {
      if(pin === myPin) {
        return `$${myBalance}`;
      } 
      else {
        return `Invalid PIN.`;
      }
    },
    deposit(pin, amount) {
      if(pin === myPin) {
        myBalance += amount;
        return `Succesfully deposited $${amount}. Current balance: $${myBalance}.`;
      } 
      else {
        return `Invalid PIN.`;
      }
    },
    withdraw(pin, amount) {
      if(pin === myPin && myBalance - amount > 0) {
        myBalance -= amount;
        return `Succesfully withdrew $${amount}. Current balance: $${myBalance}.`;
      } 
      else if(myBalance - amount < 0) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled."
      }
      else {
        return `Invalid PIN.`;
      }
    },
    changePin(oldPin, newPin) {
      if(oldPin === myPin) {
        myPin = newPin
        return "PIN successfully changed!";
      } 
      else {
        return `Invalid PIN.`;
      }
    },


  }
}

module.exports = { createAccount };
