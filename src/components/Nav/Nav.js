import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav>
      <div class="nav-wrap">
        <div class="nav-logo">
          <p id="logo">Westagram</p>
        </div>
        <div class="nav-search">
          <img class="search-icon" src="/images/search.png" alt="search" />
          <input type="text" placeholder="검색" />
        </div>
        <div class="util">
          <span>
            <a href="#!">
              <img src="/images/home.png" alt="home" />
            </a>
          </span>
          <span>
            <a href="#!">
              <img src="/images/dm.png" alt="direct-message" />
            </a>
          </span>
          <span>
            <a href="#!">
              <img src="/images/plus.png" alt="upload" />
            </a>
          </span>
          <span>
            <a href="#!">
              <img src="/images/explore.png" alt="explore" />
            </a>
          </span>
          <span>
            <a href="#!">
              <img src="/images/heart.png" alt="like" />
            </a>
          </span>
          <span>
            <a href="#!">
              <img src="/images/profile.png" alt="my-profile" />
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
