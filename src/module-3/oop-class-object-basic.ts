{
  //oop - class

  //Bad Way
  class Animal {
    name: string;
    color: string;
    sound: string;

    constructor(name: string, color: string, sound: string) {
      this.name = name;
      this.color = color;
      this.sound = sound;
    }
  }

  //Good Way
  class Animal2 {
    //using parameter properties
    constructor(
      public name: string,
      public color: string,
      public sound: string
    ) {}
  }

  //Use Case:
  const dog = new Animal("Dog", "Brown", "Bark");
  const cat = new Animal("Cat", "White", "Meow");
  console.log(dog,cat)
}
