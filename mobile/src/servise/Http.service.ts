import axios, { Axios } from 'axios';
require('dotenv').config({ path: '../../.env' });

class HttpSerivce {
  baseUrl: string | undefined;
  apiVersion: string;
  fetchingService: Axios;
  constructor(
      baseUrl = 'http://localhost:5000',
      fetchingService = axios,
      apiVersion = 'api',
  ) {
    this.baseUrl = baseUrl;
    this.apiVersion = apiVersion;
    this.fetchingService = fetchingService;
  }

  getUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }
  get(url: string) {
    return this.fetchingService.get(this.getUrl(url));
  }
  delete(url: string) {
    return this.fetchingService.delete(this.getUrl(url));
  }
  post(url: string, data: object) {
    return this.fetchingService.post(this.getUrl(url), data);
  }
  put(url: string, data: object) {
    return this.fetchingService.put(this.getUrl(url), data);
  }
}

export default HttpSerivce;
