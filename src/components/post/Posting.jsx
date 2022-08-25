import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";

import { FiX } from "react-icons/fi";
import { BsFillCameraFill } from "react-icons/bs";

const Posting = () => {
  const navigate = useNavigate();
  
  const file = useRef(null);
  const title_Ref = useRef();
  const content_Ref = useRef();
  const price_Ref = useRef();

  const onSubmitHandler = async () => {
    const formData = new FormData();  
    formData.append('image', file.current.files[0]);
    formData.append('title', title_Ref.current.value);
    formData.append('content', content_Ref.current.value);
    formData.append('price', price_Ref.current.value);
    console.log(formData)
    try {
      const response = await axios.post("http://54.180.128.147/api/post", formData );
        console.log(response)
        return navigate('/main')
    } catch (error) {
      console.log(error)
    }
    alert('게시글이 작성되었습니다!')
    
  };

  return (
    <>
      <form
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault(); //submit했을때 브라우저 새로고침 방지
          onSubmitHandler();
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
              onClick={()=>{
                navigate('/main')
              }}
            >완료</Complete>
          <hr />
        </Header>
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
          ref={file}
        />
      <hr />
        <Body1
          type="text"
          name="title"
          ref={title_Ref}
          placeholder="제목"
        >
      </Body1>
      <Body4
        type="number"
        name="price"
        ref={price_Ref}
        placeholder="가격"
        >
     </Body4>
     <Content
      type="text"
      name="content"
      ref={content_Ref}
      placeholder="게시글 내용을 작성해주세요. (가품 및 판매금지품목은 게시가 제한될 수 있어요.)">        
     </Content>
     </form>
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

