{
  //abstraction

  //abstract interface
  interface AbstractCar {
    startEngine(): void;
    stopEngine(): void;
    movingCar(): void;
  }

  // implementation of car1
  class RealCar implements AbstractCar {
    startEngine() {
      console.log("engine started");
    }

    stopEngine() {
      console.log("engine stopped");
    }

    movingCar() {
      console.log("moving the car...");
    }
  }

  const lamborghini = new RealCar();
  lamborghini.startEngine();
  lamborghini.movingCar();
  lamborghini.stopEngine();


  
}
