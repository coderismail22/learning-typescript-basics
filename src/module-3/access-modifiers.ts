{
  //access modifiers

  class BkashAccount {
    id: string;
    name: string;
    private _balance: number;
    protected _pin: number;

    constructor(id: string, name: string, balance: number, pin: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
      this._pin = pin;
    }

    //for private access:
    add(amount: number) {
      this._balance = this._balance + amount;
    }

    checkBalance() {
      return this._balance;
    }
  }

  //private access use case:
  const poorDevIsmailAccount = new BkashAccount("123", "Ismail", 25, 1357);
  poorDevIsmailAccount.add(5);
  console.log(poorDevIsmailAccount.checkBalance());


  
}
