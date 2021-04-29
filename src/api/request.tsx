import axios, { AxiosRequestConfig } from 'axios';
import {BASE_URL} from '../constants/api';


class Request {
  // public axios: AxiosInstance;
  public api: AxiosInstance;
 
  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
      timeout: 100000,
    });
  }

  public async authCall(config: AxiosRequestConfig) {
    try {
      let headers: any = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      const res = await this.api.request({
        headers,
        ...config,
      });
      return res.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }

}

export default new Request();
