import axios from "axios";

const fetchUserRequest = () => {
  return {
    type: "FETCH_USER_REQUEST",
  };
};

const fetchUserSuccess = (data) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: data,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: "FETCH_USER_FAILURE",
    payload: error,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ee6b965b04b94b2d8376bfae914af2be"
      )
      .then((responce) => {
        const data = responce.data.articles;
        console.log(data);
        dispatch(fetchUserSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};
