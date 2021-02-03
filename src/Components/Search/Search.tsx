import React, { useEffect, useState } from "react";
import { getData } from '../../Api/api';


const Search = () => {

  const initialState = []

  const [state, setState] = useState(initialState);

  useEffect(() => {
    //프로미스를 반환하므로 함수 형태로 준비를 시킨 후
    const bookFunc = async () => {
      let naverData = await getData.request_body();

      console.log(naverData);
    };
    //하단에서 실행시켜줍니다!
    bookFunc();
  }, []);

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
export default Search;
