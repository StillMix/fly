class Api {
    constructor(config) {
        this._url = config.url;
    }
    _check(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject("Произошла ошибка");
        }
    }
    getCards() {
        return fetch(`${this._url}/cards/`, {
          credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
        }).then((res) => {
            return this._check(res)

        });
    }

    addCard(ot,kuda, koda, kodaku, cent) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
              ot: ot,
              kuda: kuda, 
              koda: koda, 
              kodaku:kodaku, 
              cent:cent
            }),
        }).then((res) => {
            return this._check(res)
        });
    }

    backUser() {
      return fetch(`${this._url}/users/backuser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
      }).then((res) => {
          return this._check(res)
      });
  }

    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
        }).then((res) => {
            return this._check(res)
        });
    }
    setUserInfo(ot, about) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
              ot:ot,
              about: about }),
        }).then((res) => {
            return this._check(res)
        });
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
          credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                return this._check(res)
            })
    }
    setUserAvatar(avatar) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
          },
            body: JSON.stringify({avatar}),
        }).then((res) => {
            return this._check(res)
        });
    }
    changeLikeCardStatus(id, cardIsLiked){
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: cardIsLiked ? "PUT" : "DELETE",
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
      },
    }).then((res) => {
        return this._check(res)
    });
    }
}

const api = new Api({
    url: 'https://serverfly.netlify.app/.netlify/functions/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
})

export default api;