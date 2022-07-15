import axios from 'axios'
import { apiCallerWithToken } from '../config/configAxios'


const getAll = (token : string) => {
  return apiCallerWithToken(token).post("http://172.104.32.239:5800/v1/music/getAll", {})
}

export const musicApi = {
  getAll
}