
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import userHomePageSlice from './reducer/userHomePageSlice';
import userHomePageSaga from './middleware/userHomePageSaga';
import coursesCategorySlice from './reducer/coursesCategorySlice';
import coursesCategorySaga from './middleware/coursesCategorySaga';
import coursesByIDSlice from './reducer/coursesByIDSlice';
import coursesByCategorySlice from './reducer/coursesByCategorySlice';
import coursesByCategorySaga from './middleware/coursesByCategorySaga';
import coursesPagingSlice from './reducer/coursesPagingSlice';
import coursesPagingSaga from './middleware/coursesPagingSaga';
import loadingDataSlice from './reducer/loadingDataSlice';
import userSlice from "./slice/userSlice";
import userDataSlice from './reducer/userDataSlice';
import userDataSaga from './middleware/userDataSaga';
import userGetByIDSlice from './reducer/userGetByIDSlice';
import userByIdSaga from './middleware/userByIdSaga';

const middlewareSaga = createSagaMiddleware()


export const store = configureStore(
    {
        reducer:{
            userHomePageSlice,
            coursesCategorySlice,
            coursesByIDSlice,
            coursesByCategorySlice,
            coursesPagingSlice,
            loadingDataSlice,
            userSlice,
            userDataSlice,
            userGetByIDSlice,
        },
        middleware: (getDefaultMiddleware) => [middlewareSaga,...getDefaultMiddleware({
            serializableCheck: false
        })]
    }
)
middlewareSaga.run(userHomePageSaga)
middlewareSaga.run(coursesCategorySaga)
middlewareSaga.run(coursesByCategorySaga)
middlewareSaga.run(coursesPagingSaga)
middlewareSaga.run(userDataSaga)
middlewareSaga.run(userByIdSaga)
