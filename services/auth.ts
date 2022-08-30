import BaseRequest from '.'
import { LoginPayload } from '~/types/auth'

class AuthRequest extends BaseRequest {
  super() {
    //
  }

  login(data: LoginPayload) {
    this.post('/', data)
  }
}

export default AuthRequest
