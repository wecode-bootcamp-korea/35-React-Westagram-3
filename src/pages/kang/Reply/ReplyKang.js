import React, { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ReplyKang.scss';
import ProfileImg from '../../../components/componentkang/profile_img';

const ReplyKang = () => {
  let id = useParams();
  const idRef = useRef(1);
  const navigate = useNavigate();

  const windowOutsideClickGoback = e => {
    e.target.className === 'reply__page' && navigate(-1);
  };

  const [inputValue, setInputValue] = useState('');
  const [inputArray, setInputArray] = useState([
    {
      id: 0,
      value: 'reply example',
    },
  ]);

  const inputValueToArray = e => {
    e.preventDefault();
    const reply = {
      id: idRef.current,
      value: inputValue,
    };
    setInputArray([...inputArray, reply]);
    setInputValue('');

    idRef.current = idRef.current + 1;
  };

  return (
    <div
      className="reply__page"
      onClick={e => {
        windowOutsideClickGoback(e);
      }}
    >
      <div className="section">
        <section
          className="section__left"
          style={{
            backgroundImage: `url(/images/kang/${id[0]}.jpg)`,
          }}
        ></section>

        <section className="section__right">
          <div className="user__bar">
            <ProfileImg content="팔로우" />
            <div className="horizontal__line"></div>
            <ProfileImg content="Have a nice day" />
          </div>

          <ul className="reply__window">
            {inputArray.map(element => {
              return (
                <SetReply
                  key={element.id}
                  id={element.id}
                  data={element.value}
                />
              );
            })}
          </ul>

          <div className="horizontal__line"></div>

          <div className="function__bar">
            <div className="functions">
              <div className="function__left">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-regular fa-comment"></i>
                <i className="fa-regular fa-paper-plane"></i>
              </div>

              <div className="function__right">
                <i className="fa-regular fa-bookmark"></i>
              </div>
            </div>
            <div className="likes__count">좋아요 2개</div>
            <div className="date">오늘 날짜</div>
          </div>

          <div className="horizontal__line"></div>

          <form
            className="reply__form"
            onSubmit={e => {
              inputValueToArray(e);
            }}
          >
            <i className="fa-regular fa-face-angry"></i>
            <input
              required
              type="text"
              placeholder="댓글 달기..."
              value={inputValue}
              onChange={e => {
                setInputValue(e.target.value);
              }}
            />
            <button>게시</button>
          </form>
        </section>
      </div>
    </div>
  );
};

function SetReply({ data, id }) {
  let [heartColorSwitch, setHeartColorSwitch] = useState(true);
  let [likesCounter, setLikesCounter] = useState(0);

  const removeReply = e => {
    e.target.parentElement.remove();
  };
  const heartChange = boolean => {
    if (heartColorSwitch === boolean) {
      return 'display__inline';
    } else {
      return 'display__none';
    }
  };

  return (
    <li className="reply__list">
      <div className="my__img smaller__border"></div>
      <div className="my__content">
        <div className="my__info">
          <span className="my__id">kangchullee</span>
          <span className="my__talk"> {data} </span>
        </div>
        <div className="my__status">
          <span className="my__likes">
            좋아요
            <span className="likes__count--up">&nbsp;{likesCounter}</span>개
          </span>
          <span>답글달기</span>
        </div>
      </div>
      <i
        className={`heart__button fa-regular fa-heart ${heartChange(true)}`}
        id={id}
        onClick={e => {
          return (
            setHeartColorSwitch(false),
            setLikesCounter(prevState => prevState + 1)
          );
        }}
      ></i>
      <i
        className={`heart__button--active fa-solid fa-heart ${heartChange(
          false
        )}`}
        onClick={() => {
          return (
            setHeartColorSwitch(true),
            setLikesCounter(prevState => prevState - 1)
          );
        }}
      ></i>
      <i
        className="xmark fa-solid fa-xmark"
        onClick={e => {
          removeReply(e);
        }}
      ></i>
    </li>
  );
}

export default ReplyKang;
