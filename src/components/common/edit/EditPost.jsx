import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FiX, FiCheck } from "react-icons/fi";
import { BsFillCameraFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [posts, setPosts] = useState([]);
  const [editTodo, setEditTodo] = useState({
    postId: "",
    title: "",
    content: "",
    location: "",
    price: "",
  })
  
  console.log(editTodo)
  console.log(postId)

  const payload = {userId: 1} 

    async function putData() {
      try {
          const res = await axios.put(`http://54.180.128.147/api/post/${postId}`, {
            title: "",
            imageUrl: URL,
            price: 1000,
            content: "EDIT",
          });
          navigate (`/post/${postId}`)
          console.log(res)
      } catch (err) {
          console.log(err);
      }
  }

  const fetchPosts = async () => {
    const res = await axios.get(`http://54.180.128.147/api/post/${postId}`);
    console.log(res.data)
    setPosts(res.data);
  }

  useEffect(() => {
    fetchPosts()
  }, []);

  return (
    <>
      <Header>
        <div>
          <FiX 
            size={30}
            onClick={()=>{
              navigate("/main")
            }}
          />
        </div>
        <div>오이 거래 수정하기</div>
        <div>
          <FiCheck
            size={30}
            onClick={()=>{putData(payload, EditPost)}
          }
          > 완료 </FiCheck>
        </div>
        <hr />
      </Header>
      <Picture>
        <Box>
          <BsFillCameraFill
            size={30}
          />
        </Box>
      </Picture>
      <input 
          type="file"
          name="image"
        />
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
        placeholder= {posts.title} 
      >
      </Body1>
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
  }
`;
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
       cursor: pointer;
    }
`;

