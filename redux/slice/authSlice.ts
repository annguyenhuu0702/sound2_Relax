import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  typeLogin, typeRegister } from "../../types/auth";
import { typeUser } from "../../types/user";

interface authState {
  loading: boolean,
  error : boolean,
  user: typeUser | null,
  token: string,
  email: string,
  code : number
  
}

const initialState: authState = {
  loading: false,
  error: false,
  user: null,
  token: "",
  email: "",
  code : 0
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    register: (state,action: PayloadAction<typeRegister>) => {
      state.loading = true
    },
    registerSuccess: (state,action: PayloadAction<typeUser>) => {
      state.loading = false,
      state.user = action.payload
    },
    registerFailed: (state) => {
      state.loading = false
      state.error = true      
    },
    login: (state,action: PayloadAction<typeLogin>) => {
      state.loading = true
    },
    loginSuccess: (state,action: PayloadAction<any>) => {
      state.loading = false
      state.user = action.payload
      state.token = action.payload.data.access_token

    },
    loginFailed: (state) => {
      state.loading = false
      state.error = true      
    },
    forgotPassword:(state,action: PayloadAction<string>) => {
      state.loading = true
    },  
    forgotPasswordSuccess:(state,action: PayloadAction<any>) => {
      state.loading = false
      state.email = action.payload
    }, 
    forgotPasswordFailed:(state) => {
      state.loading = false
      state.error = true
    }, 
    otpConfirm : (state,action) => {
      state.loading = true
    },
    otpConfirmSuccess : (state,action) => {
      state.loading = false
      state.code = action.payload.code
    },
    otpConfirmFailed : (state) => {
      state.loading = false
      state.error = true
    },

  }
})

export const authActions = authSlice.actions;
export default authSlice.reducer