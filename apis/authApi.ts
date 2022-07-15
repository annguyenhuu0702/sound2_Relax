import axios from 'axios'


const register = (user: any) => {
  return axios.post("http://172.104.32.239:5800/v1/register",user)
}

const login = (user: any) => {
  return axios.post("http://172.104.32.239:5800/v1/login",user)
}

const forgotPassword = (email: any) => {
  return axios.post("http://172.104.32.239:5800/v1/forgotPassword",email)
}

const otpConfirm = (token: string) => {
  return axios.post("http://172.104.32.239:5800/v1/verifyOTP",token)
}

export const authApi = {
  register,
  login,
  forgotPassword,
  otpConfirm
}

