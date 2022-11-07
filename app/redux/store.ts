import { configureStore } from '@reduxjs/toolkit'

import { reducers } from './reducers'
import { getUserMiddleware } from './Middlewares'

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(getUserMiddleware)
})

export default store
