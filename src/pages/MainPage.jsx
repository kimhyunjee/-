import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BiUser, BiCurrentLocation, BiBell, BiSearch} from "react-icons/bi";


const MainPage= () => {  
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]); 

  const getPosts = async () => {
    const response = await axios.get("http://54.180.128.147/api/post"); 
    setPosts(response.data.post); // 콘솔에 찍힌 값으로 setPost를 이용해 post를 state를 변경 2
    //console.log(post) // state 변경 후 post 값이 잘 들어갔는지 확인 3
    //console.log(response.data) // 1
    console.log(response.data.post)
    console.log(response)
  }
  console.log(posts)
  //console.log(posts.location)

  console.log(posts)

  useEffect(() => {
    getPosts() 
  }, []);

  return (
    <>
      <StMaincontainer>
        <StHeadercontainer>
          {/* <BiCurrentLocation 
            size={23}/> */}
          <UserLocation>{posts.location}</UserLocation>
          
          <div className="searchbox">
            <BiSearch 
              size={28}/>
          </div>
          <div className="alarm">
            <BiBell 
              size={28}/>
          </div>
        </StHeadercontainer>
        <StBodycontainer>
          <hr />
            {posts.map((post)=>{  //response가 담기게 된 새로운 state인 post에 map을 돌린다.
              return (
                <div key={post.postId}>
                  <Content
                    onClick={()=>{
                      navigate(`/post/${post.postId}`)
                    }}>
                  <div>
                  <Img></Img>
                  </div>
                  <div>
                  <Title>{post.title}</Title>
                  <Location>{post.location}</Location>
                  <Price>{post.price}</Price>
                  <Like>{post.like}</Like>
                  </div>
                  </Content>
                  <hr />
                </div>
              )
            })}
          <button className="buttonbox">
            <BsFillPlusCircleFill 
              onClick={()=>{
                navigate(`/post`)
              }}
            />
          </button>
        </StBodycontainer>
        <StFootercontainer>
          <div className="bottomMenubar">
            <div className="bottomMenuBox">
              <AiFillHome
                size="28px"
                cursor={"pointer"}
                navigate={'/'}
              />
              <p>홈</p>
            </div>
            <div className="bottomMenuBox">
              <BiUser
                size="28px"
                cursor={"pointer"}
                navigate={'/'}
              />
              <p className="godetail"> 나의 오이</p>
            </div>
          </div>
        </StFootercontainer>
      </StMaincontainer>
    </>
  );
}

export default MainPage;

const Content = styled.div`
  cursor: pointer;
  padding: 5px;
`
const Img = styled.div`
  
`
const Title = styled.div`
  
`
const UserLocation = styled.div`
  align-items: center; 
  justify-content: center;
  display: flex;
  //flex-direction: column;
  flex-direction: row;
  //width: 200px;
`
const Location = styled.div`
  
`
const Price = styled.div`
  
`
const Like = styled.div`
  
`
const gohome = styled.div`
  cursor: pointer;
`
const godetail = styled.div`
  cursor: pointer;
`
const StMaincontainer = styled.div``;

const StHeadercontainer = styled.div`
  background-color: #acd137;
  height: 50px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
      
  & .userlocation {
    text-align: center;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    margin-left: -100px;
    cursor: pointer;
  }

  & .searchbox {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 240px;
    cursor: pointer;
  }

  .alarm {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
  }
  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  /* & input {
    padding-left: 30px;
    border-radius: 5px;
    border: 1px solid #777;
  } */
`;

const StBodycontainer = styled.div`
  flex: 1;
  background-color: white;
  height: 70vh;
  //margin: 20px;
  overflow-y: scroll;

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
    cursor: pointer;
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
  background-color: #acd137;
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
