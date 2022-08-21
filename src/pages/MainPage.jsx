import styled from "styled-components";

import { IoIosSearch } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

function MainPage() {
  return (
    <>
      <StMaincontainer>
        <StHeadercontainer>
          <div className="userlocation">서울</div>
          <div className="searchbox">
            <input />
            <button>
              <IoIosSearch />
              게시물 찾기
            </button>
          </div>
        </StHeadercontainer>
        <hr></hr>
        <StBodycontainer>
          <hr />
          <Content>
            <Img>img</Img>
            <Title>자급제 화이트 미개봉</Title>
            <Location>군자동</Location>
            <Price>75,000원</Price>
            <Like>Like : 7</Like>
            <hr />
          </Content>
          
          {/* <StListUl>
            {.map돌리는 부분}
          </StListUl> */}
          <button className="buttonbox">
            <BsFillPlusCircleFill />
          </button>
        </StBodycontainer>
        <StFootercontainer>
          <div className="bottomMenubar">
            <div className="bottomMenuBox">
              <AiFillHome size="30px" />
              <p>홈</p>
            </div>
            <div className="bottomMenuBox">
              <BiUser size="30px" />
              <p> 나의 오이</p>
            </div>
          </div>
        </StFootercontainer>
      </StMaincontainer>
    </>
  );
}

export default MainPage;

const Content = styled.div`
  
`
const Img = styled.div`
  
`
const Title = styled.div`
  
`
const Location = styled.div`
  
`
const Price = styled.div`
  
`
const Like = styled.div`
  
`
const StMaincontainer = styled.div``;

const StHeadercontainer = styled.div`
  background-color: bisque;

  height: 50px;
  margin: 20px 0;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;

  & .userlocation {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  & .searchbox {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* & input {
    padding-left: 30px;
    border-radius: 5px;
    border: 1px solid #777;
  } */
`;

const StBodycontainer = styled.div`
  flex: 1;
  background-color: aqua;
  height: 70vh;
  margin: 20px;

  .buttonbox {
    display: flex;
    position: fixed;
    bottom: 120px;
    right: 200px;
    width: 30px;
    height: 30px;
    font-size: 30px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 6px 0 #999;
    color: #acd137;
    border-width: 0;
  }
`;

// const StListUl = styled.ul`
//   list-style: none;
//   display: flex;
//   width: 100%;

//   @media screen and (max-width: 1017px) {
//     justify-content: space-evenly;
//   }
// `;

const StFootercontainer = styled.div`
  background-color: bisque;
  height: 60px;
  /* position: fixed; */
  /* display: flex; */
  /* justify-content: flex-end; */

  & .bottomMenubar {
    display: flex;
    justify-content: space-around;
    height: 10vh;

    & .bottomMenuBox {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;
