import { userConstants } from '../constants';
import { history } from '../helpers';
import { makePOSTRequest} from '../utils/Axios';
import { reset, setState } from "redux-form";

export const userActions = {
  loginRequest,
  registrationRequest,
  fogotPasswordRequest,
  changePasswordRequest,
  unlockRequest
};

const redirect_url = (URL) =>{
  window.location.href = URL;
}

export function loginRequest(value) {
  return dispatch => {
    try{
      makePOSTRequest('/login', value)
      .then(response => {
        if (response.data.status == 'ok') {
          history.push('/dashboard')
        }else {
          dispatch(alertActions.error(response.data.error));
          dispatch(reset('loginForm'));
        }
      })
    }catch(e){
      dispatch( {
        type: userConstants.AUTHENTICATION_FAILED,
        payload: console.log(e),
      })
    }
  }
}

export function registrationRequest(value) {
  return dispatch => {
    try{
      makePOSTRequest('/registration', value)
      .then(response => {
        if (response.data.status == 'ok') {
          history.push('/login');
        }else {
          dispatch(reset('registrationForm'));
        }
      })
    }catch(e){
      dispatch( {
        type: userConstants.AUTHENTICATION_FAILED,
        payload: console.log(e),
      })
    }
  }
}

export function fogotPasswordRequest(value) {
  return dispatch => {
    try{
      makePOSTRequest('/forgot_password', value)
      .then(response => {
        if(response.data.status == "ok"){
          history.push('/login');
        }else {
          dispatch(reset('forgotForm'));
        }
      })
    }catch(e){
      dispatch( {
        type: userConstants.AUTHENTICATION_FAILED,
        payload: console.log(e),
      })
    }
  }
}

export function changePasswordRequest(value) {
  return dispatch => {
    try{
      makePOSTRequest('/change_password', value)
      .then(response => {
        if(response.data.status == "ok"){
          history.push('/login');
        }else {
          dispatch(reset('resetForm'));
        }
      })
    }catch(e){
      dispatch( {
        type: userConstants.AUTHENTICATION_FAILED,
        payload: console.log(e),
      })
    }
  }
}

export function unlockRequest(value) {
  return dispatch => {
    try{
      makePOSTRequest('/request_unlock', value)
      .then(response => {
        console.log(response)
        if(response.data.status == "ok"){
          history.push('/login');
        }else {
          dispatch(reset('unlockForm'));
        }
      })
    }catch(e){
      dispatch( {
        type: userConstants.AUTHENTICATION_FAILED,
        payload: console.log(e),
      })
    }
  }
}
