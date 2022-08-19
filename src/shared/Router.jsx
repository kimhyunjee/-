import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "../components/common/Header";
// import Layout from "../components/common/Layout";

import MainPage from "./MainPage";
import LogInPage from "./LogInPage";
import NotFound from "./NotFound";
import DetailPage from "./DetailPage";
import MyPage from "./MyPage";
import PostPage from "./PostPage";

function Router() {
  return (
    <BrowserRouter>
      {/* <Layout>
        <Header /> */}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/post/:postId" element={<DetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default Router;
