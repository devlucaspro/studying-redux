import { createSlice } from "@reduxjs/toolkit";

// create a slice
// initial state
// create a slice using a name like it: user -> userSlice
// create reducers for the application
// export all actions
// export default the slice as: userSlice.reducer
// state is the current state's value and action is about what you receive

const initialState = {
    user: null,
    users: [],
    loading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action) => {
            console.log(action.payload)

            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    address: null,
                }
            }
        },
        logoutUser: (state) => {

            return {
                ...state,
                user: null,
            }

        },
        addAddress: (state, action) => {
            if(action.payload.location === '' || action.payload.number === '') {
                alert('preencha')
                return {...state}
            }

            if(state.user === null) {
                alert("Faça o login para cadastrar um endereço")
                return {...state}
            }

            console.log({
                location: action.payload.location,
                number: action.payload.number
            })

            alert("Dados atualizados!")

            return {
                ...state,
                user: {
                    ...state.user,
                    address: {
                        location: action.payload.location,
                        number: action.payload.number,
                    }
                }
            }
        },
        deleteAddress: (state) => {

            return {
                ...state,
                user: {
                    ...state.user,
                    address: null,
                }
            }
        },
        fetchUsers: (state, action) => {
            state.loading = true;
        },
        fetchUsersSuccess: (state, action) => {
            console.log(action.payload);

            state.users = action.payload;
            state.loading = false;

        },
        fetchUsersFailure: (state, action) => {
            console.log("Caiu na Failure")
            console.log(action.payload);
            state.loading = false;
        },
        fetchUserById: (state) =>  {
            console.log("Chamou no slice")
        },
        fetchUserByIdSuccess: (state, action) => {
            console.log("User do id");
            console.log(action.payload);
        },
        fetchUserByIdFailure: (state, action) => {
            console.log("deu erro no fetchById");
        }
    }
})

export const { createUser, logoutUser, addAddress, deleteAddress,
fetchUsers, fetchUsersSuccess, fetchUsersFailure, fetchUserById, fetchUserByIdSuccess, fetchUserByIdFailure } = userSlice.actions;

export default userSlice.reducer;