import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";
import reducers from "./reducers";
import allSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["pins"],
  blacklist: ["quotes"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(...middleware));
  sagaMiddleware.run(allSaga);
  const persistor = persistStore(store);
  return { store, persistor };
};
