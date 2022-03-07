import axios from "axios";
import APP_CONFIG from "../../config/app";

export const ACTION_TYPES = {
  FETCH_USERS: "fetchUsers",
  FETCH_FAILURE: "fetchFailure",
};

export const fetchUsers = () => {
  return (dispatch) =>
    axios
      .get(APP_CONFIG.API_URL)
      .then((response) =>
        dispatch({
          type: ACTION_TYPES.FETCH_USERS,
          payload: response.data,
        })
      )
      .catch((err) => {
        dispatch({ type: ACTION_TYPES.FETCH_FAILURE });
      });
};
