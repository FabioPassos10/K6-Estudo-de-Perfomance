import http from "k6/http";


export const options = {
    vus: 4,
    duration: "3s"
}

export default function () {
    http.get('http://test.k6.io')
}