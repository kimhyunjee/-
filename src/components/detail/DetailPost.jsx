import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiEdit, FiTrash2 } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { BsHeart } from "react-icons/bs";


const DetailPost = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <div>
          <FiArrowLeft className="arrow"
            size={30}
            onClick={() => {
              navigate("/");
            }}
          />
          <FiEdit className="edit"
            size={30}
            onClick={() => {
              navigate("/post/:postId");
            }}
          />
        </div>
        <div>
          <FiTrash2 className="delete"
            size={30} />
        </div>
      </Header>
      <Body>
        <Image>
            사진
        </Image>
        <UserInfo>
          <div>
          <MdAccountCircle className="MdAccountCircle"
            size={50}
          />
          </div>
          <div>
            <div className="nickname"> 큐컴버 </div>
            <div className="location"> 성수동 </div>
          </div>
        </UserInfo>
        <hr />
        <ContentBox>
          <Title className="title"> 맥북 </Title>
          <Content className="content"> 새 상품 입니다. </Content>
        </ContentBox>
      </Body>
      <hr />
      <Bottom>
        <BsHeart 
          size={30}
        />
        <div className="price">30,000원</div>
        <StButton>채팅하기</StButton>
        
      </Bottom>
    </>
  );
};
export default DetailPost;

const Header = styled.div`
  height: 50px;
  background-color: #acd137;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Body = styled.div`
  
`;
const ContentBox = styled.div`
  background-color: white;
`

const UserInfo = styled.div`
  color: #959595;
  background-color: white;
  display: flex;
  align-items: center;

  & svg {
    margin-left: 10px;
    margin-top: 10px;
    cursor: pointer;
  }
`;

const Image = styled.div`
  background-color: #0077ff;
  height: 300px;
`;

const Bottom = styled.div`
  background-color: white;
  height: 60px;
  color: #959595;
  
  display: flex;
  justify-content: space-between;
  & svg {
    margin: auto;
    margin-left: 20px;
    cursor: pointer;
  }
  .price {
    margin: auto;
    margin-left: -60px;
    
  }
`;
const StButton = styled.button`
  width: 90px;
  height: 40px;
  border: 1px solid #acd137;
  cursor: pointer;
  color: white;
  font-size: medium;
  background-color: #acd137;
  border-radius: 10px;
  margin: auto;
  margin-right: 10px;
`;
const Title = styled.div`
  color: black;
`

const Content = styled.div`
  color: black;
`