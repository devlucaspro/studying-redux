// create a SagaMiddleware and instance it
// in store config, set up the property 'middleware' and pass into the instanced const.
// .run in rootSaga

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";

import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)