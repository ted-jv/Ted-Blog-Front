import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import reducer from "./rootReducer";

const isDev = process.env.NODE_ENV !== "production";
const makeStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: isDev,
  });
};

export const wrapper = createWrapper(makeStore, {
  debug: isDev,
});
