import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import App from "./App";
import ReactDOM from "react-dom";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
);

let persistor = persistStore(store);


ReactDOM.render(
  <Provider store={store}>
    {" "}
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>{" "}
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
