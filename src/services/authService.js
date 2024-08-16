import axios from "axios";

export const login = async (email,pwd) => {
    const response = await axios.post('auth/login', {
        "email": email,
        "password": pwd
    })

    return response;
}