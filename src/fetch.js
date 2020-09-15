const URL = "http://localhost:8080/users";

const getUserInfo = async (id) => {
  return fetch(`${URL}/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then(response => {
      if (response.ok) {
        return Promise.resolve(response.json());
      } else {
        return Promise.reject("getUserInfo request failed");
      }
    })
    .then(data => {
      return data
    })
    .catch((err) => console.log(err));
};


const getUserEducations = async (userId) => {
    return fetch(`${URL}/${userId}/educations`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then(response => {
          if (response.ok) {
            return Promise.resolve(response.json());
          } else {
            return Promise.reject("getUserEducations request failed");
          }
        })
        .then(data => {
          return data
        })
        .catch((err) => console.log(err));
};


export { getUserInfo, getUserEducations };
