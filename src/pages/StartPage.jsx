import styled from "styled-components";
import logo from "../image/image_cucumber.png";

function StartPage() {
  return (
    <>
      <Logobox>
        <h1>
          <img src={logo} alt="오이마켓 로고" />
        </h1>
        <h2>당신 근처의 오이마켓</h2>
        <p>
          중고 거래부터 동네 정보까지,
          <br />
          지금 내 동네를 선택하고 시작해보세요!
        </p>
      </Logobox>
      <Buttonbox>
        <button>시작하기</button>
      </Buttonbox>
    </>
  );
}

export default StartPage;

const Logobox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .p {
    text-align: center;
    margin-top: 20px;
  }
`;

const Buttonbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
