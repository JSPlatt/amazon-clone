import axios from 'axios'

const instance = axios.create({
    baseUrl:'http://localhost:5001/clone-e15f0/us-central1/api'
})

export default instance