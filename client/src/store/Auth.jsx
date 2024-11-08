import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, settoken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const AuthorizationToken = `Bearer ${token}`

  const storeTokenInLS = (Stoken) => {
    settoken(Stoken)
    return localStorage.setItem("token", Stoken);
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

  const LogoutUSer = () => {
    settoken("");
    return localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    try {
      setIsLoading(true)
      const response =await fetch("http://localhost:9000/api/auth/user",{
        method:"GET",
        headers:{
          Authorization:AuthorizationToken,
        }
      })
      console.log("123",response.ok);
      
      if(response.ok){
        const data = await (response).json()
        setUser(data.userData)
        console.log("user data1",data.userData);
        setIsLoading(false)
      }else{
        console.error("Error fethching user data")
        setIsLoading(false)
      }
    } catch (error) {
      console.error("Error fetching user data")
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUSer, user, AuthorizationToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
