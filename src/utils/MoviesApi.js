const { REACT_APP_MOVIES_API_URL = "http://localhost:4000" } = process.env;
// console.log("MOVIES URL:::", REACT_APP_MOVIES_API_URL);

class MoviesApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(this._baseUrl, {
            method: "GET",
            // credentials: "include",
            headers: this._headers,
        }).then((res) => this._checkResponse(res));
    }
}

const api = new MoviesApi({
    baseUrl: REACT_APP_MOVIES_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
