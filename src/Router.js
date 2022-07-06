import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//강철 컴포넌트
import LoginKang from "./pages/kang/Login/Login";
import MainKang from "./pages/kang/Main/Main";

//영수 컴포넌트
import LoginYoung from "./pages/young/Login/Login";
import MainYoung from "./pages/young/Main/Main";

//예빈 컴포넌트
import LoginYebin from "./pages/yebin/Login/Login";
import MainYebin from "./pages/yebin/Main/Main";

//승연 컴포넌트
import LoginYeon from "./pages/yeon/Login/Login";
import MainYeon from "./pages/yeon/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-kang" element={<LoginKang />} />
        <Route path="/main-kang" element={<MainKang />} />

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
