{
  let value = null || undefined; // Only works with these two falsy values.

  const response = value ?? "Welcome Guest";
  // If left is "null" or "undefined" , the right value will be returned.

  console.log(response);
}
