import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Formik } from "formik";

function RegisterPage() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setnickname] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
    nickname: "",
  });

  const [userIdError, setUserIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [nicknameError, setnicknameError] = useState(false);
  const [checkEmail, setCheckEmail] = useState({ email: "" });
  const [checknickname, setChecknickname] = useState({ nickname: "" });
  const [dupEmail, setDupEmail] = useState(false);
  const [dupnickname, setDupnickname] = useState(false);

  //파일 미선택시 미리보기이미지
  const [previewImg, setPreviewImg] = useState(
    "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"
  );

  //뒤로가기버튼
  const onClickBackButton = () => {
    navigate("/");
  };

  //프로필 사진 받아오기
  const OnChangeFile = async (e) => {
    e.preventDefault();
    let reader = new FileReader();

    let file = e.target.files[0];
    reader.onloadend = () => {
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
  };
  //유저아이디(이메일아이디) 받는곳 체크
  const onChangeUseId = (e) => {
    const userIdRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,13}$/;

    if (!e.target.value || userIdRegex.test(e.target.value))
      setUserIdError(false);
    else setUserIdError(true);
    setUserId(e.target.value);
    setData({ ...data, email: e.target.value });
    setCheckEmail({ email: e.target.value });
  };

  //비밀번호 유효성
  const onChangePassword = (e) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,13}$/;
    if (!e.target.value || passwordRegex.test(e.target.value))
      setPasswordError(false);
    else setPasswordError(true);

    if (!confirmPassword || e.target.value === confirmPassword)
      setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setPassword(e.target.value);
    setData({ ...data, password: e.target.value });
  };
  //비밀번호 확인 체크
  const onChangeConfirmPassword = (e) => {
    if (password === e.target.value) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setConfirmPassword(e.target.value);
    // setData({ ...data, confirmPassword: e.target.value });
  };

  //닉네임 유효성체크
  const onChangenickname = (e) => {
    const nicknameRegex = /^[a-zA-Zㄱ-힣0-9-_.]{2,12}$/;
    if (!e.target.value || nicknameRegex.test(e.target.value))
      setnicknameError(false);
    else setnicknameError(true);
    setnickname(e.target.value);
    setData({ ...data, nickname: e.target.value });
    setChecknickname({ nickname: e.target.value });
  };
  //이메일 유효성 체크
  const onCheckEmail = async () => {
    if (userIdError) {
      alert("이메일 형식인지 확인해주세요");
      return;
    }
    const res = await axios
      .post("http:/local/3000/api/user/dup/email", checkEmail)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("사용가능한 이메일입니다");
          setDupEmail(true);
        }
      })
      .catch((res) => {
        if (res.response.status === 409) {
          alert("이미 가입된 이메일입니다");
        }
      });
  };
  //이메일 중복확인란
  const onChecknickname = async () => {
    if (nicknameError) {
      alert("닉네임 형식에 맞게 입력해주세요");
      return;
    }
    const res = await axios
      .post("http://local/3000/api/user/dup/nickname", checknickname)
      .then((res) => {
        if (res.status === 200) {
          alert("사용가능한 닉네임입니다");
          setDupnickname(true);
        }
      })
      .catch((res) => {
        if (res.response.status === 409) {
          alert("이미 가입된 닉네임입니다");
        }
      });
  };

  const onSubmit = async () => {
    // if (validation()) {
    //   return;
    // }
    if (!userId) setUserIdError(true);
    if (!password) setPasswordError(true);
    if (!confirmPassword) setConfirmPasswordError(true);
    if (!nickname) setnicknameError(true);
    if (!userId || !nickname || !password || !confirmPassword) {
      return alert("다시 입력해주세요");
    }

    if (
      userId !== "" &&
      nickname !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      if (dupEmail === false) {
        alert("이메일 중복확인을 완료해주세요");
        return;
      } else if (dupnickname === false) {
        alert("닉네임 중복확인을 완료해주세요");
        return;
      }
      await axios
        .post("http:/local/3000/api/user/signup", data)
        .then((response) => {
          if (response.status === 200) {
            navigate("/login");
          }
        })
        .catch((response) => {
          if (response.response.status === 500) {
            alert("다시 한 번 확인해주세요");
          } else if (response.response.status === 400) {
            alert("입력 양식을 확인해주세요");
          }
        });
    }
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
        >
          <div className="wrap">
            <PostImgBox postImg={previewImg} />

            <input
              id="img"
              type="file"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              onChange={OnChangeFile}
            />
            <label id="imglabel" htmlFor="img">
              파일 선택
            </label>
          </div>
          <div>
            <input
              className="check"
              id="email"
              type="email"
              placeholder="이메일을 입력해주세요"
              required
            />
            <button>이메일 중복확인</button>
          </div>
          <div>
            <input
              className="check"
              id="nickName"
              type="text"
              placeholder="닉네임을 입력해주세요"
              required
              minLength={2}
              maxLength={12}
              onChange={(e) => {
                onChangenickname(e);
                setDupnickname(false);
              }}
            />
            <button onClick={onChecknickname}>닉네임 중복확인</button>
          </div>
          <div>
            <input
              className="nonecheck"
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <input
              className="nonecheck"
              type="password"
              placeholder="비밀번호를 확인해주세요"
              required
              onChange={onChangeConfirmPassword}
            />
          </div>
          <ButtonBox>
            <input id="signup" className="signupsubmit" type="submit"></input>
            <label id="signuplabel" htmlFor="signup" onClick={onSubmit}>
              회원가입
            </label>
          </ButtonBox>
        </Form>
        <ButtonBox>
          {/* <div className="button">
            <button>회원가입</button>
          </div> */}
          <div className="button">
            <button onClick={() => navigate("/login")}>로그인</button>
          </div>
        </ButtonBox>
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
`;

const ButtonBox = styled.div`
  width: 100%;
  transform: translateY(20px);
  text-align: center;

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
    background-color: #acd137;
    border: none;
    border-radius: 20px;
    box-sizing: border-box;
    /* width: 80%; */
    width: 500px;
    cursor: pointer;
    padding: 10px;
    margin: 10px;
  }
  & button {
    background-color: #acd137;
    border: none;
    border-radius: 20px;
    box-sizing: border-box;
    width: 80%;
    cursor: pointer;
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
