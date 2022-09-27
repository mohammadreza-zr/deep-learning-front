import Cookies from 'js-cookie';
import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import { toast } from 'react-toastify';

type requestType = { type: 'get' | 'post' | 'put' | 'patch' | 'delete' };

interface config {
  headers?: AxiosRequestHeaders;
}

interface requestProps {
  requestType: requestType;
  url: string;
  body?: object;
  config?: config;
}

interface OutputApi {
  status: number;
  message: string;
  data: any;
}

export class myAPIClass {
  private baseURL = 'http://localhost:5000';
  private headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Cookies?.get('token')}`,
  };
  private head = {
    withCredentials: true,
    baseURL: this.baseURL,
    headers: this.headers,
  };

  //Global Config. first one this configuration has been use.
  private axiosInstance: AxiosInstance = axios.create(this.head);

  private async sendRequest({
    requestType,
    url,
    body,
    config,
  }: requestProps): Promise<OutputApi> {
    try {
      this.headers.Authorization = `Bearer ${Cookies?.get('token')}`;
      config = {
        ...this.head,
        ...config,
        headers: {
          ...this.headers,
          ...config?.headers,
        },
      };

      //body or config, because second parameter in [get,delete] is undefined and axios don't give it.
      body = body ? body : config;

      const data = await this.axiosInstance[requestType.type](url, body, config);

      return {
        status: +data?.status || 400,
        message: data?.statusText || '',
        data: data?.data || '',
      };
    } catch (error: any) {
      if (Array.isArray(error?.response?.data?.message))
        toast(error?.response?.data?.message[0] || 'Error from the Server!');
      else toast(error?.response?.data?.message);
      // eslint-disable-next-line no-throw-literal
      throw {
        status: +error?.request?.status || 500,
        message: error?.message || 'Error from the Server!',
        data: error || '',
      };
    }
  }

  /**
   * Get request
   * @param {string} url - first for URL
   * @param {object} config - second for more config, optional!
   * @returns {Promise<object>} anything server returned
   */
  public async get(url: string, config?: object): Promise<OutputApi> {
    return this.sendRequest({
      requestType: { type: 'get' },
      url,
      config,
    });
  }

  /**
   * Post request
   * @param {string} url - first for URL
   * @param {object} body - second for body
   * @param {object} config - third for more config, optional!
   * @returns {Promise<object>} anything server returned
   */
  public async post(url: string, body: object, config?: object): Promise<OutputApi> {
    return this.sendRequest({
      requestType: { type: 'post' },
      url,
      body,
      config,
    });
  }

  /**
   * Put request
   * @param {string} url - first for URL
   * @param {object} body - second for body
   * @param {object} config - third for more config, optional!
   * @returns {Promise<object>} anything server returned
   */
  public async put(url: string, body: object, config?: object): Promise<OutputApi> {
    return this.sendRequest({
      requestType: { type: 'put' },
      url,
      body,
      config,
    });
  }

  /**
   * Patch request
   * @param {string} url - first for URL
   * @param {object} body - second for body
   * @param {object} config - third for more config, optional!
   * @returns {Promise<object>} anything server returned
   */
  public async patch(url: string, body: object, config?: object): Promise<OutputApi> {
    return this.sendRequest({
      requestType: { type: 'patch' },
      url,
      body,
      config,
    });
  }

  /**
   * Delete request
   * @param {string} url - first for URL
   * @param {object} config - third for more config, optional!
   * @returns {Promise<object>} anything server returned
   */
  public async delete(url: string, config?: object): Promise<OutputApi> {
    return this.sendRequest({
      requestType: { type: 'delete' },
      url,
      config,
    });
  }
}

export const apiService = new myAPIClass();
