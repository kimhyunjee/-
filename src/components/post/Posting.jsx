import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { FiX } from "react-icons/fi";
import { BsFillCameraFill } from "react-icons/bs";

const Posting = () => {
  const navigate = useNavigate();
  
 //const [selectedFile, setSelectedFile] = useState(null); 
  const [posts, setPosts] = useState({ //새롭게 생성하는 post를 관리하는 state
    file:"",
    title: "",
    location : "",
    price: ""
  });
  const formData = new FormData();  //선택한 file=formData

  const onChangeInputHandler = (e) => {
  formData.append('image', e.target.files[0]);
  formData.append('title', posts.title);
  formData.append('location', posts.location);
  formData.append('price', posts.price);

  for (let key of formData.keys()) {
    console.log(key, ':', formData.get(key));
    }

    console.log(e.target.files[0])
  };
    //console.log(formData)
  const onSubmitHandler = async (post) => {
    try {
      const response = await axios.post("http://54.180.128.147/api/post/${postId}", formData);
        console.log(response)
        return navigate('/main')
    } catch (error) {
      console.log(error)
    }
    alert('게시글이 작성되었습니다!')
  };

//   const handleImg = (e) => {
//     e. preventDefault();

//     if (e.target.files) {
//         const uploadfile = e.target.files[0]
//         setImage( uploadFile )

//     }
// }

  // const onClickBtnHandler = (postId, edit) => {
  //   axios.patch(`http://localhost:3001/post/${postId}`, edit)
  // };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault(); //submit했을때 브라우저 새로고침 방지
          onSubmitHandler(posts);
        }}
      >
        <Header>
          <div>
            <FiX 
                size={30}
                onClick={()=>{
                  navigate("/main")
                }}
            />
          </div>
          <div className="headertitle">중고거래 글쓰기</div>          
            <Complete
              name="image"
              encType="multipart/form-data"
              onClick={()=>{
                navigate("/main")
              }}
            >완료</Complete>          
          <hr />
        </Header>
      </form>
      <div>
      </div>
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
          onChange={(e)=>onChangeInputHandler(e)}
        />
      <hr />
        <Body1
          type="text"
          name="title"
          onChange={(ev) => {
            const { value } = ev.target;
            setPosts({
              ...posts,
              title: value,
            });
          }}
          placeholder="제목"
        >
      </Body1>
      {/* <hr /> */}
        {/* <Body2
          type="text"
          name="content"
          onChange={(ev)=> {
            const { value } = ev.target;
            setPosts({
              ...posts,
              content: value,
            });
          }}
          placeholder="내용"
          >
        </Body2> */}
      {/* <hr /> */}
      <Body3
       type="text"
       name="location"
       onChange={(ev)=> {
         const { value } = ev.target;
         setPosts({
           ...posts,
           location: value,
         });
       }}
       placeholder="지역"
       >
      </Body3>
      {/* <hr /> */}
      <Body4
        type="number"
        name="price"
        onChange={(ev) => {
          const { value } = ev.target;
          setPosts({
            ...posts,
            price: value,
          });
        }}
        placeholder="가격"
        >
     </Body4>
     {/* <hr /> */}
     <Content
      placeholder="게시글 내용을 작성해주세요. (가품 및 판매금지품목은 게시가 제한될 수 있어요.)">        
     </Content>
    </>
  );
};

export default Posting;

const Header = styled.div`
  height: 50px;
  background-color: #acd137;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .headertitle {
    margin-left: 90px;

  }          

  svg { 
    cursor: pointer;
    margin-left: 15px;
  }
`;

const Complete = styled.button`
    cursor: pointer;
    //margin-right: -80px;
    width: 50px;
    background: #acd137;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 1px;
    cursor: pointer;
    margin-left: 80px;
`

const Body1 = styled.input`
  padding: 15px;
	border: 1px solid #ccc;
	border-radius: 3px;
	margin-bottom: 10px;
	width: 100%;
	box-sizing: border-box;
	font-family: montserrat;
	color: #2C3E50;
	font-size: 13px;
  margin-bottom: 10px;
  margin-top: 10px;
`
const Body2 = styled.input`
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
const Body3 = styled.input`
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


const Picture = styled.div`
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
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
