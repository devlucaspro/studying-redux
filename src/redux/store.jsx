import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import { createContext, useContext } from "react";

// configuro a store
export const store = configureStore({
    reducer: rootReducer
})


// example application with context-api

// const appContext = createContext();
// export default function ProviderContext(children) {
//     return(
//         <appContext.Provider value={{name, email}}>
//             {children}
//         </appContext.Provider>
//     )
// }
//
// const { name, email } = useContext(appContext);
//
// // main app
// <ProviderContext>
//     //toast
//     //routes
// </ProviderContext>
//
// // blog
// const {name} = useContext(appContext)
// <h1>{name.name}</h1>