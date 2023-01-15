import BookPage from "pages/BookPage/BookPage";
import Home from "pages/Home/Home";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path="/book/:id" element={<BookPage />} />
    </Routes>
  );
};

export default Router;
