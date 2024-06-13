import axios from "axios";

const AUTH_API_HOST = "https://moneyfulpublicpolicy.co.kr";

export const register = async ({ id, password, nickname }) => {
  //매개변수 중괄호 안 쳐져있었는데 뭔 차이?
  try {
    const response = await axios.post(AUTH_API_HOST + "/register", {
      //이건 api 명세서대로 요청하는 거니까 signup 아니고 register?
      id,
      password,
      nickname,
    });
    return response.data;
  } catch (error) {
    console.log(error?.response.data.message);
    alert("error.response.data.message");
    //여기 이게 맞나? 텍스트로?
    throw error;
  }
};

export const login = async ({ id, password }) => {
  //매개변수 중괄호 안 쳐져있었는데 뭔 차이?
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

export const getUserInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.get(AUTH_API_HOST + "/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      alert("AccessToken이 만료되었습니다.");
      localStorage.clear();
    }
  }
};

export const updateProfile = async (formData) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.patch(
        AUTH_API_HOST + "/profile",
        { formData }, // <=formdata자리
        //Profile.jsx 리턴 부분 안 내용을 form으로 만든다고 하면
        // 버튼 눌렀을 때 formdata가 생성되게 할 수 있을 것이다.

        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      alert("AccessToken이 만료되었습니다.");
      localStorage.clear();
    }
  }
};
