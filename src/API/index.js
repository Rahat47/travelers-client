import axios from 'axios'

const toursEndpoint = 'http://localhost:5000/tours'
const userEndpoint = 'http://localhost:5000/users'
const imgbbEndpoint = 'https://api.imgbb.com/1/upload'

//IMGBB IMAGE UPLOAD
export const uploadImage = async (imageData) => {
    try {
        const { data } = await axios.post(imgbbEndpoint, imageData)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}


//Tours
export const getAllTours = async () => {
    try {
        const { data } = await axios.get(toursEndpoint)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const bestTours = async () => {
    try {
        const { data } = await axios.get(`${toursEndpoint}/best-tours`)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)

    }
}


// export const uploadAllTour = async (tours) => {
//     try {
//         const { data } = await axios.post(toursEndpoint, tours)
//         return data
//     } catch (error) {
//         throw new Error(error.response.data.message)
//     }
// }


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