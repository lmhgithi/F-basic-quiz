const URL = "http://localhost:8080/users";

// TODO feedback: 处理response的逻辑有重复，可以思考一下如何除去重复
const getUserInfo = async (id) => {
  return fetch(`${URL}/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return Promise.resolve(response.json());
      }
      return Promise.reject(new Error("getUserInfo request failed"));
    })
    .then((data) => {
      return data;
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
    .then((response) => {
      if (response.ok) {
        return Promise.resolve(response.json());
      }
      return Promise.reject(new Error("getUserEducations request failed"));
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
};

export { getUserInfo, getUserEducations };
