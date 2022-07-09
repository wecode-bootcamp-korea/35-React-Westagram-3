import React from 'react';
import { Link } from 'react-router-dom';
import Story from '../../../components/Nav/yebin/Story';
import Follow from '../../../components/Nav/yebin/Follow';
import Post from '../../../components/Nav/yebin/Post';

import './MainYebin.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCompass,
  faHeart,
  faUser,
  faComment,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';

const MainYebin = () => {
  return (
    <div className="mainWrap">
      <header className="nav">
        <ul>
          <li>
            <Link to="/login-yebin">
              <img src="../../../../images/yebin/instagram.png" alt="#" />
            </Link>
            <hr />
            <Link to="/login-yebin">Instagram</Link>
          </li>
          <li className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} classNameName="glass" />
            <input type="search" placeholder="검색" />
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCompass} classNameName="icon" />
            </span>
            <span>
              <FontAwesomeIcon icon={faHeart} classNameName="icon" />
            </span>
            <span>
              <FontAwesomeIcon icon={faUser} classNameName="icon" />
            </span>
          </li>
        </ul>
      </header>
      <div className="mainfeed">
        <div className="main">
          <div className="feeds">
            <div className="art">
              <div className="fedtop">
                <img
                  src="../../../../images/yebin/round.jpeg"
                  alt="동그라미 이미지"
                />
                <div className="textbox">
                  <p>
                    wecode_bootcamp
                    <br />
                    <strong>weCode - 위코드</strong>
                  </p>
                </div>
              </div>
              <div className="fedimg">
                <img
                  src="../../../../images/yebin/feedbig.jpeg"
                  alt="피드 이미지"
                />
              </div>
              <div className="checkicon">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faHeart} classNameName="heart" />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faComment} classNameName="heart" />
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faShareNodes}
                      classNameName="heart"
                    />
                  </li>
                </ul>
              </div>
              <div className="fedtext">
                <div className="like">
                  <img
                    src="../../../../images/yebin/round.jpeg"
                    alt="동그라미 이미지"
                  />
                  <p>
                    <strong>dpqls</strong>님 외 <strong>4명</strong>이
                    좋아합니다.
                  </p>
                </div>
                <div className="tcon">
                  <p>
                    <span>wecode_bootcamp</span>"위코드는 단순 교육업체가 아닌
                    개발자 커뮤니티입니다." wecode에서 배우고 저는 총 5개
                    회사에서 오퍼를 받았습니다. -wecode졸업생{' '}
                    <a href="#!">더보기</a>
                  </p>
                  <p className="time">5분전</p>
                </div>
                <Post />
              </div>
            </div>
          </div>
          <div className="rightm">
            <div className="feedright">
              <div className="rtop">
                <img
                  src="../../../../images/yebin/round.jpeg"
                  alt="동그라미 이미지"
                />
                <div className="myname">
                  <p>
                    wecode-bootcamp
                    <br />
                    <strong>weCode | 위코드</strong>
                  </p>
                </div>
              </div>
              <div className="news">
                <div className="storyall">
                  <div className="storybox">
                    <p>
                      스토리{' '}
                      <a href="#!">
                        <span>모두보기</span>
                      </a>
                    </p>
                  </div>
                  <div className="friend">
                    <ul>
                      <Story />
                      <Story />
                      <Story />
                    </ul>
                  </div>
                </div>
                <div className="chucheon">
                  <div className="chall">
                    <div className="chubox">
                      <p>
                        회원님을 위한 추천
                        <a href="#!">
                          <span>모두보기</span>
                        </a>
                      </p>
                    </div>
                    <div className="follow">
                      <ul>
                        <Follow />
                        <Follow />
                        <Follow />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainYebin;
