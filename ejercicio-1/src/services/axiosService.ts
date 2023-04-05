import APIRequest from "../utils/config/axios.config";

export function getChiste() {
    return APIRequest.get('/', {
        validateStatus: function (status) {
            return status < 500;
        }
    })
}