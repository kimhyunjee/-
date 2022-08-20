import React from "react";
import styled from "styled-components";

import { useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiEdit, FiTrash2 } from "react-icons/fi";

const Detail = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <FiArrowLeft
          size={30}
          onClick={() => {
            navigate("/");
          }}
        />
        <FiEdit
          size={30}
          onClick={() => {
            navigate("/edit/:editId");
          }}
        />
        <FiTrash2 size={30} />

        {/* 이미지 */}
      </Header>
      {/* <Body>
            <icon>프로필사진</icon>
            <h3>큐컴버</h3>
            <div>위치</div>
            <hr />
            <div>username</div>
            <div>새상품입니다</div>
        </Body>
        <Bottom>
            <div>하트</div>
            <div>가격</div>
            <button>채팅하기</button>
        </Bottom> */}
    </>
  );
};
export default Detail;
const Header = styled.div`
  height: 100px;
  background-color: #acd137;
  color: white;
`;
