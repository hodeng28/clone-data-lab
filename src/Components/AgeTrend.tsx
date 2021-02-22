import { useCallback } from "react";
import { Radio } from "antd";
import { ID_KEY, SECRET_KEY } from "../constants";
import axios from "axios";
import { useEffect, useState } from "react";

const options = [
  { label: "10∼19세", value: "10" },
  { label: "20∼29세", value: "20" },
  { label: "30~39세", value: "30" },
  { label: "40~49세", value: "40" },
  { label: "50~59세", value: "50" },
  { label: "60세 이상", value: "60" },
];

const AgeTrend = (props: any) => {
  const [data, setData] = useState([] as any);
  const [ages, setAges] = useState("10");

  const getData = useCallback(async () => {
    const request_body = {
      startDate: "2017-08-01",
      endDate: "2017-09-30",
      timeUnit: "month",
      category: "50000000",
      gender: "f",
      ages: [ages],
    };

    try {
      const res = await axios({
        method: "post",
        url: "/v1/datalab/shopping/category/age",
        data: request_body,
        headers: {
          "X-Naver-Client-Id": ID_KEY,
          "X-Naver-Client-Secret": SECRET_KEY,
        },
      });
      console.log(res);
      setData(res);
    } catch (error) {
      console.log(error);
    }
  }, [ages]);

  const onChange = (values: any) => {
    console.log("radio3 checked", values, data);
    setAges(values);
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <h1>2021년 연령별 트렌드</h1>
      <Radio.Group options={options} defaultValue={ages} onChange={onChange} />
    </>
  );
};

export default AgeTrend;
