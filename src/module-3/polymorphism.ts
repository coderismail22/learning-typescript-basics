{
  // polymorphism

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  // Circle
  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  // Rectangle
  class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }

    getArea(): number {
      return this.width * this.height;
    }
  }

  const printShapeArea = (shapeInstance: Shape) => {
    console.log(shapeInstance.getArea());
  };

  //Calling
  const shape = new Shape();
  const circle = new Circle(2);
  const rectangle = new Rectangle(2, 2);

  printShapeArea(shape);
  printShapeArea(circle);
  printShapeArea(rectangle);
}
