import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function LogInPage() {
  const navigate = useNavigate();

  //뒤로가기버튼
  const onClickBackButton = () => {
    navigate("/");
  };

  //유효성검사
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(watch("email"));

  //이메일 값 가져오기
  const email = useRef();
  email.current = watch("email");
  // console.log(email.current);

  //비밀번호 값 가져오기
  const password = useRef();
  password.current = watch("password");
  // console.log(password.current);

  useEffect(() => {}, []);

  //로그인시도
  const onSubmit = async (data) => {
    axios.post("http://54.180.128.147/api/auth/logIn", data).then((res) => {
      console.log(res);
      if (res.status === 200) {
        navigate("/main", { replace: true });
      } else {
        alert("로그인에 실패하였습니다");
      }
    });
  };
  //userinfo에 이메일,비밀번호 양식 맞춰서 값 넣어주고 POST요청 끝나고 (then) result.status가 200일 때(result response값에 쿠키넣어줘야하는데 res없음)
  // 메인화면으로 넘겨주기

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
            로그인을 진행해주세요
          </em>
          <p>고객님의 정보는 안전하게 보관되며 이웃들에게 공개되지 않아요</p>
        </StTitleBox>
        <Form
          // action="나중에 서버url"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="emailbox">
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
          </div>

          <div className="emailbox">
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

          <ButtonBox>
            <input id="login" className="loginsubmit" type="submit"></input>
            <label id="loginlabel" htmlFor="login">
              로그인
            </label>
          </ButtonBox>
        </Form>
      </div>
    </>
  );
}

export default LogInPage;

const STArrowBox = styled.div`
  /* background-color: coral; */
  box-sizing: border-box;
  padding: 10px 5px;
`;

const StTitleBox = styled.div`
  padding: 5px;

  em {
    font-style: normal; //이탤릭체죽이기
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
  margin: 20px 0px;

  //인풋박스들 통합스타일
  & input {
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 30px;
    /* width: 300px; */
    width: 320px;
    padding: 0 10px;
    margin: 20px 10px;
  }
  & .emailbox {
    position: relative;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 10px;
  position: absolute;
  top: 55px;
  left: 10px;
`;

const ButtonBox = styled.div`
  width: 100%;
  transform: translateY(60px);
  text-align: center;
  display: flex;
  justify-content: center;

  //실제회원가입버튼 안보이게 처리
  & .loginsubmit {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
    display: none;
  }
  //회원가입버튼과 원격연결된 버튼처럼 만든 라벨
  & #loginlabel {
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
