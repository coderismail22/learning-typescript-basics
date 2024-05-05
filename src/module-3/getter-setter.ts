{
  //getter and setter functions
  class RocketAccount {
    id: string;
    name: string;
    balance: number;

    constructor(name: string, id: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    //get
    get Balance() {
      return this.balance;
    }

    //set
    set AddBalance(amount: number) {
      this.balance += amount;
    }
  }

  const richGuyAccount = new RocketAccount("jhankar", "1234", 500);

  //retrieve account balance (by getter function)
  richGuyAccount.Balance; // from getter function
  richGuyAccount.balance; // from RocketAccount constructor

  //deposit money (by setter function)
  richGuyAccount.AddBalance = 50;
  console.log(richGuyAccount.balance);
}
