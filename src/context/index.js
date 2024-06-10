import { createContext, useContext, useState } from "react";

const AppContext = createContext({
   hello: "Hello"
});

export function AppWrapper({children}){
   let [state,setState]=useState({
      hello: 'Hello'
   })

   return (
      <AppContext.Provider value={state}>
         {children}
      </AppContext.Provider>
   )
}

export function useAppContext(){
   return useContext(AppContext)
}