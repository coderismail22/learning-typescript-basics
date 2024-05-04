{
  //async typescript
  type Data = {
    data: string;
  };
  const createPromise = (): Promise<Data> => {
    return new Promise<Data>((resolve, reject) => {
      const data: Data = {
        data: "i am data",
      };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to resolve");
      }
    });
  };

  const myData = async (): Promise<Data> => {
    const data = await createPromise();
    console.log(data);
    return data;
  };
  myData();

  //example with fetchAPI
  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const myTodo = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    const data = await res.json();
    return data;
  };
  myTodo();
}
