const instance  = axios.create(
    {
        baseURL: 'http://192.168.9.247:9010/',
        timeout: 10000,
    }
)

export default instance;