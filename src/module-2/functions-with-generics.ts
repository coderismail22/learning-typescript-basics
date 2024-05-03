{
  //functions with generics

  const createArray = <T>(string: T): T[] => {
    return [string];
  };

  type User = {
    name: string;
    job: string;
  };

  const genUser = createArray<User>({
    name: "pc",
    job: "computing",
  });

  //Function Taking Tuple
  const functionTakingTuple = <X, Y>(n1: X, n2: Y): [X, Y] => {
    return [n1, n2];
  };


}
