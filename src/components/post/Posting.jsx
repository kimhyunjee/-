import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useRef } from "react";

import { FiX } from "react-icons/fi";
import { BsFillCameraFill } from "react-icons/bs";
import { ref } from "yup";

const Posting = () => {
  const navigate = useNavigate();
  
 //const [selectedFile, setSelectedFile] = useState(null); 

 const file = useRef(null);
 const title_Ref = useRef();
 const location_Ref = useRef();
 const price_Ref = useRef();
  
  const formData = new FormData();  //선택한 file=formData

  const onChangeInputHandler = (e) => {
    formData.append('image', file.current.files[0]);
    formData.append('title', title_Ref.current.value);
    formData.append('location', location_Ref.current.value);
    formData.append('price', price_Ref.current.value);

  for (let key of formData.keys()) {
    console.log(key, ':', formData.get(key));
    }

    console.log(e.target.files[0])
  };
    //console.log(formData)
  const onSubmitHandler = async (post) => {
    try {
      const response = await axios.post("http://54.180.128.147/api/post", formData);
        console.log(response)
        return navigate('/main')
    } catch (error) {
      console.log(error)
    }
    alert('게시글이 작성되었습니다!')
    console.log(formData)
    console.log(file.current.files[0])
    console.log(price_Ref.current.value)
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
              name="image"
            >완료</Complete>          
          <hr />
        </Header>
       {/* </form> */}
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
          ref={file}
        />
      <hr />
        <Body1
          type="text"
          name="title"
          ref={title_Ref}
          // onChange={(ev) => {
          //   const { value } = ev.target;
          //   setPosts({
          //     ...posts,
          //     title: value,
          //   });
          // }}
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
       ref={location_Ref}
      //  onChange={(ev)=> {
      //    const { value } = ev.target;
      //    setPosts({
      //      ...posts,
      //      location: value,
      //    });
      //  }}
       placeholder="지역"
       >
      </Body3>
      {/* <hr /> */}
      <Body4
        type="number"
        name="price"
        ref={price_Ref}
        // onChange={(ev) => {
        //   const { value } = ev.target;
        //   // setPosts({
        //   //   ...posts,
        //   //   price: value,
        //   ref={price_Ref}
        //   // });
        // }}
        placeholder="가격"
        >
     </Body4>
     {/* <hr /> */}
     <Content
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
