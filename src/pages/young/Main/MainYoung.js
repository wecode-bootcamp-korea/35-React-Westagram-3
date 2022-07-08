import React, { useState } from 'react';
import './MainYoung.scss';
import '../../../styles/common.scss';

const Main = () => {
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
            <div className="comment" />
            <div className="comment-insert">
              <input
                type="text"
                className="comment-content"
                placeholder="댓글 달기..."
              />
              <button className="insert">게시</button>
            </div>
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
              <div className="nameTag">
                <img
                  src="/images/young/people.jpg"
                  className="profile"
                  alt=""
                />
                <p>
                  0___s00
                  <br />
                  <span>영숙</span>
                </p>
              </div>
              <div className="nameTag">
                <img
                  src="/images/young/people.jpg"
                  className="profile"
                  alt=""
                />
                <p>
                  0___s00
                  <br />
                  <span>영순</span>
                </p>
              </div>
              <div className="nameTag">
                <img
                  src="/images/young/people.jpg"
                  className="profile"
                  alt=""
                />
                <p>
                  0___s00
                  <br />
                  <span>영신</span>
                </p>
              </div>
              <div className="nameTag">
                <img
                  src="/images/young/people.jpg"
                  className="profile"
                  alt=""
                />
                <p>
                  0___s00
                  <br />
                  <span>영사</span>
                </p>
              </div>
            </div>
          </div>
          <div className="recommend" />
        </div>
      </div>
    </div>
  );
};

export default Main;
