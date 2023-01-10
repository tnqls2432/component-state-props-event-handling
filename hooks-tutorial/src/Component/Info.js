import React, { useState, useEffect } from "react";

const Info = () => {
  // let counter = 0;
  // const [counter2, setCounter2] = useState(0);
  // const increase = () => {
  //   counter = counter + 1;
  //   setCounter2(counter2 + 1);
  // };
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    // console.log("마운트될 때만 실행됩니다");
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
    // console.log({
    //   name,
    //   nickname,
    // });
  }, [name]); // useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만
  // 실행하고, 업데이트 될때는 실행하지 않으려면 함수의 두번째 파라미터로 비어있는 배열을 넣어준다.

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <b>이름:</b>
        {name}
      </div>
      <div>
        <b>닉네임:</b>
        {nickname}
      </div>
      {/* <div>{counter2}</div>
      <div>state:{setCounter2}</div>
      <button onClick={increase}>클릭</button> */}
    </div>
  );
};

export default Info;
