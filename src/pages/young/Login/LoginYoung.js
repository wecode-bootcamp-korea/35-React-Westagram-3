import { React, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-young');
  };
  const [disabled, setDisabled] = useState(true); // 버튼 disabled
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const handleldInputId = e => {
    // id 값
    const { value } = e.target;
    setId(value);
  };
  const handleldInputPwd = e => {
    // password 값
    const { value } = e.target;
    setPwd(value);
  };
  const loginActive = () => {
    // id가 @ 를 포함하고 password의 길이가 5자 이상일 때 버튼활성화
    return id.includes('@') && pwd.length > 4
      ? setDisabled(false)
      : setDisabled(true);
  };

  return (
    <div className="login">
      <div className="guideLine">
        <header>
          <div className="logo">Westagram</div>
        </header>
        <section>
          <form onKeyUp={loginActive}>
            <div>
              <input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                className="login-id"
                onChange={handleldInputId}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호"
                className="login-pwd"
                onChange={handleldInputPwd}
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
