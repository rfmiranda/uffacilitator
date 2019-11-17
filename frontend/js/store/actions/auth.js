import { History } from "../../utils";

export const auth = (status, credencial) =>  {
    return {
      type: 'LOGIN_AUTH',
      status,
      credencial
    }
  }
