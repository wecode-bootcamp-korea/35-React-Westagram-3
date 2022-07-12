import React, { useState } from 'react';
import CommentList from './CommentList'; // 댓글 컴포넌트
import { StoryData } from './data';

const Main = () => {
  const [userName] = useState('zlZonys12'); // 댓글 입력 이름
  const [comment, setComment] = useState(''); // 댓글 입력창
  const [feedComments, setFeedComments] = useState([]); // 댓글들을 넣을 배열

  const post = e => {
    // 게시 버튼 눌렀을 시 함수
    e.preventDefault(); // form으로 인한 새로고침 막아줌
    const copyFeedComments = [...feedComments]; // copyFeedComment에 배열을 복사
    copyFeedComments.push(comment); // 입력되는 comment를 배열에 push
    setFeedComments(copyFeedComments); // 입력된 카피된 배열의 값들은 FeedComments의 값이 됨.
    setComment(''); // 입력됐으니 입력한 댓글창 초기화
  };

  return (
    <div className="main">
      <header>
        <nav>
          <span>
            <p className="logo">
              <img src="/images/young/instagram1.png" alt="" />
              <span>Westagram</span>
            </p>
          </span>
          <div className="search-bar">
            <i className="fa fa-search fa-1x" aria-hidden="true" />
            <input type="text" className="search-bar__input" />
          </div>
          <span>
            <img src="/images/young/instagram3.png" alt="" />
            <img src="/images/young/instagram4.png" alt="" />
            <img src="/images/young/instagram5.png" alt="" />
          </span>
        </nav>
      </header>
      <div className="mainFriend">
        <div className="feeds">
          <div className="article">
            <span className="nameTag">
              <img src="/images/young/feed2.jpg" className="profile" alt="" />
              <p>
                0___s00
                <br />
                <span>Seoul</span>
              </p>
            </span>

            <img src="/images/young/feed1.jpg" alt="" />

            <div className="article-foot">
              <div className="article-foot-iconbar">
                <button className="btn-heart">
                  <img src="/images/young/instagram4.png" alt="" id="heart" />
                </button>
                <img src="/images/young/artcle-icon1.JPG" alt="" />
                <img src="/images/young/artcle-icon2.JPG" alt="" />
              </div>
            </div>
            <div className="like-number">
              wecode_bootcamp님 외 4명이 좋아합니다.
            </div>
            <form onSubmit={post}>
              <div className="comment">
                {feedComments.map((commentArr, i) => {
                  return (
                    <CommentList
                      userName={userName}
                      userComment={commentArr}
                      key={i}
                    />
                  );
                })}
              </div>
              <div className="comment-insert">
                <input
                  type="text"
                  className="comment-content"
                  placeholder="댓글 달기..."
                  onChange={e => {
                    setComment(e.target.value);
                  }}
                  value={comment}
                />
                <button className="insert" onClick={post}>
                  게시
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="main-right">
          <div className="nameTag">
            <img src="/images/young/feed2.jpg" className="profile" alt="" />
            <p>
              0___s00
              <br />
              <span>영수</span>
            </p>
          </div>
          <div className="line">회원님을 위한 추천</div>
          <div className="story">
            <p className="story-p" />
            <div className="story-peoples">
              {StoryData.map(info => {
                return (
                  <div className="nameTag" key={info.id}>
                    <img
                      src="/images/young/people.jpg"
                      className="profile"
                      alt=""
                    />
                    <p>
                      0___s00
                      <br />
                      <span>{info.content}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="recommend" />
        </div>
      </div>
    </div>
  );
};

export default Main;
