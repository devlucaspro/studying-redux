import { createSlice } from "@reduxjs/toolkit";

// estado inicial do reducer (user)
const initialState = {
    user: null
}

// criar Slice com o nome do reducer (user + Slice)
// Slice == reducer
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
                        location: 'Rua cosmopolis',
                        number: 194,
                    },
                }
            }
        }
    }
})

// i export it as an action of the current reducer
export const { createUser } = userSlice.actions;

// and i also export the current reducer - it will be userReducer in root-reducer file
export default userSlice.reducer;