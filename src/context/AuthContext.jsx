import {createContext,useState} from "react";

export const AuthContext =createContext();

function AuthProvider({
  children
}) {
 const [user] = useState({
    id: "user1",
    name: "Divya",
    email: "Divya@example.com"
  });

  return (

    <AuthContext.Provider
      value={{ user }}
    >
      {children}
    </AuthContext.Provider>

  );
}

export default AuthProvider;