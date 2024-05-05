{
  // inheritance
  class Dad {
    name: string;
    age: number;
    email: string;

    constructor(name: string, age: number, email: string) {
      this.name = name;
      this.age = age;
      this.email = email;
    }

    needSleep(number: number) {
      console.log(`${this.name} needs to sleep for ${number} hours`);
    }
  }

  class Son extends Dad {
    constructor(name: string, age: number, email: string) {
      super(name, age, email);
    }
  }
  const son = new Son("Abdullah", 20, "abdullah@gmail.com");
  son.needSleep(8);

  class Daughter extends Dad {
    constructor(
      name: string,
      age: number,
      email: string,
      public phone: string
    ) {
      super(name, age, email);
    }
  }

  const daughter = new Daughter(
    "Amatullah",
    18,
    "amatullah@gmail.com",
    "01630000000"
  );
  daughter.needSleep(10);
}
