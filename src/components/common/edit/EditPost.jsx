import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { BsFillCameraFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// 1. 수정하고자 하는 Todo의 id
// 2. 수정하고자 하는 값

const EditPost = () => {
  const navigate = useNavigate();
  const { postId } = useParams() 
  //const [targetId, setTargetId] = useState(null);
  const [editTodo, setEditTodo] = useState({
    postId: "",
    title: "",
    content: "",
    location: "",
    price: "",
  })
  
  console.log(editTodo)
  console.log(postId)
  // const token = localStorage.getItem("token"); //login 생성
  // const payload = decodeToken(token);

  const payload = {userId: 1} //지우기

  const onClickEditBtnHandler = async (edit) => {
    const data = await axios.put(`http://54.180.128.147/api/post/${postId}`, edit);
    navigate (`/post/${postId}`)
    console.log(data)
  };
///////////get////////////
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get(`http://54.180.128.147/api/post/${postId}`);
    console.log(res.data)
    setPosts(res.data);
  }
  console.log(posts)

  useEffect(() => {
    fetchPosts()
  }, []);
/////////////////////////
  return (
    <>
      <Header>
        <FiX 
          size={30}
          onClick={`post/${postId}`}
        />
        <div>오이 거래 수정하기</div>
        <Complete
          onClick={() => onClickEditBtnHandler(payload, EditPost)}
        > 완료 </Complete>
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
      <Body1
        type="text"
        name="title"
        onChange={(ev)=>{
          setEditTodo({
            ...editTodo,
            title: ev.target.value,
          })
        }}
        placeholder={posts.title}
      >
      </Body1>
      {/* <Body2>
        내용
        <input
          type="text"
          name="content"
          onChange={(ev)=>{
            setTargetId(ev.target.value)
          }}
          ></input>
      </Body2>
      <hr /> */}
      <Body3
        type="text"
        name="location"
        onChange={(ev)=>{
          setEditTodo({
            ...editTodo,
            location: ev.target.value,
          })
        }}
        placeholder={posts.location}
      >
      </Body3>
      <Body4
        type="number"
        name="price"
        onChange={(ev)=>{
          setEditTodo({
            ...editTodo,
            price: ev.target.value,
          })
        }}
        placeholder={posts.number}
        > 
     </Body4>
     <Content
        type="text"
        name="content"
        onChange={(ev)=>{
          setEditTodo({
            ...editTodo,
            content: ev.target.value,
          })
        }}
        placeholder={posts.content}>
      </Content>
      <hr />
    </>
  );
};

export default EditPost;

const Body1 = styled.input`
    /* height: 60px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center; */
  padding: 15px;
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 10px;
  margin-top: 10px;
	width: 100%;
	box-sizing: border-box;
	font-family: montserrat;
	color: #2C3E50;
	font-size: 13px;
`
const Body2 = styled.input`
    height: 60px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Body3 = styled.input`
    /* height: 60px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center; */

  padding: 15px;
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 10px;
	width: 100%;
	box-sizing: border-box;
	font-family: montserrat;
	color: #2C3E50;
	font-size: 13px;
`
const Body4 = styled.input`
    padding: 15px;
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 10px;
	width: 100%;
	box-sizing: border-box;
	font-family: montserrat;
	color: #2C3E50;
	font-size: 13px;
`
const Content = styled.textarea`
    /* height: 200px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center; */
    padding: 15px;
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 10px;
  height: 200px;
	width: 100%;
	box-sizing: border-box;
	font-family: montserrat;
	color: #2C3E50;
	font-size: 13px;
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
