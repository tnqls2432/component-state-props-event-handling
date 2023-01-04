import React from "react";
import { Component } from "react";

class Counter extends Component {
  // 클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해야 한다.
  //   constructor(props) {
  //     super(props);
  //     // state의 초깃값 설정하기
  //     this.state = {
  //       number: 0,
  //       fixedNumber: 0,
  //     };
  //   }

  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; // state를 조회할때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onclick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다.
          onClick={(props) => {
            //this. setState를 사용하여 state에 새로운 값을 넣을 수 있다.
            // this.setState({ number: number + 1 });
            // this.setState({ number: this.state.number + 1 });
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            // 위 코드와 아래 코드는 완전히 똑같은 기능을 한다.
            // 아래 코드는 함수에서 바로 객체를 반환한다는 의미다.
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default Counter;
