import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './LoginYebin.scss';

const LoginYebin = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [disable, setDisable] = useState('true');
  const navigate = useNavigate();

  //ID 입력값 저장
  const inputId = event => {
    setId(event.target.value);
    // console.log('id', id);
  };

  //PW 입력값 저장
  const inputPw = event => {
    setPw(event.target.value);
    // console.log('pw', pw);
  };

  //로그인 버튼 활성화
  const handleBtn = () => {
    id.includes('@') && pw.length >= 5 ? setDisable(false) : setDisable(true);
  };

  //ID에 @포함하고 PW가 5글자 이상이면 페이지 이동
  const gotoMain = e => {
    e.preventDefault();
    fetch('http://10.58.6.45.:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
        name: '정예빈',
        mobile_number: 'dsfdfsdfd',
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          navigate('/main-yebin');
        }
        localStorage.setItem('key', result.token);
      });
  };
  localStorage.setItem('gkdl', '12321312312');
  // console.log(localStorage.getItem('gkdl'));

  return (
    <div id="loginWrap">
      <div class="topcon">
        <div class="insta">
          <Link to="/Main">
            <h1 class="logo">westagram</h1>
          </Link>
          <div class="login">
            <form class="my">
              <input
                type="text"
                className="userId"
                onChange={inputId}
                onKeyUp={handleBtn}
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                type="password"
                className="userpw"
                onChange={inputPw}
                onKeyUp={handleBtn}
                placeholder="비밀번호"
              />
              <button
                type="btn"
                disabled={disable}
                className={disable ? 'btnOff' : 'btnOn'}
                onClick={gotoMain}
              >
                로그인
              </button>
            </form>
          </div>
          <div class="box">
            <div class="line">또는</div>
            <div class="facebook">
              <p>
                <a href="#!">
                  <span>Facebook</span>으로 로그인
                </a>
              </p>
              <p>
                <a href="#!">비밀번호를 잊으셨나요?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bttomcon">
        <p>
          계정이 없으신가요?
          <a href="#!">
            <span>가입하기</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginYebin;
