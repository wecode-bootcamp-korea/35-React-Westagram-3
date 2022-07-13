import React from 'react';
import './MainYeon.scss'

const MainYeon = () => {
   return (
      <div>
         <main>
            <div class="feeds-wrap">
               <div class="feeds">
                  <section class="stories swiper">
                     <ul class="swiper-wrapper">
                        <li class="swiper-slide"><img src="https://placeimg.com/56/56/any" alt="img"/><span class="story-name">kim-coding</span></li>
                        <li class="swiper-slide"><img src="https://placeimg.com/56/56/architecture" alt="img"/><span class="story-name">kill_hyunmin</span></li>
                        <li class="swiper-slide"><img src="https://placeimg.com/56/56/nature" alt="img"/><span class="story-name">geumkwan-lee</span></li>
                        <li class="swiper-slide"><img src="https://placeimg.com/56/56/people" alt="img"/><span class="story-name">wecode</span></li>
                        <li class="swiper-slide"><img src="https://placeimg.com/56/56/any" alt="img"/><span class="story-name">Ju-wonyoung</span></li>
                        <li class="swiper-slide"><img src="https://placeimg.com/56/56/grayscale" alt="img"/><span class="story-name">hyunju_lee</span></li>
                        <li class="swiper-slide"><img src="https://placeimg.com/56/56/sepia" alt="img"/><span class="story-name">Park-seoyun</span></li>
                        <li class="swiper-slide"><img src="https://placeimg.com/56/56/tech" alt="img"/><span class="story-name">Ryu-seungyeon</span></li>
                        <li class="swiper-slide"><img src="https://placeimg.com/56/56/animals" alt="img"/><span class="story-name">Ahn-sanghyun</span></li>
                        <li class="swiper-slide"><img src="https://placeimg.com/56/56/any" alt="img"/><span class="story-name">um-sunghoon</span></li>
                     </ul>
                     <div class="swiper-button-prev"></div>
                     <div class="swiper-button-next"></div>
                  </section>
                  <article>
                     <div class="feed-wrap">
                        {/* 피드 상단 */}
                        <div class="feed-header">
                           <div class="feed-profile">
                              <div class="pf-img">
                                 <img src="https://placeimg.com/32/32/any" alt="myProfileImage" />
                              </div>
                              <div class="pf-text">
                                 <p class="pf-id">wecode_together</p>
                                 <p class="pf-name">선정릉</p>
                              </div>
                           </div>
                           <div class="feed-more">
                              <button><img src="/img/more.png" alt="more-feed" /></button>
                           </div>
                        </div>
                        {/* 피드 이미지 */}
                        <div class="feed-img">
                           <ul class="swiper-wrapper">
                              <li class="swiper-slide"><img src="https://placeimg.com/470/587/any" alt="img"/></li>
                           </ul>
                           <div class="swiper-button-prev"></div>
                           <div class="swiper-button-next"></div>
                        </div>
                        {/* 피드 하단 */}
                        <div class="feed-bot">
                           <div class="icons-wrap">
                              <div class="icons-left">
                                 <span><a href="#!"><img src="/img/heart.png" alt="like"/></a></span>
                                 <span><a href="#!"><img src="/img/comment.png" alt="comment"/></a></span>
                                 <span><a href="#!"><img src="/img/dm.png" alt="direct-message"/></a></span>
                              </div>
                              <div class="icons-right">
                                 <span><a href="#!"><img src="/img/ribbon.png" alt="bookmark"/></a></span>
                              </div>
                           </div>
                           <p class="like">좋아요 27개</p>
                           <div class="contents">
                              <span class="writer">wecode</span>
                              <span class="content">함께해서 위코드</span>
                           </div>
                           <section class="comment">
                              <form method="post">
                                 <textarea placeholder="댓글 달기..." autocomplete="off"></textarea>
                                 <button disabled type="submit">게시</button>
                              </form>
                           </section>
                        </div>
                     </div>
                  </article>
               </div>
            </div>
            <div class="main-right">
               <div class="profile my-profile">
                  <div class="pf-img">
                     <img src="https://placeimg.com/56/56/any" alt="img"/>
                  </div>
                  <div class="pf-text">
                     <p class="pf-id">wecode</p>
                     <p class="pf-name">함께해서 위코드</p>
                  </div>
               </div>
               <div class="recommand">
                  <div class="reco-text">
                     <span class="main-txt">회원님을 위한 추천</span>
                     <span class="sub-txt"><a href="#!">모두 보기</a></span>
                  </div>
                  <div class="reco-list">
                     <div class="profile">
                        <div class="pf-img">
                           <img src="https://placeimg.com/56/56/nature" alt="img"/>
                        </div>
                        <div class="pf-text">
                           <p class="pf-id">wecode</p>
                           <p class="pf-name">회원님을 팔로우합니다.</p>
                        </div>
                        <p class="follow"><a href="#!">팔로우</a></p>
                     </div>
                     <div class="profile">
                        <div class="pf-img">
                           <img src="https://placeimg.com/56/56/people" alt="img"/>
                        </div>
                        <div class="pf-text">
                           <p class="pf-id">gaebal</p>
                           <p class="pf-name">회원님을 팔로우합니다.</p>
                        </div>
                        <p class="follow"><a href="#!">팔로우</a></p>
                     </div>
                     <div class="profile">
                        <div class="pf-img">
                           <img src="https://placeimg.com/56/56/tech" alt="img"/>
                        </div>
                        <div class="pf-text">
                           <p class="pf-id">saebal</p>
                           <p class="pf-name">Westagram 신규 가입</p>
                        </div>
                        <p class="follow"><a href="#!">팔로우</a></p>
                     </div>
                     <div class="profile">
                        <div class="pf-img">
                           <img src="https://placeimg.com/56/56/animals" alt="img"/>
                        </div>
                        <div class="pf-text">
                           <p class="pf-id">sorryforpartyrocking</p>
                           <p class="pf-name">wonyoung-Ju님 외 1명이 팔로우합니다.</p>
                        </div>
                        <p class="follow"><a href="#!">팔로우</a></p>
                     </div>
                     <div class="profile">
                        <div class="pf-img">
                           <img src="https://placeimg.com/56/56/architecture" alt="img"/>
                        </div>
                        <div class="pf-text">
                           <p class="pf-id">HaveAgoodDay</p>
                           <p class="pf-name">geumkwan-Lee님이 팔로우합니다.</p>
                        </div>
                        <p class="follow"><a href="#!">팔로우</a></p>
                     </div>
                  </div>
               </div>
               <div class="footer">
                  <ul class="footer-link">
                     <li><a href="https://about.instagram.com/">소개</a></li>
                     <li><a href="https://help.instagram.com/">도움말</a></li>
                     <li><a href="https://about.instagram.com/blog/">홍보 센터</a></li>
                     <li><a href="https://developers.facebook.com/docs/instagram">API</a></li>
                     <li><a href="https://www.instagram.com/about/jobs/">채용 정보</a></li>
                     <li><a href="https://www.instagram.com/legal/privacy/">개인정보처리방침</a></li>
                     <li><a href="https://www.instagram.com/legal/terms/">약관</a></li>
                     <li><a href="https://www.instagram.com/explore/locations/">위치</a></li>
                     <li>
                        <span id="change-lang">언어</span>
                        <select name="language" id="lang" class="none">
                           <option value="ko">한국어</option>
                           <option value="en">영어</option>
                        </select>
                     </li>
                  </ul>
                  <span class="copy">&copy; 2022 INSTAGRAM FROM META</span>
               </div>
            </div>
         </main>
      </div>
   );
};


export default MainYeon;
