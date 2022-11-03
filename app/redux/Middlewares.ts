import { Middleware } from 'redux'
import { SaveUserByEmailActionCreator, INIT_USER } from './actions'
import { State } from './reducers'
import { API } from './api'

export const getUserMiddleware: Middleware<
    {},
    State
> = storeApi => next => action => {
    if (action.type === 'GET_USERS') {
        storeApi.dispatch({ type: INIT_USER })
        return fetch(API).then((res) =>
            res.json()
        ).then((users: any) => {
            storeApi.dispatch(SaveUserByEmailActionCreator(users, action.payload))
        })
    }
    return next(action)
}