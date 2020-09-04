const initalState = {
  loading: false,
  data: [],
  error: "",
};
const DashBoardDataReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return {
        loading: true,
        data: [],
        error: "",
      };

    case "FETCH_USER_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FETCH_USER_FAILURE":
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default DashBoardDataReducer;
