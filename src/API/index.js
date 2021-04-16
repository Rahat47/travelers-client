import axios from 'axios'

const toursEndpoint = 'http://localhost:5000/tours'
const userEndpoint = 'http://localhost:5000/users'

//Tours
export const getAllTours = async () => {
    try {
        const response = await axios.get(toursEndpoint)
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error)
    }
}



//Users

export const createUser = async (userProps) => {
    try {
        const response = await axios.post(`${userEndpoint}/signup`, userProps)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const loginExistingUser = async (loginData) => {
    try {
        const response = await axios.post(`${userEndpoint}/login`, loginData)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}