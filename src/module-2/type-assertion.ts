{
  //Type Assertion [Hey,TS! Do What I Say.]
  let something: any;

  something = "Amar Sonar Bangla";
  const somethingAsString = (something as string).toLowerCase(); // Type Assertion
  //   console.log("something as string", somethingAsString);

  something = 1756434489.2222222222;
  const somethingAsNumber = (something as number).toFixed(2); // Type Assertion
  //   console.log("something as number", somethingAsNumber);

  const kilometerToMeter = (kmVal: number | string | undefined) => {
    if (typeof kmVal === "string") {
      const meterVal = parseFloat(kmVal) * 1000;
      return `Meter(s): ${meterVal}`;
    } else if (typeof kmVal === "number") {
      return kmVal * 1000;
    } else {
      return `Undefined KM Value Input`;
    }
  };

  const convertedToMeterString = kilometerToMeter("10") as number; // Wrong Assertion
  const convertedToMeterNumber = kilometerToMeter(10) as number; // Right Assertion
  console.log(convertedToMeterString);
  console.log(convertedToMeterNumber);
}
