import { useCallback } from "react";
import { Radio, Table } from "antd";
import { ID_KEY, SECRET_KEY } from "../constants";
import axios from "axios";
import { useEffect, useState } from "react";

const categoryOptions = [
  { label: "패션의류", value: "50000000" },
  { label: "패션잡화", value: "50000001" },
  { label: "화장품/미용", value: "50000002" },
  { label: "디지털/가전", value: "50000003" },
];

const ageOptions = [
  { label: "10∼19세", value: "10" },
  { label: "20∼29세", value: "20" },
  { label: "30~39세", value: "30" },
  { label: "40~49세", value: "40" },
  { label: "50~59세", value: "50" },
  { label: "60세 이상", value: "60" },
];

const columns = [
  {
    title: "기간",
    dataIndex: "period",
    render: (text: string) => text.slice(5, 7) + "월",
  },
  {
    title: "비율",
    dataIndex: "ratio",
    render: (text: string) => text + " %",
  },
];

const AgeTrend = () => {
  const [data, setData] = useState([] as any);
  const [category, setCategory] = useState("50000000");
  const [age, setAge] = useState("10");
  const now = new Date();
  const today =
    now.getFullYear() +
    "-" +
    ("0" + (now.getMonth() + 1)).slice(-2) +
    "-" +
    now.getDate();

  const getData = useCallback(async () => {
    const request_body = {
      startDate: "2021-01-01",
      endDate: today,
      timeUnit: "month",
      category: category,
      gender: "f",
      ages: [age],
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
      setData(res.data.results[0].data);
    } catch (error) {
      console.log(error);
    }
  }, [age, today, category]);

  const onChangeCategory = (e: any) => {
    setCategory(e.target.value);
  };

  const onChangeAge = (e: any) => {
    setAge(e.target.value);
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <h1>2021년 월별 트렌드</h1>
      <h3>카테고리</h3>
      <Radio.Group
        options={categoryOptions}
        defaultValue={category}
        onChange={onChangeCategory}
      />
      <h3>연령</h3>
      <Radio.Group
        options={ageOptions}
        defaultValue={age}
        onChange={onChangeAge}
      />
      <Table dataSource={data} columns={columns} />;
    </>
  );
};

export default AgeTrend;
