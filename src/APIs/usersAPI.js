import {
    SERVER_NAME,
    SERVER_PORT,
    APIResponse
} from './apiParameters'
const API_REGISTER_USERS = `${SERVER_NAME}:${SERVER_PORT}/users/registerUser`
const API_LOGIN_USERS = `${SERVER_NAME}:${SERVER_PORT}/users/loginUser`
export const registerUser = async (name, email, password) => {
    try {
        let response = await fetch(API_REGISTER_USERS, {
            method: 'POST',
            body: `name=${name}&email=${email}&password=${password}`,
            headers: {
                "Content-type": "application/x-www-form-urlencoded; chartset=UTF-8",
            },
        })
        let responseJson = await response.json()
        if(registerUser.result === "success") {
            return new APIResponse(
                responseJson.data,
                responseJson.message,true
            )
        } else {
            return new APIResponse(
                null,
                responseJson.message,false
            )
        }
    } catch (error) {
        return new APIResponse(
            null,
            error.message,false
        )
    }
}

export const loginUser = async (email, password) => {
    try {
        let response = await fetch(API_LOGIN_USERS, {
            method: 'POST',
            body: `&email=${email}&password=${password}`,
            headers: {
                "Content-type": "application/x-www-form-urlencoded; chartset=UTF-8",
            },
        })
        let responseJson = await response.json()
        if(responseJson.result === "success") {
            return responseJson.data
        } else {
            return {}
        }
    } catch (error) {
        return {}
    }
}