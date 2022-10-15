import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import users from "./slices/users";
import posts from "./slices/posts";

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    users,
    posts,
    // 여기에 추가
  })(state, action);
};

export default reducer;
