import { Middleware } from 'redux'
import { SaveUserByEmailActionCreator } from './actions'
import { State } from './reducers'
import { API } from './api'

export const getUserMiddleware: Middleware<
    {},
    State
> = storeApi => next => action => {
    debugger
    if (action.type === 'GET_USERS')
        fetch('https://fakestoreapi.com/users?email=john@gmail.com').then((res) =>
            res.json()
        ).then((users: any) => {
            return storeApi.dispatch(SaveUserByEmailActionCreator(users, action.payload))

            //     dispatch(saveUsesActionCreator(users.find(
            //     (usr: any) => usr.email === action.payload))
            // )
        })
    return next(action)
}