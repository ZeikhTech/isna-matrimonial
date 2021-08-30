import http from "../../../services/http";
import storage from "../../../services/storage";

import { handleErrors } from "../../../helpers/error";

import { setToken, setUser, resetAuth } from "../auth/authReducer";

const path = "/auth";
export const signupUser = ({ body = {}, onSuccess, onError, onEnd }) => {
  return async (dispatch) => {
    try {
      const res = await http.post({ url: path + "/register", body });

      const {
        data: { data: user },
        headers,
      } = res;
      const xAuthToken = headers["x-auth-token"];

      dispatch(setToken(xAuthToken));
      dispatch(setUser(user));
      setCookie("xAuthToken", xAuthToken, 365);
      storage.store("xAuthToken", xAuthToken);
      storage.store("user", user);
      // //onSuccess event firing
      if (onSuccess) onSuccess(res);
    } catch (err) {
      console.log("err", err);
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
