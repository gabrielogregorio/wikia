import type { AxiosRequestConfig, AxiosResponse, CancelTokenSource } from 'axios';
import Axios from 'axios';

const configAxios = Axios.create({
  baseURL: 'http://127.0.0.1:5000',
  timeout: 0,
});

let cancelTokens: CancelTokenSource[] = [];

export const cancelRequests = (): void => {
  cancelTokens.forEach((source) => {
    source.cancel('Request canceled by user');
  });

  cancelTokens = [];
};

export class ApiWikia {
  static get(relativeUrl: string, configs: AxiosRequestConfig<object> = {}): Promise<AxiosResponse> {
    const source = Axios.CancelToken.source();

    cancelTokens.push(source);

    return configAxios.get(relativeUrl, { ...configs, cancelToken: source.token });
  }
}
