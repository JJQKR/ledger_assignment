import axios from "axios";

const AUTH_API_HOST = "https://moneyfulpublicpolicy.co.kr";

export const register = async (id, password, nickname) => {
  try {
    const response = await axios.post(AUTH_API_HOST + "/register", {
      id: id,
      password: password,
      nickname: nickname,
      // id, password, nickname으로 쓰면?
    });
    return response.data;
  } catch (error) {
    console.log(error?.response.data.message);
    alert("error?.response.data.message");
  }
};

export const login = async (id, password) => {
  try {
    const response = await axios.post(AUTH_API_HOST + "/login?expiresIn10m", {
      id: id,
      password: password,
    });
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log(error?.response.data.message);
    alert("error?.response.data.message");
  }
};
