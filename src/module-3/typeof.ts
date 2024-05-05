{
  //typeof operator
  type Alphanumeric = number | string;

  const add = (p1: Alphanumeric, p2: Alphanumeric): Alphanumeric => {
    if (typeof p1 === "number" && typeof p2 === "number") {
      return p1 + p2;
    } else {
      return p1.toString() + p2.toString();
    }
  };

  console.log(add(1, 1)); // 2
  console.log(add("1", "1")); // 11
}
