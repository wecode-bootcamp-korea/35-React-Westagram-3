import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//강철 컴포넌트
import LoginKang from './pages/kang/Login/LoginKang';
import MainKang from './pages/kang/Main/MainKang';
import ReplyKang from './pages/kang/Reply/ReplyKang';

//영수 컴포넌트
import LoginYoung from './pages/young/Login/LoginYoung';
import MainYoung from './pages/young/Main/MainYoung';

//예빈 컴포넌트
import LoginYebin from './pages/yebin/Login/LoginYebin';
import MainYebin from './pages/yebin/Main/MainYebin';

//승연 컴포넌트
import LoginYeon from './pages/yeon/Login/LoginYeon';
import MainYeon from './pages/yeon/Main/MainYeon';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-kang" element={<LoginKang />} />
        <Route path="/main-kang" element={<MainKang />} />
        <Route path="main-kang/reply-kang/:0" element={<ReplyKang />} />
        <Route path="main-kang/reply-kang/:1" element={<ReplyKang />} />
        <Route path="main-kang/reply-kang/:2" element={<ReplyKang />} />
        <Route path="main-kang/reply-kang/:3" element={<ReplyKang />} />
        <Route path="main-kang/reply-kang/:4" element={<ReplyKang />} />
        <Route path="main-kang/reply-kang/:5" element={<ReplyKang />} />
        <Route path="main-kang/reply-kang/:6" element={<ReplyKang />} />

        <Route path="/login-young" element={<LoginYoung />} />
        <Route path="/main-young" element={<MainYoung />} />

        <Route path="/login-yebin" element={<LoginYebin />} />
        <Route path="/main-yebin" element={<MainYebin />} />

        <Route path="/login-yeon" element={<LoginYeon />} />
        <Route path="/main-yeon" element={<MainYeon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
