import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "../components/common/Header";

import Layout from "../components/common/Layout";
import MainPage from "../pages/MainPage";
import LogInPage from "../pages/LogInPage";
import NotFound from "../pages/NotFound";
import DetailPage from "../pages/DetailPage";
import MyPage from "../pages/MyPage";
import PostPage from "../pages/PostPage";
import StartPage from "../pages/StartPage";
import EditPage from "../pages/EditPage";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/post/:postId" element={<DetailPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/edit/:postId" element={<EditPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
