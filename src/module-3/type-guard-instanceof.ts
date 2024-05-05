{
  //instanceof

  class Animal {
    name: string;
    species: string;
    color: string;

    constructor(name: string, species: string, color: string) {
      this.name = name;
      this.species = species;
      this.color = color;
    }

    makeSound() {
      console.log("Making Sound...");
    }
  }

  //cat class
  class Cat extends Animal {
    constructor(name: string, species: string, color: string) {
      super(name, species, color);
    }
    makeMeow() {
      console.log("Meow Meow...");
    }
  }

  //dog class
  class Dog extends Animal {
    constructor(name: string, species: string, color: string) {
      super(name, species, color);
    }
    makeBark() {
      console.log("Bark Bark...");
    }
  }

  //Smart Way of Type Narrowing
  //animal is Dog means given animal instance is of Dog class
  const isDog = (animal: Animal): animal is Dog => { 
    return animal instanceof Dog;
  };
  //animal is Cat means given animal instance is of Cat class
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const playWithAnimals = (animal: Animal) => {
    if (isDog(animal)) {
      console.log("it's a dog");
      animal.makeBark();
    } else if (isCat(animal)) {
      console.log("it's a cat");
      animal.makeMeow();
    } else {
      console.log("it's neither dog nor cat");
      animal.makeSound();
    }
  };

  //Use Case:
  const dog = new Dog("BullDog", "German Shepard", "White");
  const cat = new Cat("Kitty", "CattyKitty", "Black");
  const parrot = new Animal("Kitty", "CattyKitty", "Black");

  playWithAnimals(dog); // Bark Bark ...
  playWithAnimals(cat); // Meow Meow ...
  playWithAnimals(parrot); // Making Sound (Default) ...
}
