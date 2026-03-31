//context consist of two things (Variable and function)
import { createContext, useEffect, useState } from "react";

export let UserContext = createContext();

export default function UserContextProvider(props) {
  let [userLogin, setuserLogin] = useState(null);
  
  useEffect(()=>{

    if(localStorage.getItem("Usertoken")){
      setuserLogin(localStorage.getItem("Usertoken"))
  
    }

  },[])

  return (
    <UserContext.Provider value={{ userLogin, setuserLogin }}>
      {props.children}
    </UserContext.Provider>
  );
}