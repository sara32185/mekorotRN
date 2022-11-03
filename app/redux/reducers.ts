import { combineReducers } from 'redux';
import {
    SaveUsersActionType,
    SaveUserByEmailActionType,
    SAVE_USER_BY_EMAIL
} from './actions'
import { User, UserState } from './User'

const initialState = {
    users: [],
    user: null
}

type UserActionsTypes = SaveUserByEmailActionType | SaveUsersActionType;
const userReducer = (
    state: UserState,
    { type, payload }: UserActionsTypes
) => {
    switch (type) {
        case SAVE_USER_BY_EMAIL: {
            let user = <User>{}
            let { users, email } = payload
            users.forEach((usr: any) => {
                if (usr.email === email) {
                    user.City = usr?.address.city
                    user.Street = usr?.address.street
                    user.Number = usr?.address.number
                }
            });
            return { ...state, user: user }
        }
        default: {
            return { ...initialState };
        }
    }
}

export interface State {
    user: UserState
}

const reducers = combineReducers({
    user: userReducer
});

export { reducers }