import {
    SERVER_NAME,
    SERVER_PORT,
    APIResponse
} from './apiParameters'
const API_REGISTER_USERS = `${SERVER_NAME}:${SERVER_PORT}/users/registerUser`
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