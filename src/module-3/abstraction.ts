{
  //abstraction (interface and class)

  //abstract interface
  interface AbstractCar {
    startEngine(): void;
    stopEngine(): void;
    movingCar(): void;
  }

  // implementation of "AbstractCar" class
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

  // abstract class

  abstract class AbstractBike {
    abstract bikeEngineStart(): void;
    abstract bikeRun(): void;
    abstract bikeEngineStop(): void;
  }

  //implementation of "AbstractBike" class
  class RealBike extends AbstractBike {
    bikeEngineStart(): void {
      console.log("Bike engine on");
    }
    bikeEngineStop(): void {
      console.log("Bike engine off");
    }
    bikeRun(): void {
      console.log("Bike is running");
    }
  }

  const emma100 = new RealBike();
  emma100.bikeEngineStart();
  emma100.bikeRun();
  emma100.bikeEngineStop();
}
