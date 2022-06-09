import React, { useState } from "react";
import { AuthContext, UserType } from "../AuthContext";

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<UserType>(null!);

  let signin = (newUser: UserType, callback: VoidFunction) => {
    setUser(newUser);
    localStorage.setItem("@nothink:user", JSON.stringify(newUser));
    callback();
  };

  let signout = (callback: VoidFunction) => {
    setUser(null!);
    localStorage.removeItem("@nothink:user");
    callback();
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
