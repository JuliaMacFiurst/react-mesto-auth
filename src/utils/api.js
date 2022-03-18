class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getAllData() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  getInitialCards() {
    return fetch(this._url + "/cards", {
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  getUserInfo() {
    return fetch(this._url + "/users/me", {
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  setUserInfoApi(userData) {
    return fetch(this._url + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  addUserCard(cardData) {
    return fetch(this._url + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(this._url + `/cards/likes/${id}`, {
      method: `${isLiked ? "PUT" : "DELETE"}`,
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // dislike(_id) {
  //   return fetch(this._url + `/cards/likes/${_id}`, {
  //     method: "DELETE",
  //     headers: this._headers,
  //   }).then((res) => {
  //     return this._checkResponse(res);
  //   });
  // }

  deleteCard(_id) {
    return fetch(this._url + `/cards/${_id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  setUserAvatar(data) {
    return fetch(this._url + "/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-34",
  headers: {
    authorization: "ca130fc9-c3f6-47a9-975b-5e5cd566bdde",
    "Content-Type": "application/json",
  },
});

export default api;
