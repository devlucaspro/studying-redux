# ✌️🧑‍💻 Here you can see all my code and everything i have done to know about Redux and how to use it and learn really fast.

## To learn Redux you have to be able to understand every step of it, what does redux use and how does it work?

<br>

### 👋 Redux needs three main things:
1 - Store <br>
2 - root-reducer <br>
3 - your slice/reducer <br>

<br>
1 - Store is where you configure all the reducers to use into all the application, only using the method: configureStore({}) passing into a variable that you created into the root-reducer file.

<br>
2 - root-reducer is a file where you combine all the reducers to be able to configure the store after all reducers are ready.

<br>
3 - Slice/reducer is a file where you create your own reducer to use as a global state in your application, only using the method: createSlice();

<br>

# 🔥 Code:

```js
// to configure the store
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";

export const store = configureStore({
    reducer: rootReducer
})
```

```js
// to combine the reducers
import { combineReducers } from "redux";
import userReducer from "./user/slice";

export default combineReducers({
    user: userReducer,
    // cart: cartSlice
    // moreone: moreoneSlice
    // others slices...
})
```

```js
//creating the slice to use into our application
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // going to create an action
        // payload refers to what we receive
        createUser: (state, action) => {
            console.log(action.payload)

            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    address: {
                        location: 'main street',
                        number: 44,
                    },
                }
            }
        }
    }
})
```

## 🧑‍💻 That's a little tutorial about Redux and how to configure that, i hope you can understand it, have a great day and good studies!

<br>

## 📲 If you want to know more about Redux and all resources and things it has, i recommend you to search more about it on youtube.