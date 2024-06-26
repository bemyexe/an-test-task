import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import StorageService from '../storage-services/auth-storage.service/auth-storage.service';

const BASE_URL = 'https://reqres.in/api/';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  unknownErrorCode?: string;
  acceptableErrorCodes?: string[];
  params?: any;
}

class HttpClientImpl {
  private _client: AxiosInstance;

  constructor(baseURL: string) {
    this._client = axios.create({
      baseURL,
    });

    this._client.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        const token = StorageService.getToken();
        if (token) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          };
        }
        return config as InternalAxiosRequestConfig<any>;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    this._client.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        if (error.response) {
          return Promise.reject(error.response);
        }
        return Promise.reject(error.response);
      }
    );
  }

  async get<ResponseType>(
    url: string,
    config?: CustomAxiosRequestConfig
  ): Promise<AxiosResponse<ResponseType>> {
    const response = await this._client.get<ResponseType>(url, config);
    return response;
  }

  async post<ResponseType>(
    url: string,
    body?: any,
    config?: CustomAxiosRequestConfig
  ): Promise<AxiosResponse<ResponseType>> {
    const response = await this._client.post<ResponseType>(url, body, config);
    return response;
  }
  async put<ResponseType>(
    url: string,
    body?: any,
    config?: CustomAxiosRequestConfig
  ) {
    const response = await this._client.put<ResponseType>(url, body, config);
    return response;
  }

  async patch<ResponseType>(
    url: string,
    body?: any,
    config?: CustomAxiosRequestConfig
  ) {
    const response = await this._client.patch<ResponseType>(url, body, config);
    return response;
  }

  async delete<ResponseType>(url: string, config?: CustomAxiosRequestConfig) {
    const response = await this._client.delete<ResponseType>(url, config);
    return response;
  }
}

export const HttpClient = new HttpClientImpl(BASE_URL);
