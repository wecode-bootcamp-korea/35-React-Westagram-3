import React from 'react';
import './LoginYoung.scss';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-young');
  };
  const [disabled, setdisabled] = useState('true');
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const handleldInput = e => {
    setId(e.target.value);
    console.log(id);
  };

  return (
    <div className="login">
      <div className="guideLine">
        <header>
          <div className="logo">Westagram</div>
        </header>
        <section>
          <form onChange={handleldInput}>
            <div>
              <input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                className="login-id"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호"
                className="login-pwd"
              />
            </div>
          </form>
          <div>
            <button
              className="login-btn"
              onClick={goToMain}
              disabled={disabled}
            >
              로그인
            </button>
          </div>
        </section>
        <footer>
          <Link to="/" className="forget-pwd">
            비밀번호를 잊으셨나요?
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Login;
