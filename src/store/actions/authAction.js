import axios from 'axios'
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL
} from "../types/authType";

export const userRegister = (data) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const response = await axios.post('http://localhost:5000/api/messenger/user-register',data,config)
            localStorage.setItem('authToken',response.data.token)

            dispatch({
              type: REGISTER_SUCCESS,
              payload: {
                successMessage: response.data.successMessage,
                token : response.data.token
              },
            });
            console.log(response.data)
        }catch(error) {
            dispatch({
                type: REGISTER_FAIL,
                payload : {
                    error : error.response.data.error.errorMessage
                }
            })
            console.log(error)
        }
    }
}

export const userLogin = (data) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "/api/messenger/user-login",
        data,
        config
      );
      localStorage.setItem("authToken", response.data.token);

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: {
          successMessage: response.data.successMessage,
          token: response.data.token,
        },
      });
      console.log(response.data);
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: {
          error: error.response.data.error.errorMessage,
        },
      });
    }
  };
};