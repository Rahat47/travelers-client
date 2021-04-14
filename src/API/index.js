import axios from 'axios'

const toursEndopoint = 'http://localhost:3000/tours/'

export const getAllTours = async () => {
    try {
        const { data } = await axios.get(toursEndopoint)
        return data
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}