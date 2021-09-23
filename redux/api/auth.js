import http from "../../services/http";
import storage from "../../services/storage";

import { handleErrors } from "../../helpers/error";
import { setToken, setUser, resetAuth } from "../reducer/authReducer";
// import dynamic from 'next/dynamic'
// const {handleErrors} = dynamic(() => import('../../helpers/error'), {
//   ssr: false
// })
const path = "/auth";
export const signupUser = ({ body = {}, onSuccess, onError, onEnd }) => {
  return async (dispatch) => {
    try {
      const res = await http.post({ url: path + "/register", body });

      const {
        data: { data: user },
        headers,
      } = res;
      // const xAuthToken = headers["x-auth-token"];
      // dispatch(setToken(xAuthToken));
      // dispatch(setUser(user));
      // setCookie("xAuthToken", xAuthToken, 365);
      // storage.store("xAuthToken", xAuthToken);
      // storage.store("user", user);
      // //onSuccess event firing
      if (onSuccess) onSuccess(res);
    } catch (err) {
      console.log("error ye ha",err);
      //onError event firing
      if (onError) onError(err);
      else handleErrors(err);
    } finally {
      if (onEnd) onEnd();
    }
  };
};
export const signinUser = ({ body = {}, onSuccess, onError, onEnd }) => {
  return async (dispatch) => {
    try {
      //showing loader on ui
      const res = await http.post({ url: path + "/signin", body });

      const {
        data: { data: user },
        headers,
      } = res;
      const xAuthToken = res.data.accessToken;

      dispatch(setToken(xAuthToken));
      // dispatch(setToken(xAuthToken));

      dispatch(setUser(user));
      setCookie("xAuthToken", xAuthToken, 365);
      storage.store("xAuthToken", xAuthToken);
      storage.store("user", user);
      // //onSuccess event firing
      if (onSuccess) onSuccess(res);
    } catch (err) {
      //onError event firing
      if (onError) onError(err);
      else handleErrors(err);
    } finally {
      if (onEnd) onEnd();
    }
  };
};
export const requestPasswordReset = ({
  body = {},
  onSuccess,
  onError,
  onEnd,
}) => {
  return async (dispatch, getState) => {
    try {
      const res = await http.post({
        url: path + "/request_password_reset",
        body,
      });
      if (onSuccess) onSuccess(res);
    } catch (err) {
      //onError event firing
      if (onError) onError(err);
      else handleErrors(err);
    } finally {
      if (onEnd) onEnd();
    }
  };
};
export const resetMyPassword = ({ body = {}, onSuccess, onError, onEnd }) => {
  return async (dispatch, getState) => {
    try {
      const res = await http.put({
        url: path + "/reset_password",
        body,
      });
      if (onSuccess) onSuccess(res);
    } catch (err) {
      //onError event firing
      if (onError) onError(err);
      else handleErrors(err);
    } finally {
      if (onEnd) onEnd();
    }
  };
};
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  if (typeof window !== "undefined")
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
