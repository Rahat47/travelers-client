import axios from 'axios'

const toursEndpoint = 'http://localhost:5000/tours'
const userEndpoint = 'http://localhost:5000/users'
const reviewsEndpoint = 'http://localhost:5000/reviews'
const imgbbEndpoint = 'https://api.imgbb.com/1/upload'

//!IMGBB IMAGE UPLOAD
export const uploadImage = async (imageData) => {
    try {
        const { data } = await axios.post(imgbbEndpoint, imageData)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}


//!Tours
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

export const singleTour = async (id) => {
    try {
        const { data } = await axios.get(`${toursEndpoint}/${id}`)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)

    }
}

export const insertNewTour = async (tourData) => {
    try {
        const { data } = await axios.post(toursEndpoint, tourData)
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


//!Users

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

export const getAdmins = async () => {
    try {
        const { data } = await axios.get(`${userEndpoint}/get-admins`)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)

    }
}


export const makeNewAdmin = async (email) => {
    try {
        const { data } = await axios.patch(`${userEndpoint}/make-admin`, { email })
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}


//!Reviews

// export const insertAllReviews = async (reviews) => {
//     try {
//         const { data } = await axios.post(reviewsEndpoint, reviews)
//         return data
//     } catch (error) {
//         throw new Error(error.response.data.message)

//     }
// }

export const getReviewByTourId = async (id) => {
    try {
        const { data } = await axios.get(`${reviewsEndpoint}/${id}`)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const getFiveLatestReviews = async () => {
    try {
        const { data } = await axios.get(`${reviewsEndpoint}/get-five-latest`)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}


//!Payment 

export const paymentRequest = async (tour) => {
    try {
        const { data } = await axios.post("http://localhost:5000/chekcout/stripe", tour)
        return data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}