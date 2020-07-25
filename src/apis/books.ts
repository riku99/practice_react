import axios from "axios";

const getGoogleApi = async (url: string) => {
  let response = await axios.get(url);

  if (response.status !== 200) {
    throw new Error("取得できません");
  }

  if (!response.data.items) {
    throw new Error("情報が存在しません");
  }

  let title = response.data.items[0].volumeInfo.title;

  let authors = response.data.items[0].volumeInfo.authors;

  let data = { title: title, authors: authors };

  return data;
};

export default getGoogleApi;
