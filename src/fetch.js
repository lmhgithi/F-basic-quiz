const URL = "http://localhost:8080/users";

const getUserInfo = (id) => {
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

export { getUserInfo };
