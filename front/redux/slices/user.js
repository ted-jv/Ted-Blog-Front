import { createSlice } from "@reduxjs/toolkit";

// defaultState
const initialState = {
  isLoggedIn: false,
  data: null,
  error: null,
};

// slice reducers 방법01 : 있던 값을 바꾸는 형식 (state에 직접적으로 변경을 가함, 함수방식)
// 직접 변경을 가하기 때문에 기존값을 풀어써주는 전개 연산자가 필요가 없음
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    postUserLogin: (state, action) => {
      state.isLoggedIn = true;
      state.data = action.payload;
    },
    deleteUserLogout: (state, action) => {
      state.isLoggedIn = false;
      state.data = null;
    },
  },
  extraReducers: {},
});

export const { postUserLogin, deleteUserLogout } = userSlice.actions; // 액션 생성함수
export default userSlice.reducer;
