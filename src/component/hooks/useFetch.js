import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url) // day만 필요하니 ?를 사용해 부분으로 가져온다.
      .then((res) => {
        //res는 http 응답이고 실제 json은 아니다.
        return res.json(); //이렇게 하면 json으로 변환되고 promise를 반환한다.
      })
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return data;
}
