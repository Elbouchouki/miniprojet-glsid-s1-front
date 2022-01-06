const AuthReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_PERMS":
      return {
        ...state,
        permissions: action.payload,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "SET_AUTH":
      return {
        state: action.payload,
      };
    case "GET_PERMS":
      return state.permissions;
    case "GET_USER":
      return state.user;
    case "GET_TOKEN":
      return state.token;
    default:
      return state;
  }
};

export default AuthReducer;
