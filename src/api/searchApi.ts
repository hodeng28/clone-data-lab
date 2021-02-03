import { ID_KEY, SECRET_KEY } from './../constants';
import axios from "axios";
export const getData = async () => {
    const request_body = {
      startDate: "2017-01-01",
      endDate: "2017-04-30",
      timeUnit: "month",
      keywordGroups: [
        {
          groupName: "한글",
          keywords: ["한글", "korean"],
        },
        {
          groupName: "영어",
          keywords: ["영어", "english"],
        },
      ],
      device: "pc",
      gender: "f",
    };

    try {
      const data = await axios({
        method: "post",
        url: "/v1/datalab/search",
        data: request_body,
        headers: {
          "X-Naver-Client-Id": ID_KEY,
          "X-Naver-Client-Secret": SECRET_KEY,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };