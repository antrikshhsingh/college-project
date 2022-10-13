import axios from "axios";

export const registerApi = async (data) => {
  try {
    var config = {
      method: "post",
      url: "http://localhost:8080/user/register",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: data,
    };

    const res = await axios(config);
    return res;

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  } catch (error) {
    console.log(error);
  }
};

export const loginApi = async (data) => {
  try {
    var config = {
      method: "post",
      url: "http://localhost:8080/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const res = await axios(config);
    return res;
  } catch (error) {
    console.log(error);
  }
};
