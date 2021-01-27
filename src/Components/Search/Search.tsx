import React from "react";
import axios from "axios";

class Search extends React.Component {
  getData = async () => {
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

    const ID_KEY = "PBLIpouYn0jTczwJITLA";
    const SECRET_KEY = "SxTNaVSodJ";

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

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
          <h1>급상승검색어</h1>
      <div>테스트</div>  
      <div>
        <ul>
          <li>10대</li>
          <li>20대</li>
          <li>30대</li>
          <li>40대</li>
          <li>50대-</li>
          <li>전체</li>
        </ul>
      </div>
      </>
    );
  }
}
export default Search;
