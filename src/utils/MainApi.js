const { REACT_APP_MAIN_API_URL = "http://localhost:4000" } = process.env;
console.log("BASE URL:::", REACT_APP_MAIN_API_URL);

class MainApi {
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

    signup(name, email, password) {
        return fetch(this._baseUrl + "/signup", {
            method: "POST",
            credentials: "include",
            headers: this._headers,
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        }).then((res) => this._checkResponse(res));
    }

    signin(email, password) {
        return fetch(this._baseUrl + "/signin", {
            method: "POST",
            credentials: "include",
            headers: this._headers,
            body: JSON.stringify({
                email,
                password,
            }),
        }).then((res) => this._checkResponse(res));
    }

    getUserInfo() {
        return fetch(this._baseUrl + "/users/me", {
            method: "GET",
            credentials: "include",
            headers: this._headers,
        }).then((res) => this._checkResponse(res));
    }

    changeUserInfo(name, email) {
        return fetch(this._baseUrl + "/users/me", {
            method: "PATCH",
            credentials: "include",
            headers: this._headers,
            body: JSON.stringify({
                name,
                email,
            }),
        }).then((res) => this._checkResponse(res));
    }

    createSaveMovie(moviesData) {
        return fetch(this._baseUrl + "/movies", {
            method: "POST",
            credentials: "include",
            headers: this._headers,
            body: JSON.stringify({
                moviesData,
            }),
        }).then((res) => this._checkResponse(res));
    }

    getSavedMovies() {
        return fetch(this._baseUrl + "/movies", {
            method: "GET",
            credentials: "include",
            headers: this._headers,
        }).then((res) => this._checkResponse(res));
    }

    removeSavedMovieById(movieId) {
        return fetch(this._baseUrl + "/movies" + movieId, {
            method: "GET",
            credentials: "include",
            headers: this._headers,
        }).then((res) => this._checkResponse(res));
    }

    checkToken(token) {
        return fetch(this._baseUrl + "/users/me", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        }).then((res) => this._checkResponse(res));
    }
}

const api = new MainApi({
    baseUrl: REACT_APP_MAIN_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
