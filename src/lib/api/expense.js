import axios from "axios";

const JSON_SERVER_HOST = "https://scintillating-super-utahceratops.glitch.me";

export const getExpense = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses`);
    return response.data;
  } catch (error) {
    alert("뭔가 잘못된 것 같아용^^ㅎㅎ 데이터 로드 안 돼요");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const { data } = await axios.post(
      `${JSON_SERVER_HOST}/expenses`,
      newExpense
    );
    return data;
  } catch (error) {
    console.log(error);
    alert("뭔가 잘못돼서 데이터가 써지지 않아용~~~~");
  }
};

export const putExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const { data } = await axios.put(
      `${JSON_SERVER_HOST}/expenses/${id}`,
      rest //rest가 바디부분
    );

    return data;
  } catch (error) {
    console.log(error);
    alert("또 하나의 오류! 그것은 수정할 수 없는!");
  }
};

export const deleteExpense = async (id) => {
  try {
    const { data } = await axios.delete(`${JSON_SERVER_HOST}/expenses/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    alert("삭제가 안 되네용");
  }
};
