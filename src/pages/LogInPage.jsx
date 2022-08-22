import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { SiKakaotalk, SiNaver } from "react-icons/si";
import { ImGoogle2 } from "react-icons/im";
import styled from "styled-components";

function LogInPage() {
  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <STArrowBox>
          <BiArrowBack onClick={onClickBackButton} />
        </STArrowBox>
        <StTitleBox>
          안녕하세요!
          <br />
          SNS계정으로 로그인 해주세요
        </StTitleBox>
        <StIconBox>
          <div className="logo">
            <ImGoogle2 size="40px" />
          </div>
          <div className="logo">
            <SiKakaotalk size="40px" />
          </div>
          <div className="logo">
            <SiNaver size="40px" />
          </div>
        </StIconBox>
      </div>
    </>
  );
}

export default LogInPage;

const STArrowBox = styled.div`
  margin: 20px 0;
  padding: 5px;
`;

const StTitleBox = styled.div`
  padding: 5px;
  margin: 20px 0px;
`;

const StIconBox = styled.div`
  display: flex;
  justify-content: center;
  & .logo {
    margin: 15px;
    cursor: pointer;
  }
`;
