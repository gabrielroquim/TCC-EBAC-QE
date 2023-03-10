
import 'dotenv/config'
import axios from 'axios'
import data from '../data/payload.json'

const baseURL = process.env.MOCK_URL

export const couponsList = async () => {
    return await axios.get(`${baseURL}/coupons`, data, {
        headers: {
            Authorization: 'Bearer YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
            "Content-Type": 'application/json'
        },
    })
}