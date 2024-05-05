{
  //static

  //general idea
  class Counter {
    count: number = 0;

    increment() {
      return this.count++;
    }
  }

  const counterInstance1 = new Counter();
  // This instance is created in the memory position "X"
  counterInstance1.increment();
  counterInstance1.increment();
  counterInstance1.increment();
  // console.log(counterInstance1.count); // Output: 3

  // This instance is created in the memory position "Y"
  const counterInstance2 = new Counter();
  counterInstance2.increment(); // Output: 1
  // console.log(counterInstance2.count);

  //let's use static
  class CounterUsingStatic {
    static count: number = 0;

    static increment() {
      return CounterUsingStatic.count++;
    }
  }

  const counterStaticInstance1 = new CounterUsingStatic();
  CounterUsingStatic.increment();
  CounterUsingStatic.increment();
  CounterUsingStatic.increment();
  console.log(CounterUsingStatic.count);
}
