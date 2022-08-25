import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";

function RegisterPage() {
  const navigate = useNavigate();

  //뒤로가기버튼
  const onClickBackButton = () => {
    navigate("/");
  };

  //파일 미선택시 미리보기이미지
  const [previewImg, setPreviewImg] = useState(
    "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"
  );
  // const [ profile setProfile] = useState("https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png");
  const [profile, setProfile] = useState("");

  //유효성검사
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //이메일 값 가져오기
  const email = useRef();
  email.current = watch("email");

  //비밀번호 값 가져오기
  const password = useRef();
  password.current = watch("password");

  //닉네임 값 가져오기
  const nickname = useRef();
  nickname.current = watch("nickname");

  // //프로필사진 가져오기
  // const profileImgUrl = useRef();
  // profileImgUrl.current = watch("profileImgUrl");
  // console.log(profileImgUrl.current);

  const fileInput = useRef(null);

  //프로필 사진 업로드
  const OnChangeFile = async (e) => {
    e.preventDefault();
    //프로필 사진 firebase에 업로드
    // console.log(e.target.files);
    // const uploadfile = await uploadBytes(
    //   ref(storage, `images/${e.target.files[0].name}`),
    //   e.target.file
    // );
    // console.log(uploadfile); //ref 가져옴

    //file url 받아오기
    // const file_url = await getDownloadURL(uploadfile.ref);
    // console.log(file_url);
    // file_link.current = { url: file_url }; // 가져온 ref firebase에 저장
    // setProfile(file_url);
    // console.log(profile);

    //프로필 사진 미리보기
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
  };
  // console.log(previewImg);

  //회원가입시도
  const onSubmit = async () => {
    // console.log(
    //   email.current,
    //   nickname.current,
    //   password.current,
    //   fileInput.current.files[0]
    // );
    const formData = new FormData();
    formData.append("email", email.current);
    formData.append("nickName", nickname.current);
    formData.append("password", password.current);
    formData.append("img", fileInput.current.files[0]);
    console.log(formData);

    axios
      .post("http://54.180.128.147/api/auth/signUp", formData)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/login", { replace: true });
        } else {
          alert("입력정보를 다시 확인해주세요");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <STArrowBox>
          <BiArrowBack onClick={onClickBackButton} />
        </STArrowBox>
        <StTitleBox>
          <em>
            안녕하세요!
            <br />
            이메일 주소로 가입해주세요
          </em>
          <p>이메일 주소는 안전하게 보관되며 이웃들에게 공개되지 않아요</p>
        </StTitleBox>
        <Form
          // action="나중에 서버url"
          onSubmit={handleSubmit(onSubmit)}
          id="formImage"
          action="/post"
          method="post"
          encType="multipart/form-data"
        >
          <div className="wrap">
            <PostImgBox postImg={previewImg} />
            <input
              id="img"
              name="img"
              type="file"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              onChange={OnChangeFile}
              ref={fileInput}
              // src: ""; //나중에 여기에 백엔드에서(s3) 보내주는 이미지 주소 넣으면됨
            />
            <label id="imglabel" htmlFor="img">
              파일 선택
            </label>
          </div>
        </Form>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputbox">
            <input
              className="check"
              id="email"
              type="text"
              placeholder="이메일을 입력해주세요"
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
            />
            <ErrorMessage>
              {errors.email && errors.email.type === "required" && (
                <p>빈칸을 입력해주세요</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p>이메일 형식을 지켜주세요</p>
              )}
            </ErrorMessage>

            <button>이메일 중복확인</button>
          </div>
          <div className="inputbox">
            <input
              className="check"
              id="nickName"
              type="text"
              placeholder="닉네임을 입력해주세요"
              {...register("nickname", {
                required: true,
                minLength: 2,
                maxLength: 8,
              })}
            />
            <ErrorMessage>
              {errors.nickname && errors.nickname.type === "required" && (
                <p>빈칸을 입력해주세요</p>
              )}
              {errors.nickname && errors.nickname.type === "minLength" && (
                <p>2-8자 사이로 적어주세요</p>
              )}
              {errors.nickname && errors.nickname.type === "maxLength" && (
                <p>2-8자 사이로 적어주세요</p>
              )}
            </ErrorMessage>
            <button>닉네임 중복확인</button>
          </div>
          <div className="inputbox">
            <input
              className="nonecheck"
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              ref={password}
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 13,
                pattern:
                  /^.*(?=^.{8,13}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
              })}
            />
            <ErrorMessage>
              {errors.password && errors.password.type === "required" && (
                <p>빈칸을 입력해주세요</p>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <p>8-13글자사이,영문,숫자,특수문자를 섞어주세요</p>
              )}
            </ErrorMessage>
          </div>
          <div className="inputbox">
            <input
              className="nonecheck"
              type="password"
              placeholder="비밀번호를 확인해주세요"
              {...register("confirmpassword", {
                required: true,
                validate: (value) => value === password.current,
              })}
            />
            <ErrorMessage>
              {errors.cconfirmpassword &&
                errors.confirmpassword.type === "required" && (
                  <p>빈칸을 입력해주세요</p>
                )}
              {errors.confirmpassword &&
                errors.confirmpassword.type === "validate" && (
                  <p>비밀번호가 일치하지 않습니다</p>
                )}
            </ErrorMessage>
          </div>
          <ButtonBox>
            <input id="signup" className="signupsubmit" type="submit"></input>
            <label id="signuplabel" htmlFor="signup">
              회원가입
            </label>
          </ButtonBox>
        </Form>
      </div>
    </>
  );
}

