{
  //in operator

  type NormalUser = {
    name: string;
    email: string;
  };
  type AdminUser = {
    name: string;
    email: string;
    role: "admin";
  };

  const isAdmin = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`Yes, ${user.name} is admin`);
    } else {
      console.log(`No, ${user.name} is not admin`);
    }
  };

  const ismail = {
    name: "Ismail",
    email: "ismail@gmail.com",
  };

  const sathi = {
    name: "Sathi",
    email: "sathi@gmail.com",
    role: "admin",
  };

  isAdmin(ismail); // Not Admin
  isAdmin(sathi); //Is Admin
}
