import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { BsFillCameraFill } from "react-icons/bs";

const EditPost = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <FiX 
            size={30}
            onClick={"/post/postId"}
        />
        <div>오이 거래 수정하기</div>
        <Complete
            onClick={"/post/postId"}
        >완료</Complete>
        <hr />
      </Header>

      <Picture>
        <Box>
            <BsFillCameraFill 
                size={30}
            />
        </Box>
      </Picture>
      <hr />

      <Body1>
        글 제목
      </Body1>
      <hr />
      <Body2>
        카테고리 선택
      </Body2>
      <hr />
      <Body3>
        지 역
      </Body3>
      <hr />
      <Body4> 
        가 격
     </Body4>
     <hr />
     <Content>
        게시글 내용을 작성해주세요.(가품 및 판매금지품목은 게시가 제한될 수 있어요.)
     </Content>
    </>
  );
};

export default EditPost;

const Body1 = styled.div`
    height: 60px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

`
const Body2 = styled.div`
    height: 60px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Body3 = styled.div`
    height: 60px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Body4 = styled.div`
    height: 60px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Content = styled.div`
    height: 200px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Header = styled.div`
  height: 50px;
  background-color: #acd137;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
    margin-left: 10px;
  }
`;
const Complete = styled.button`
    cursor: pointer;
    margin-right: -80px;
`
const Picture = styled.div`
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Box = styled.div`
    height: 100px;
    width: 100px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
        display: flex;
        justify-content: center;
        align-items: center;
       //vertical-align:middle;
       cursor: pointer;
    }
`
const UserInfo = styled.div`
  color: #959595;
  background-color: white;
  & svg {
    margin-left: 10px;
    margin-top: 10px;
    cursor: pointer;
  }
`;
