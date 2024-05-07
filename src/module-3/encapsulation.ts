{
  //encapsulation [Wrap Something Off]
  class Car {
    private _speed: number;
    constructor(_speed: number) {
      this._speed = _speed;
    }

    accelerate(speedIncrease: number): void {
      this._speed += speedIncrease;
    }

    get Speed() {
      return this._speed;
    }
  }

  const hondaCar = new Car(0);
  hondaCar.accelerate(500);
  console.log(hondaCar.Speed);
}
