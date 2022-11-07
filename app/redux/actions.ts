import { User } from './User'

export const SAVE_USER_BY_EMAIL = 'SAVE_USER_BY_EMAIL';
export const SAVE_USERS = 'SAVE_USERS';
export const GET_USERS = 'GET_USERS';
export const INIT_USER = 'INIT_USER';

export interface SaveUserByEmailActionType {
    type: typeof SAVE_USER_BY_EMAIL,
    payload: {
        users: any[],
        email: string
    }
}

export const SaveUserByEmailActionCreator = (users: any[], email: string
): SaveUserByEmailActionType => {
    return {
        type: SAVE_USER_BY_EMAIL,
        payload: { users: users, email: email }
    }
}

export interface SaveUsersActionType {
    type: typeof SAVE_USERS,
    payload: User[]
}

export const saveUsesActionCreator = (users: User[]
): SaveUsersActionType => {
    return {
        type: SAVE_USERS,
        payload: users
    }
}

export interface InitUserActionType {
    type: typeof INIT_USER,
    payload: {}
}

export const initUserActionCreator = (
): InitUserActionType => {
    return {
        type: INIT_USER,
        payload: {}
    }
}