export default RegisterPage;

const STArrowBox = styled.div`
  /* background-color: coral; */
  box-sizing: border-box;
  padding: 10px 5px;
`;

const StTitleBox = styled.div`
  padding: 5px;

  em {
    font-style: normal;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.4;
  }
  p {
    font-size: 12px;
    margin-top: 20px;
  }
`;

const Form = styled.form`
  /* background-color: coral; */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: flex;
  /* width: 100%; */

  // 이미지랑 버튼 묶은거
  & .wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  //안보이게 처리한 실제 이미지받는곳
  & #img {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
    display: none;
  }

  //파일선택버튼
  & #imglabel {
    background-color: #acd137;
    color: #fff;
    font-size: 14px;
    text-align: center;
    border-radius: 5px;

    cursor: pointer;

    height: 30px;
    width: 90px;
    padding: 6px 10px;
    margin-right: 10px;

    align-self: flex-end;
  }

  //중복확인 필요한 인풋
  & .check {
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 30px;
    padding: 0 10px;
    margin: 10px;
  }
  //중복확인버튼
  & button {
    background-color: #acd137;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    border: none;
    height: 30px;

    cursor: pointer;

    padding: 0 10px;
    margin: 10px;
  }
  //중복확인 안하는 인풋
  & .nonecheck {
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 30px;
    /* width: 300px; */
    width: 320px;
    padding: 0 10px;
    margin: 10px;
  }
  & .inputbox {
    position: relative;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 10px;
  position: absolute;
  top: 45px;
  left: 10px;
`;

const ButtonBox = styled.div`
  width: 100%;
  transform: translateY(20px);
  text-align: center;
  display: flex;
  justify-content: center;

  //실제회원가입버튼 안보이게 처리
  & .signupsubmit {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
    display: none;
  }
  //회원가입버튼과 원격연결된 보여지는 라벨
  & #signuplabel {
    display: block;
    background-color: #acd137;
    color: #fff;
    border: none;
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;
    width: 80%;
    padding: 10px;
    margin: 10px;
  }
`;

//이미지감싼박스
const PostImgBox = styled.div`
  height: 200px;
  width: 200px;
  /* margin-bottom: 10px; */
  border-radius: 50%;
  background-image: url(${(props) => props.postImg});
  /* background-image: url("../image/image_cucumber.png"); */
  /* background-image: url("https://www.daangn.com/logo.png"); */
  background-size: cover;
  //div박스가 300*300일때, 이미지가 100*300짜리라면? 꽉 차지 않음 -> 꽉 차게 비율맞춰 늘어난다.
  //but, 어느 곳이 잘릴 수 있음 / div박스크기에 이미지 사이즈 맞춤
  background-repeat: no-repeat;
  //부모가 1000*1000이고 이미지가 200*200일 때 => 부모 크기가 꽉찰때까지 반복해서나옴
  background-position: center center;
  //norepeat을 썼을 때, 11시방향에 붙어버리는 것 방지/ 이미지 위치 재조정
  align-self: center;
`;
