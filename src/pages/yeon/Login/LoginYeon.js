import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginYeon.scss';

const LoginYeon = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const IdInput = e => {
    setId(e.target.value);
  };
  const PwInput = e => {
    setPw(e.target.value);
  };
  const checkValue = () => {
    return !(id.includes('@') && pw.length > 5);
  };

  return (
    <>
      <div className="container">
        <div className="main-area">
          <div className="left-area"></div>
          <div className="right-area">
            <form className="login-wrap">
              <p id="logo">Westagram</p>
              <div className="input-wrap">
                <input
                  type="text"
                  id="id"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onChange={e => {
                    IdInput(e);
                  }}
                />
                <input
                  type="password"
                  id="pw"
                  placeholder="비밀번호"
                  onChange={e => {
                    PwInput(e);
                  }}
                />
              </div>
              <button
                id="login-btn"
                type="submit"
                disabled={checkValue()}
                onClick={fetch('http://10.58.56.109:8000/users/login', {
                  method: 'POST',
                  body: JSON.stringify({
                    email: id,
                    password: pw,
                  }),
                })
                  .then(response => response.json())
                  .then(result => console.log('결과: ', result))}
              >
                로그인
              </button>
              <div className="text-or">
                <div className="line"></div>
                <div className="or">또는</div>
                <div className="line"></div>
              </div>
              <p className="login-fb">
                <i className="xi-facebook-official"></i> Facebook으로 로그인
              </p>
              <Link to="/Main" className="forgot-pw">
                비밀번호를 잊으셨나요?
              </Link>
            </form>
            <div className="join-wrap">
              <p className="no-account">
                계정이 없으신가요?<strong>가입하기</strong>
              </p>
            </div>
            <p className="download-text">앱을 다운로드하세요.</p>
            <div className="download-wrap">
              <a href="#!">
                <img src="/img/downloadAppStore.png" alt="downloadAppStore" />
              </a>
              <a href="#!">
                <img
                  src="/img/downloadGooglePlay.png"
                  alt="downloadGooglePlay"
                />
              </a>
            </div>
          </div>
        </div>
        <footer>
          <ul>
            <li>
              <a href="#!">Meta</a>
            </li>
            <li>
              <a href="#!">소개</a>
            </li>
            <li>
              <a href="#!">블로그</a>
            </li>
            <li>
              <a href="#!">채용 정보</a>
            </li>
            <li>
              <a href="#!">도움말</a>
            </li>
            <li>
              <a href="#!">API</a>
            </li>
            <li>
              <a href="#!">개인정보처리방침</a>
            </li>
            <li>
              <a href="#!">약관</a>
            </li>
            <li>
              <a href="#!">인기 계정</a>
            </li>
            <li>
              <a href="#!">해시태그</a>
            </li>
            <li>
              <a href="#!">위치</a>
            </li>
            <li>
              <a href="#!">Instagram Lite</a>
            </li>
            <li>
              <a href="#!">연락처 업로드 & 비사용자</a>
            </li>
            <li>
              <a href="#!">댄스</a>
            </li>
            <li>
              <a href="#!">식음료</a>
            </li>
            <li>
              <a href="#!">집 및 정원</a>
            </li>
            <li>
              <a href="#!">음악</a>
            </li>
            <li>
              <a href="#!">시각 예술</a>
            </li>
          </ul>
          <p className="copy">
            <span className="lang">한국어</span>
            &copy; 2022 Instagram from Meta
          </p>
        </footer>
      </div>
    </>
  );
};

export default LoginYeon;
