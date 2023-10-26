import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main.js";
import Page from "./pages/page.js"; // 공통 페이지 컴포넌트를 만듭니다.

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:page" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
