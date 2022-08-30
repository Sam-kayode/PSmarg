import axios from 'axios'

class BaseRequest {
  private api

  constructor() {
    this.api = axios.create({
      baseURL: '',
    })
    this.setupInterceptors()
  }

  setupInterceptors() {
    this.api.interceptors.request.use()
    this.api.interceptors.response.use()
  }

  get(url: string) {
    this.api.get(url)
  }

  post(url: string, data: any) {
    this.api.post(url, data)
  }

  patch(url: string, data: any) {
    this.api.patch(url, data)
  }

  put(url: string, data: string) {
    this.api.put(url, data)
  }

  delete(url: string) {
    this.api.delete(url)
  }
}

export default BaseRequest
